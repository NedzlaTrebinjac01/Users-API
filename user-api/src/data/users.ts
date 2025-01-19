import { User } from "../models/user";

const userData = [
    {
        email: "marina@wiline.com",
        phoneNumbers: [{ 
            type: "primary",
            value: "202-555-0105"
        }],
    },
    {
        email: "kip@wiline.com",
        phoneNumbers: [{
            type: "primary",
            value: "202-555-0168",
        }],
    },
    {
        email: "lorie@wiline.com",
        phoneNumbers: [{
            type: "primary",
            value: "202-555-0162",
        }],
    },
    {
        email: "jasmin@wiline.com",
        phoneNumbers: [{
        type: "primary",
        value: "202-555-0168",
        }],
    },
    {
        email: "emma@wiline.com",
        phoneNumbers: [{
        type: "primary",
        value: "202-555-0187",
        }]
    },
    {
        email: "elvia@wiline.com",
        phoneNumbers: [{
        type: "primary",
        value: "202-555-0164",
        }],
    },
    {
        email: "liliana@wiline.com",
        phoneNumbers: [{
        type: "primary",
        value: "202-555-0161",
        }],
    },
    {
        email: "florencio@wiline.com",
        phoneNumbers: [{
        type: "primary",
        value: "202-555-0127",
        }],
    },
    {
        email: "delores@wiline.com",
        phoneNumbers: [{
        type: "primary",
        value: "202-555-0143",
        }],
    }       
];

const namesAndEmails = [
    { email: "marina@wiline.com", name: "Marina", surname: "Doe" },
    { email: "kip@wiline.com", name: "Kip", surname: "Smith" },
];

export const users: User[] = namesAndEmails.map((item) => {
    const phoneData = userData.find((data) => data.email === item.email);

    return {
        _id: Math.random().toString(36).substr(2, 9),
        name: item.name,
        surname: item.surname,
        email: item.email,
        phoneNumber: phoneData?.phoneNumbers[0]?.value || "",
    };
});