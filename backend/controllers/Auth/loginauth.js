




import Admin from '../../models/admin.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const secret = process.env.JWT_SECRET || "atsjwtkey"



const registerauth = async (req, res) => {
    try {
        const { userName, userEmail, userPassword } = req.body;

        // Check if the user already exists
        const existingUser = await Admin.findOne({ userEmail });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists with this email' });
        }

        // Hash the password before saving
        const hashPassword = await bcrypt.hash(userPassword, 10);

        // Create new user object
        const newUser = new Admin({
            userName,
            userEmail,
            userPassword: hashPassword
        });

        // Save the new user to the database
        await newUser.save();

        // Generate JWT token after successful registration
        const token = jwt.sign({ userId: newUser._id }, secret, { expiresIn: '1h' });

        // Send response with success message and token
        res.status(201).json({
            message: 'User created successfully',
            token
        });

    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};









// Admin Login Function
const loginauth = async (req, res) => {
    try {
        const { userEmail, userPassword } = req.body;

        // Validate input
        if (!userEmail || !userPassword) {
            return res.status(400).json({ error: 'Email and password are required.' });
        }

        // Check if the admin exists in the database
        const admin = await Admin.findOne({ userEmail });
        if (!admin) {
            return res.status(404).json({ error: 'Admin not found.' });
        }

        // Compare the entered password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(userPassword, admin.userPassword);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password.' });
        }

        // Respond with admin details on successful login
        res.status(200).json({
            success: true,
            message: 'Admin login successful.',
            admin: {
                id: admin._id,
                userName: admin.userName,
                userEmail: admin.userEmail,
            },
        });
    } catch (error) {
        console.error('Error during admin login:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
};











const logout = (req, res) => {
    try {
        res.clearCookie('token');
        res.status(200).json({ success: true, message: "Logout successful" });
    } catch (error) {
        console.error('Error logging out user:', error);
        res.status(500).json({ error:'galat logut' });
    }
}
export {  registerauth ,loginauth, logout }

