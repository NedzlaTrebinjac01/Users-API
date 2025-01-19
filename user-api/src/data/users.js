"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
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
exports.users = namesAndEmails.map((item) => {
    var _a;
    const phoneData = userData.find((data) => data.email === item.email);
    return {
        _id: Math.random().toString(36).substr(2, 9),
        name: item.name,
        surname: item.surname,
        email: item.email,
        phoneNumber: ((_a = phoneData === null || phoneData === void 0 ? void 0 : phoneData.phoneNumbers[0]) === null || _a === void 0 ? void 0 : _a.value) || "",
    };
});
