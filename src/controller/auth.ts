import {Request, Response} from "express";
import Auth from "../modules/auth";

const auth = new Auth();

class AuthController{

static register(req:Request, res:Response){
    
    const{name, email, pwd} = req.body;
    
    const newUser = auth.register(name, email, pwd);
    
    res.send({massage: "Account successfully created", data: newUser})
}


static login(req:Request, res:Response){

    const {email,pwd} = req.body;
    
    const result = auth.login(email, pwd);

    res.send({ message: "welcome Back"});
}
static list_of_users(req:Request, res:Response){
    const list = auth.listOfUser();
    res.send(list);
}
static get_user_by_email(req:Request, res:Response){
    const {email} = req.query;
    const user = auth.getUserByEmail (email as string || "");
    res.send(user);
}

static getVerified(req:Request, res:Response){
    const{email, isVerified} = req.body;
    const user =auth.getVerified(email as string, isVerified as boolean);
    res.send({message: "Account successfully updated", data:user});

}


}

export default AuthController;