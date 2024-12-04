import { model, models, Schema } from "mongoose";
import { unique } from "next/dist/build/utils";


export interface IUser {
    clerkId: string; // Unique identifier from Clerk (or any authentication provider)
    email: string; // User's email address
    username: string; // Unique username for the user
    photo: string; // URL to the user's profile picture
    firstName: string; // User's first name
    lastName: string; // User's last name
    planId: number; // Identifier for the user's subscription plan
    creditBalance: number; // User's credit balance
  }
  

const UserScheema = new Schema({ 

    clerkId: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    username: {
        type: String,
        required: true,
        unique: true

    },
    photo: {
        type: String,
        required: true,

    },
    firstName: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,
        required: true,

    },

    planId:{
        type: Number,
        required: true
    },
    creditBalance: {
        type: Number,
        required: true
    },

})

const User  = models?.User || model("User", UserScheema)

export default User