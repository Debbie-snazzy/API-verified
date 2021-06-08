import { NextFunction, Request, Response } from "express";





export default class AuthValidation {




    static login(req: Request, res: Response, next: NextFunction) {

        const { email, pwd } = req.body;

        if (typeof email !== "string") throw "Email must be a string"

        if (typeof pwd !== "string") throw "pwd must be a string"

        if (pwd.length < 6) throw "Password mush not be less than six (6) characters";


        next();
    }

    static register(req: Request, res: Response, next: NextFunction){
        
        const{ name, email, pwd } = req.body;

        if(typeof name !== "string") throw "name must be a string";

        if(typeof email !== "string") throw "email must be a string";

        if(typeof pwd !== "string") throw "pwd must be a string";
        
        if(!name ) throw "name is required";

        if(email) throw "email is invalid";

        if( pwd ) throw "pwd is invalid ";

        if (pwd.length < 6) throw "Password mush not be less than six (6) characters";
        
        return next();

    } 

static getVerified(req: Request, res: Response, next: NextFunction){
        
        const{ email, password } = req.body;

        if(typeof email !== "string") throw "email must be a string";

        if(typeof password !== "string") throw "pwd must be a string";
    
        if(email) throw "email is invalid";

        if( password ) throw "pwd is invalid ";

        if (password.length < 6) throw "Password mush not be less than six (6) characters";
        
        return next();
    }




}




