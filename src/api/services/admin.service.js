import { Admin } from "../models/index.js";
export async function Register(username,password){
    try {
        return await Admin.create({username:username,password:password})
    } catch (error) {
        console.log(error)
    }
}

