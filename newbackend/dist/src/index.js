"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const data_source_1 = require("./data-source");
const User_1 = require("../typeorm/entities/User");
data_source_1.AppDataSource.initialize().then(async () => {
    console.log("Data source has been initialized");
    const user = new User_1.User();
    user.firstname = "Grishma";
    user.lastname = "Sao";
    user.email = "grishma15@gmail.com";
    user.contactnumber = "9316836458";
    user.dob = new Date('2002-10-15');
    user.gender = "female";
    await data_source_1.AppDataSource.manager.save(user);
    console.log("User has been saved");
    const users = await data_source_1.AppDataSource.manager.find(User_1.User);
    console.log("All users from database:", users);
}).catch((err) => {
    console.error("Error during data source initialization:", err);
});
