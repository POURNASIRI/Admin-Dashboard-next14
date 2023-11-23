import { User } from "./models"
import { ConnectToDB } from "./utils"

export const fetchUserData = async () =>{

    try {
        ConnectToDB()
        const users = await User.find()
        return users
    } catch (error) {
        throw new Error("Something Wrong to get user Data please try again!")
    }
}