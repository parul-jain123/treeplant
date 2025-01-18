import User from '../../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const secret = process.env.JWT_SECRET || "atsjwtkey"
const register = async (req, res) => {
    try {
        const { userName, userEmail, userPassword } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ userEmail });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists with this email' });
        }

        // Hash the password before saving
        const hashPassword = await bcrypt.hash(userPassword, 10);

        // Create new user object
        const newUser = new User({
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
const login = async (req, res) => {
    try {
        const { userEmail, userPassword } = req.body;

        // Ensure userPassword is provided
        if (!userPassword) {
            return res.status(400).json({ error: 'Password is required' });
        }

        // Find user by email
        const user = await User.findOne({ userEmail });
        if (!user) {
            return res.status(400).json({ error: 'User not found' });
        }

        console.log('User from DB:', user); // Log user object to ensure userPassword is available

        // Compare entered password with stored hashed password
        const isPasswordValid = await bcrypt.compare(userPassword, user.userPassword);
        if (!isPasswordValid) {
            return res.status(400).json({ error: 'Invalid password' });
        }

        // Send the response with user data
        res.status(200).json({
            success: true,
            message: 'Login successful',
            user: {
                id: user._id,
                userName: user.userName,
                userEmail: user.userEmail
            }
        });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: 'Internal server error' });
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
export { register, login, logout }
