import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    
    userName:{
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userMessage: {
        type: String,
        required: true
    }
});

const Contact = mongoose.model('contact', ContactSchema);

export default Contact;