"use server"

import { revalidatePath } from "next/cache"
import { Product, User } from "./models"
import { ConnectToDB } from "./utils"
import { redirect } from "next/navigation"
import bcrypt from "bcrypt"
import { signIn } from "../auth"


export const AddUser  = async (formData)=>{

    

    const {username,email,password,phoneNumber,address,isAdmin,isActive} =
    Object.fromEntries(formData)
    

    try {
        ConnectToDB()
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)
        const newUser = new User ({
            username,
            email,
            password: hashedPassword,
            phoneNumber,
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
export const UpdateUser  = async (formData)=>{

    
    const {id,username,email,password,phoneNumber,address,isAdmin,isActive} = 
    Object.fromEntries(formData)
    try {
        ConnectToDB()
        const updateFields = {
            username,
            email,
            password,
            phoneNumber,
            address,
            isAdmin,
            isActive
        }

        Object.keys(updateFields).forEach(
            (key)=>
            (updateFields[key] === "" || undefined) && delete updateFields[key]

        )
        await User.findByIdAndUpdate(id,updateFields)

      
        
    } catch (error) {
        console.log(error)
        throw new Error("Failed to  Update User Please try again!")
    }
    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
}

export const DeleteUser  = async (formData)=>{

    

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


export const UpdateProduct  = async (formData)=>{

    

    const {id,title,desc,price,stock,color,size} = 
    Object.fromEntries(formData)
    try {
        ConnectToDB()
        const updateFields ={
            title,
            desc,
            price,
            stock,
            color,
            size
        }

        Object.keys(updateFields).forEach(
            (key)=>
            (updateFields[key] === "" ||  undefined) && delete updateFields[key]
        )
        
     
        await Product.findByIdAndUpdate(id,updateFields)
        
        
    } catch (error) {
        console.log(error)
        throw new Error("Failed to  create Product Please try again!")
    }
    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
}


// login

export const authenticate = async (prevState, formData) => {
    const {username,password} = Object.fromEntries(formData)
  
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
      return "Wrong Credentials!";
    }
  };