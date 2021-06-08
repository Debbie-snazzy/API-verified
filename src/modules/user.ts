

export default class User {

    name="";
    email ="";
    pwd ="";
    private _isVerified =false;
     private _lastLogin ="";
    static toJson: any;

     constructor(name:string, email:string, password:string){
         this.name = name;
         this.email = email;
         this.pwd = password;
         this._isVerified = false;
         this._lastLogin = new Date().toDateString()
     }

     get isVerified(){
         return this._isVerified
     }

     get lastLogin(){
        return this._lastLogin
    }

    set isVerified(arg:boolean){
        this._isVerified = arg
    }
    set lastLogin(date:string){
        this._lastLogin = date;
    }
    get toJson(){
        return{
        name: this.name,
        email:this.email,
        pwd: "*****",
        isVerified: this.isVerified=== true? "yes"  : "no",
        lastLogin: this.lastLogin
        }
}
}



