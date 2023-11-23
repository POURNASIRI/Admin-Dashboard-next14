import { User } from "./models"
import { ConnectToDB } from "./utils"

export const fetchUserData = async (q) =>{
    const regax = new RegExp(q,"i")

    try {
        ConnectToDB()
        const users = await User.find({username: {$regex : regax}})
        return users
    } catch (error) {
        throw new Error("Something Wrong to get user Data please try again!")
    }
}