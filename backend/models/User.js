import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    
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
    default: 'user', // Default to 'user' if no role is specified
  },
});

const User = mongoose.model('User', UserSchema);

export default User;