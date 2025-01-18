import Contact from '../models/contact.js'


const addUser = async (req, res) => {
    try {
        const {userName, userEmail, userMessage } = req.body;
        
        const newUser = new Contact({
            userName,
            userEmail,
            userMessage,
           
        });
        newUser.userName = userName;
        newUser.userEmail = userEmail;
        newUser.userMessage = userMessage;

        await newUser.save();

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {addUser};


