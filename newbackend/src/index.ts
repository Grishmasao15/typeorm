import "reflect-metadata";
import { AppDataSource } from "./config/data-source";

import { User } from "../typeorm/entities/User";

AppDataSource.initialize().then(async () => {
    console.log("Data source has been initialized");

    const user = new User();
    user.firstname = "Grishma";
    user.lastname = "Sao";
    user.email = "grishma15@gmail.com";
    user.contactnumber = "9316836458";
    user.dob = new Date('2002-10-15');
    user.gender = "female"

    await AppDataSource.manager.save(user);
    console.log("User has been saved");

    const users = await AppDataSource.manager.find(User);
    console.log("All users from database:", users);


}).catch((err) => {
    console.error("Error during data source initialization:", err)
})


