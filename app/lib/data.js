import { User } from "./models"
import { ConnectToDB } from "./utils"

export const fetchUserData = async (q,page) =>{
    const regax = new RegExp(q,"i");

    const ITEM_PER_PAGE = 2

    try {
        ConnectToDB()
        const count = await User.find({username: {$regex : regax}}).count()
        const users = await User.find({username: {$regex : regax}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * 
            (page-1))
        return {count,users}
    } catch (error) {
        throw new Error("Something Wrong to get user Data please try again!")
    }
}