import { revalidatePath } from "next/cache"
import { Product, User } from "./models"
import { ConnectToDB } from "./utils"
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"


export const AddUser  = async (formData)=>{

    "use server"

    const {username,email,password,phone,address,isAdmin,isActive} = 
    Object.fromEntries(formData)
    try {
        ConnectToDB()
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new User ({
            username,
            email,
            password: hashedPassword,
            phone,
            address,
            isAdmin,
            isActive
        })

        await newUser.save()
        
    } catch (error) {
        console.log(error)
        throw new Error("Failed to  create User Please try again!")
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}

export const DeleteUser  = async (formData)=>{

    "use server"

    const {id} = 
    Object.fromEntries(formData)
    try {
        ConnectToDB()
        await User.findByIdAndDelete(id)
        
        
    } catch (error) {
        console.log(error)
        throw new Error("Failed to  delete User Please try again!")
    }
    revalidatePath("/dashboard/users")

}



export const AddProduct  = async (formData)=>{

    "use server"

    const {title,desc,price,stock,color,size} = 
    Object.fromEntries(formData)
    try {
        ConnectToDB()
        const newProduct = new Product ({
            title,
            desc,
            price,
            stock,
            color,
            size
        })

        await newProduct.save()
        
        
    } catch (error) {
        console.log(error)
        throw new Error("Failed to  create Product Please try again!")
    }
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}



export const DeleteProduct  = async (formData)=>{

    "use server"

    const {id} = 
    Object.fromEntries(formData)
    try {
        ConnectToDB()
        await Product.findByIdAndDelete(id)
        
        
    } catch (error) {
        console.log(error)
        throw new Error("Failed to  delete Product Please try again!")
    }
    revalidatePath("/dashboard/products")

}