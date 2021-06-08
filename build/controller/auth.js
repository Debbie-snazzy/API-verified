"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("../modules/auth"));
var auth = new auth_1.default();
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.register = function (req, res) {
        var _a = req.body, name = _a.name, email = _a.email, pwd = _a.pwd;
        var newUser = auth.register(name, email, pwd);
        res.send({ massage: "Account successfully created", data: newUser });
    };
    AuthController.login = function (req, res) {
        var _a = req.body, email = _a.email, pwd = _a.pwd;
        var result = auth.login(email, pwd);
        res.send({ message: "welcome Back" });
    };
    AuthController.list_of_users = function (req, res) {
        var list = auth.listOfUser();
        res.send(list);
    };
    AuthController.get_user_by_email = function (req, res) {
        var email = req.query.email;
        var user = auth.getUserByEmail(email || "");
        res.send(user);
    };
    AuthController.getVerified = function (req, res) {
        var _a = req.body, email = _a.email, isVerified = _a.isVerified;
        var user = auth.getVerified(email, isVerified);
        res.send({ message: "Account successfully updated", data: user });
    };
    return AuthController;
}());
exports.default = AuthController;
