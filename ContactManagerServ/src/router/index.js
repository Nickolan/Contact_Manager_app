const { Router } = require("express");
const { Contact } = require("../dbs");

const server = Router();

server.get("/", async (req, res) => {
  try {
    const Contacts = await Contact.findAll();
    return res.status(200).json(Contacts);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

server.get("/:id", async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const found = await Contact.findOne({
      where: {
        id
      },
    });
    if (!found) throw new Error("Couldn't find Contact");
    return res.status(200).json(found);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

server.post("/", async (req, res) => {
  const { name, lastname, phone, email } = req.body;
  try {
    const resp = await Contact.create({ name, lastname, phone, email });
    return res.status(201).json(resp);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

server.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { phone, email } = req.body;
  try {
    const oneContact = await Contact.findOne({
      where: {
        id,
      },
    });
    if (oneContact) {
        console.log(id);
    }
    if (!oneContact) throw new Error("Couldn't find Contact");

    if (phone) oneContact.phone = phone;
    if (email) oneContact.email = email;

    await oneContact.save();

    return res
      .status(200)
      .json({ message: "Contact saved successfully", data: oneContact });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

server.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const contact = await Contact.findByPk(id);
    if (!contact) throw new Error("contact not found");

    await contact.destroy();
    return res.status(200).json({message: "contact destroyed", data: contact})
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }

});

module.exports = server;
