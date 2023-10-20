require('dotenv').config()
const {Sequelize} = require('sequelize')
const ContactModel = require('./models/Contact.models')
const {USER, PASSWORD, HOST, PORT, DATABASE} = process.env

const URI = `mysql://${USER}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`;

const sequelize = new Sequelize(URI,{
    logging: false,
    native: false,
});

ContactModel(sequelize);

const { Contact } = sequelize.models;


module.exports = {
    ...sequelize.models,
    conn: sequelize
}