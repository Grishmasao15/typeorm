"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkActivation = exports.getActivationToken = exports.createActivationToken = exports.getUser = exports.createUser = void 0;
const generalResponse_helper_1 = __importDefault(require("../helper/generalResponse.helper"));
const user_repository_1 = require("../repositories/user.repository");
const createUser = async (req, res) => {
    try {
        console.log(req.body, "create user body");
        const result = await (0, user_repository_1.createUserRepo)(req.body.values);
        console.log(result, "result");
        return (0, generalResponse_helper_1.default)(res, result);
    }
    catch (error) {
        console.log(error);
        return (0, generalResponse_helper_1.default)(res, error, '', 'error', false, 400);
    }
};
exports.createUser = createUser;
const getUser = async (req, res) => {
    try {
        const result = await (0, user_repository_1.getUserRepo)();
        return (0, generalResponse_helper_1.default)(res, result);
    }
    catch (error) {
        console.log(error);
        return (0, generalResponse_helper_1.default)(res, error, '', 'error', false, 400);
    }
};
exports.getUser = getUser;
const createActivationToken = async (req, res) => {
    try {
        console.log(req.body.obj);
        const token = await (0, user_repository_1.generateToken)(req.body.obj);
        console.log(token);
        const result = await (0, user_repository_1.createToken)(token, req.body.obj.id);
        console.log(result);
        return (0, generalResponse_helper_1.default)(res, result);
    }
    catch (error) {
        console.log(error);
        return (0, generalResponse_helper_1.default)(res, error, '', 'error', false, 400);
    }
};
exports.createActivationToken = createActivationToken;
const getActivationToken = async (req, res) => {
    try {
        const token = await (0, user_repository_1.getToken)(req.params.email);
        console.log(token, "controller token");
        return (0, generalResponse_helper_1.default)(res, token);
    }
    catch (error) {
        console.log(error);
        return (0, generalResponse_helper_1.default)(res, error, '', 'error', false, 400);
    }
};
exports.getActivationToken = getActivationToken;
const checkActivation = async (req, res) => {
    try {
        const { token, email } = req.params;
        const result = await (0, user_repository_1.userActivation)(token, email);
        console.log(result, "check activation resultttttttt");
        return (0, generalResponse_helper_1.default)(res, result);
    }
    catch (error) {
        console.log(error);
        return (0, generalResponse_helper_1.default)(res, error, '', 'error', false, 400);
    }
};
exports.checkActivation = checkActivation;
