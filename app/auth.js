
import CredentialsProvider from "next-auth/providers/credentials"
import { authConfig } from "./authconfig"
import { ConnectToDB } from "./lib/utils"
import { User } from "./lib/models"
import bcyipt from "bcrypt"
import NextAuth from "next-auth"

const login = async (credentials)=>{
    try {
        ConnectToDB()
        const user = await User.findOne({username:credentials.username})

        if(!user) throw new Error ("username not found")

        const isCorrectPassword = await bcyipt.compare(credentials.password, user.password )

        if(!isCorrectPassword) throw new Error ("password is not correct")
        

        return user

    } catch (err) {
        console.log(err)
        throw new Error ("Failed to login!")
    }
}




export const {signIn,signOut,auth} =  NextAuth({
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
  callbacks:{
    async jwt({token,user}){

        if(user){
          token.username = user.username;
          token.img = user.img
        }
        return token
    },
    async session({session,token}){

        if(token){
          session.user.username = token.username;
          session.user.img = token.img
        }
        return token
    }
  }
})