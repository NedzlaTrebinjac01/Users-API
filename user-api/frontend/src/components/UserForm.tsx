import React, { useState } from "react";
import axios from "../api/api";

interface User {
  name: string;
  surname: string;
  email: string;
  phoneNumber: string;
}

const UserForm: React.FC = () => {
  const [user, setUser] = useState<User>({
    name: "",
    surname: "",
    email: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/users", user);
      alert("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New User</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={user.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="surname"
        placeholder="Surname"
        value={user.surname}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={user.email}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="phoneNumber"
        placeholder="Phone Number"
        value={user.phoneNumber}
        onChange={handleChange}
        required
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
