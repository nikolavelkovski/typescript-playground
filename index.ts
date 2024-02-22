console.log("Hello")
console.log("dsd")

type User = {
    name: string,
    password: string
}

type Username = {
    email: string
    name:string
}
type Post = {
    title: string,
    content: string
    author: Username
}

type UserID = number;

type MathOperations = (x: number, y: number) => number


type Result = ErrorClass | SuccessClass
function getUserById(id: UserID) : User {

    console.log("do something")

    return {

    } as User
}
const add: MathOperations = (x,y) => x + y
const user = getUserById(123)

//////////////////////

class SuccessClass {
    constructor(public data: unknown){}
}

class ErrorClass {
    constructor(public message: Error){
    }
}

function handleResult(result: Result){
    result instanceof SuccessClass ? console.log("success") : console.log("error")
}
const successResult : Result = new SuccessClass({code:200,message: "data loaded"})
const errorResult : Result = new ErrorClass({message:"Failed something", name: "SomeErrorName"})


///////

type BaseUser = {
    id: UserID;
    username: string;
    email: string;
}

type AdminUser = BaseUser & {
    role: "admin"
}

const admin: AdminUser = {
    id:1,
    username: "admin",
    email: "admin@yahoo.com",
    role: "admin"
}