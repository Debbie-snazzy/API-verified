import {Router } from "express";
import AuthValidation from "../validation/auth";
import AuthController from "../controller/auth";

const route = Router();

route.get("/users", AuthController.list_of_users);
route.get("/user",AuthController.get_user_by_email );
route.get("/user",AuthController.getVerified );


route.post("/login", AuthValidation.login, AuthController.login);
route.post("/register", (AuthValidation.register, AuthController.register));
route.post("/getVerified", (AuthValidation.getVerified, AuthController.getVerified));

export default route;