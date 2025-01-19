"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../data/users");
const router = (0, express_1.Router)();
// GET /users - Fetch all users with optional filters
router.get("/", (req, res) => {
    const { query, email, phoneNumber } = req.query;
    let filteredUsers = users_1.users;
    // Filter by query (name, surname, email)
    if (query) {
        filteredUsers = filteredUsers.filter((user) => user.name.includes(query) ||
            user.surname.includes(query) ||
            user.email.includes(query) ||
            user.phoneNumber.includes(query));
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
    const user = users_1.users.find((user) => user._id === req.params.id);
    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
});
// POST /users - Create a new user
router.post("/", (req, res) => {
    const newUser = Object.assign({ _id: Math.random().toString(36).substr(2, 9) }, req.body);
    users_1.users.push(newUser);
    res.status(201).json(newUser);
});
// PUT /users/:id - Update a user by ID
router.put("/:id", (req, res) => {
    const userIndex = users_1.users.findIndex((user) => user._id === req.params.id);
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }
    users_1.users[userIndex] = Object.assign(Object.assign({}, users_1.users[userIndex]), req.body);
    res.json(users_1.users[userIndex]);
});
// DELETE /users/:id - Delete a user by ID
router.delete("/:id", (req, res) => {
    const userIndex = users_1.users.findIndex((user) => user._id === req.params.id);
    if (userIndex === -1) {
        return res.status(404).json({ message: "User not found" });
    }
    users_1.users.splice(userIndex, 1);
    res.json({ success: true });
});
exports.default = router;
