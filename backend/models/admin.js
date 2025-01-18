import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
    
    userName:{
        type: String,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    },
    userPassword: {
        type: String,
        required: true
    }
, role: {
    type: String,
    enum: ['user', 'admin'], // Set role options: 'user' and 'admin'
    default: 'admin', // Default to 'user' if no role is specified
  },
});

const Admin = mongoose.model('admin', AdminSchema);

export default Admin;