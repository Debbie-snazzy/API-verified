"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = __importDefault(require("../validation/auth"));
var auth_2 = __importDefault(require("../controller/auth"));
var route = express_1.Router();
route.get("/users", auth_2.default.list_of_users);
route.get("/user", auth_2.default.get_user_by_email);
route.get("/user", auth_2.default.getVerified);
route.post("/login", auth_1.default.login, auth_2.default.login);
route.post("/register", (auth_1.default.register, auth_2.default.register));
route.post("/getVerified", (auth_1.default.getVerified, auth_2.default.getVerified));
exports.default = route;
