import { Contact } from "../models/index.js";
export async function createContact(name,link){
    try {
        return await Contact.create({name,link})

    } catch (error) {
        console.log(error)
    }
}

