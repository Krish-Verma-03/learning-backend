import mongoose , {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
    {
        
        videoFile:{
            type:String,
            required:true,
        },
        thumbnail:{
            type:String,  //cloudinary url
            required:true,
        },
        title:{
            type:String,
            required:true,
        },
        description:{
            type:String,
            required:true,
        },
        views:{
            type:Number,
            default: 0
        },
        isPublished:{
            type:Boolean,
            default:true,
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User",
            required:true,
        }
    },
    
    {timestamps:true})

    videoSchema.plugin(mongooseAggregatePaginate) // use to paginate: break large datasets into smaller ones in pipeline

    export const Video = mongoose.model("Video",videoSchema);