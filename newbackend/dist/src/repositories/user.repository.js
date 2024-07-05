"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userActivation = exports.getToken = exports.createToken = exports.getUserRepo = exports.createUserRepo = exports.generateToken = exports.userRepository = void 0;
const User_1 = require("../../typeorm/entities/User");
const data_source_1 = require("../data-source");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = require("dotenv");
const bcrypt_1 = __importDefault(require("bcrypt"));
(0, dotenv_1.config)();
// const user = new User()
// user.firstname = "Grishma";
// user.lastname = "Sao";
// user.email = "grishma15@gmail.com";
// user.contactnumber = "9316836458";
// user.dob = new Date('2002-10-15');
// user.gender = "female"
exports.userRepository = data_source_1.AppDataSource.getRepository(User_1.User);
const generateToken = (user) => {
    var _a;
    const AUTH_SECRET_KEY = (_a = process.env.SECRET_KEY) !== null && _a !== void 0 ? _a : 'asJHDv3564gb';
    return jsonwebtoken_1.default.sign({ email: user.email, id: user.id }, AUTH_SECRET_KEY, { expiresIn: '1d' });
};
exports.generateToken = generateToken;
const createUserRepo = async (data) => {
    console.log(data, "dataaaa");
    const user = new User_1.User();
    user.firstname = data.fname;
    user.lastname = data.lname;
    user.email = data.email;
    user.contactnumber = data.phone;
    user.dob = new Date(data.dob);
    user.gender = data.gender;
    const bcryptsalt = bcrypt_1.default.genSaltSync(10);
    let hashPassword = await bcrypt_1.default.hash(data.password, bcryptsalt);
    console.log(hashPassword);
    user.password = hashPassword;
    console.log(user, "create user repo user dataaaaaaa");
    return await exports.userRepository.save(user);
};
exports.createUserRepo = createUserRepo;
const getUserRepo = async () => {
    try {
        console.log("in getUser Repoooooo");
        const users = await exports.userRepository.find();
        console.log("All users from the db: ", users);
        return await exports.userRepository.find();
    }
    catch (err) {
        console.log(err);
    }
};
exports.getUserRepo = getUserRepo;
const createToken = async (token, id) => {
    try {
        const user = await exports.userRepository.findOneBy({
            id: id,
        });
        if (user !== null) {
            user.activation_token = token;
            user.token_createdAt = new Date();
            return await exports.userRepository.save(user);
        }
    }
    catch (err) {
        console.log(err);
    }
};
exports.createToken = createToken;
const getToken = async (email) => {
    try {
        const data = await exports.userRepository.findOneBy({
            email: email,
        });
        return data === null || data === void 0 ? void 0 : data.activation_token;
    }
    catch (error) {
        console.log(error);
    }
};
exports.getToken = getToken;
const userActivation = async (token, email) => {
    try {
        const data = await exports.userRepository.findOneBy({
            email: email,
        });
        console.log(data, "daytfashgdfas");
        const diff = Number(new Date(Date.now())) - Number(new Date(data.token_createdAt));
        const mins = Math.floor((diff % 86400000) / 60000);
        if (mins > 10) {
            return "link expired";
        }
        else {
            data.is_active = true;
            return await exports.userRepository.save(data);
        }
    }
    catch (error) {
        console.log(error);
    }
};
exports.userActivation = userActivation;
