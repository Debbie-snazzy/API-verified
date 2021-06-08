import User from "./user";



export default class Auth{
    
    users: Array<User> = []

constructor (){

   // const user1 = new User("sarah", "sarah@yahoo.com", "123456")
    //const user2 = new User("paul", "paul@outlook.com", "password")
    //const user3 = new User("hope", "hope@gmail.com", "hope123")

    this.users = []
}

login(email:string, pwd:string){

    const user = this.users.find((e) =>{
        const isMatch = e.email=== email && e.pwd===pwd;
        return isMatch
    });
    if(!user) throw new Error("invalid email or password")

    user.lastLogin = new Date().toDateString();

    return user.name + "welcome back !";
}

register(name:string, email:string, pwd:string){
    const user = new User(name, email, pwd);

     this.users.push(user);
        return user.toJson
}
listOfUser(){

    return this.users.map((user) => User.toJson);
}

getUserByEmail(email:string){

    const user = this.users.find((user)=> user.email.toLowerCase() === email.toLowerCase());
    if (!user)throw "No matching user found";
   
    return User.toJson;
}
getVerified(email:string, isVerified:boolean){
    const user = this.users.find((user)=> user.email.toLowerCase() === email.toLowerCase());
    if (!user) throw "not verified";
    if(isVerified !==true && isVerified !==false) throw "isVerified is neither true or false"
    user.isVerified = Boolean(isVerified)
    return  user.toJson;
}
}
