import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { authConfig } from "./authconfig"
import { ConnectToDB } from "./lib/utils"
import { User } from "./lib/models"
import bcyipt from "bcrypt"

const login = async (credentials)=>{
    try {
        ConnectToDB()
        const user = await User.findOne({username:credentials.username})

        if(!user) throw new Error ("username not found")

        const isCorrectPassword = await bcyipt.compare(credentials.password, user.password )

        if(!isCorrectPassword) throw new Error ("password is not correct")
        

        return user

    } catch (error) {
        console.log(err)
        throw new Error ("Failed to login!")
    }
}




export const {signIn,sigOut,auth} =  NextAuth({
    ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {

        try {
           const user =  await login(credentials)
           return user
        } catch (error) {
            return null
        }
      },
    }),
  ],
})