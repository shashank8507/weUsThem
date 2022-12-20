const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema({
    "fName": String,
    "lName": String,
    "email": String,
    "phone": Number,
    "imgUrl": String

});

module.exports = class ContactDB {
    constructor() {
        
        this.Contact = null;
    }
    connectionString="mongodb+srv://shashank8507:Shashank@cluster0.cqcpo.mongodb.net/weUsThem?retryWrites=true&w=majority";

    // Pass the connection string to `initialize()`
    initialize(connectionString) {
        return new Promise((resolve, reject) => {
           const db = mongoose.createConnection(
               connectionString
            );
           
            db.once('error', (err) => {
                reject(err);
            });
            db.once('open', () => {
                this.Contact = db.model("Contacts", contactSchema);
                resolve();
            });
        });
    }

    async addNewContact(data) {
        const newContact = new this.Contact(data);
        await newContact.save();
        return newContact;
    }
    
    getAllContacts(page, perPage) { 
        if(+page && +perPage){
            return this.Contact.find().sort({_id: +1}).skip((page - 1) * +perPage).limit(+perPage).exec();
        }
        
        return Promise.reject(new Error('page and perPage query parameters must be valid numbers'));
    }

    getContactById(id) {
        return this.Contact.findOne({_id: id}).exec();
    }

    updateContactById(data, id) {
        return this.Contact.updateOne({_id: id}, { $set: data }).exec();
    }

    deleteContactById(id) {
        return this.Contact.deleteOne({_id: id}).exec();
    }
}