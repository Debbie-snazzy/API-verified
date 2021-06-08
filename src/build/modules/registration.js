"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Registration = /** @class */ (function () {
    function Registration(name, email, password) {
        this.name = "";
        this.email = "";
        this.pwd = "";
        this._isEmailVerified = false;
        this._lastLogin = "";
        this.name = name;
        this.email = email;
        this.pwd = password;
        this._isEmailVerified = false;
        this._lastLogin = new Date().toDateString();
    }
    Object.defineProperty(Registration.prototype, "isEmailVerified", {
        get: function () {
            return this._isEmailVerified;
        },
        set: function (arg) {
            this._isEmailVerified = arg;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Registration.prototype, "lastLogin", {
        get: function () {
            return this._lastLogin;
        },
        set: function (date) {
            this._lastLogin = date;
        },
        enumerable: false,
        configurable: true
    });
    return Registration;
}());
exports.default = Registration;
