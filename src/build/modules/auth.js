"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = __importDefault(require("./user"));
var Auth = /** @class */ (function () {
    function Auth() {
        this.users = [];
        var user1 = new user_1.default("sarah", "sarah@yahoo.com", "123456");
        var user2 = new user_1.default("paul", "paul@outlook.com", "password");
        var user3 = new user_1.default("hope", "hope@gmail.com", "hope123");
        this.users = [user1, user2, user3];
    }
    Auth.prototype.login = function (email, pwd) {
        var user = this.users.find((function (e) {
            var isMatch = e.email && e.pwd === pwd;
            return isMatch;
        }));
        if (user === undefined)
            throw new Error("invalid email or password");
        user.lastLogin = new Date().toDateString();
        return user.name + "welcome back !";
    };
    Auth.prototype.register = function (name, email, pwd) {
        var user = this.users.find((function (e) {
            var isMatch = e.name && e.email && e.pwd === pwd;
            return isMatch;
        }));
        if (user === undefined)
            throw new Error("invalid registration details");
        user.lastLogin = new Date().toDateString();
        return user.name + "Account successfully created !";
    };
    return Auth;
}());
exports.default = Auth;
