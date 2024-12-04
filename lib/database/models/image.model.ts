
import { model, models, Schema } from "mongoose";


import { ObjectId } from "mongoose";

export interface IImage {
    title: string; // Title of the image
    transformationTypes: string; // Types of transformations applied to the image
    publicId: string; // Unique public ID of the image
    width?: number; // Optional: Image width in pixels
    height?: number; // Optional: Image height in pixels
    config?: object; // Optional: Configuration object for storing additional image settings
    transformationUrl?: string; // Optional: URL of the transformed image
    aspectRatio?: string; // Optional: Aspect ratio of the image
    color?: string; // Optional: Dominant color or color theme of the image
    prompt?: string; // Optional: Prompt used (e.g., for AI-generated images)
    author?: {
        id: ObjectId;
        firstName: string;
        lastName: string;
    }; // Optional: Reference to the user (author) who owns or created the image
    createAt?: Date; // Creation date of the image
    updateAt?: Date; // Last modification date of the image
  }


const imageSchema = new Schema({
        title: {
            type: String,
            required: true,
        },
        transformationTypes: {
            type: String,
            required: true,},
    publicId: {
        type: String,
        required: true,
    }, 
    width: {
        type: Number,
    
    },
    height: {
        type: Number,},
        config: {
            type: Object,
        },

        transformationUrl: {
            type: URL,},

            aspectRatio: { type: String},

            color: { type: String},
            prompt: { type: String},
            author: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                
            },

            createAt: { type: Date, default: Date.now },
            updateAt: { type: Date, default: Date.now },
});

const Image = models?.Image || model("Image", imageSchema);

export default Image



