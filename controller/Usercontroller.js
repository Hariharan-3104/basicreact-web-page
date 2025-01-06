import mongoose from 'mongoose';
import User from '../Modal/Usermodal.js';

// Create a new user
export const create = async (req, res) => {
    try {
        const { name, email, Address } = req.body;
        const newUser = new User({ name, email, Address });
        await newUser.save();
        res.status(201).json({ message: "User created successfully", data: newUser });
    } catch (error) {
        console.error("Error in createUser:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};


// Fetch users
export const fetch = async (req, res) => {
    try {
        const users = await User.find();
        if (users.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ data: users });
    } catch (error) {
        console.error("Error in fetch:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};



// Update user
export const update = async (req, res) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const userExist = await User.findOne({ _id: id });
        if (!userExist) {
            return res.status(400).json({ message: "User not found" });
        }
        const updateUser = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!updateUser) {
            return res.status(400).json({ message: "Failed to update user" });
        }
        res.status(200).json({ updateUser });
    } catch (error) {
        console.error("Error in update:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

//delete
export const deleted = async (req, res) => {
    try {
        const id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const userExist = await User.findOne({ _id: id });
        if (!userExist) {
            return res.status(404).json({ error: "User not found" });
        }
        const deletedUser = await User.findByIdAndDelete(id);
        res.status(200).json({ data: deletedUser });
    } catch (error) {
        console.error("Error in delete:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
export const findvalue = async (req, res) => {
    try {
        const userExist = await User.find();
        if (!userExist) {
            return res.status(404).json({ error: "User not found" });
        }
        res.status(200).json({ message: userExist });
    } catch (error) {
        console.error("Error in findvalue:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};



