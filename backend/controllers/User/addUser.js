import User from '../../models/User.js'
import uniqid from 'uniqid';

const addUser = async (req, res) => {
    try {
        const {userName, userEmail, userPassword } = req.body;
        
        const newUser = new User({
            userName,
            userEmail,
            userPassword
           
        });
        newUser.userName = userName;
        newUser.userEmail = userEmail;
        newUser.userPassword = userPassword;

        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {addUser};