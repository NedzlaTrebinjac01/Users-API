import { Router } from "express";
import { users } from "../data/users";
import { User } from "../models/user";

const router = Router();

// GET /users - Fetch all users with optional filters
router.get("/", (req, res) => {
    const { query, email, phoneNumber } = req.query;

    let filteredUsers = users;
    // Filter by query (name, surname, email)
    if (query) {
        filteredUsers = filteredUsers.filter(
            (user) =>
                user.name.includes(query as string) ||
                user.surname.includes(query as string) ||
                user.email.includes(query as string) ||
                user.phoneNumber.includes(query as string)
        );
    }

    if (email) {
        filteredUsers = filteredUsers.filter((user) => user.email === email);
    }

    if (phoneNumber) {
        filteredUsers = filteredUsers.filter((user) => user.phoneNumber === phoneNumber);
    }

    res.json(filteredUsers);
});

// GET /users/:id - Fetch a user by ID
router.get("/:id", (req, res) => {
    const user = users.find((user) => user._id === req.params.id);

    if(!user) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
});

// POST /users - Create a new user
router.post("/", (req, res) => {
    const newUser: User ={ _id: Math.random().toString(36).substr(2, 9), ...req.body };
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT /users/:id - Update a user by ID
router.put("/:id", (req, res) => {
   const userIndex = users.findIndex((user) => user._id === req.params.id);
   
   if (userIndex === -1) {
       return res.status(404).json({ message: "User not found" });
   }

   users[userIndex] = { ...users[userIndex], ...req.body };
   res.json(users[userIndex]);
});

// DELETE /users/:id - Delete a user by ID
router.delete("/:id", (req, res) => {
    const userIndex = users.findIndex((user) => user._id === req.params.id);

    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }

    users.splice(userIndex, 1);
    res.json({ success: true });
});

export default router;