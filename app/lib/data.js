import { Product, User } from "./models"
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


export const fetchSingleUserData = async (id) =>{
   

    try {
        ConnectToDB()
        const singleUser = await User.findById(id)
        return singleUser
    } catch (error) {
        throw new Error("Something Wrong to get user Data please try again!")
    }
} 


export const fetchProductData = async (q,page) =>{
    const regax = new RegExp(q,"i");

    const ITEM_PER_PAGE = 2

    try {
        ConnectToDB()
        const count = await Product.find({title: {$regex : regax}}).count()
        const products = await Product.find({title: {$regex : regax}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * 
            (page-1))
        return {count,products}
    } catch (error) {
        throw new Error("Something Wrong to get product Data please try again!")
    }
}



export const fetchSingleProductData = async (id) =>{
   

    try {
        ConnectToDB()
        const singleProduct = await Product.findById(id)
        return singleProduct
    } catch (error) {
        throw new Error("Something Wrong to get product Data please try again!")
    }
} 