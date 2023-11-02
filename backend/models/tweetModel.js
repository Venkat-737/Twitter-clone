import mongoose , {Model} from "mongoose";


const tweetSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,

    },
    content : {
        type : String,
        required : true
    }
})


const Tweet = mongoose.model('Tweet',tweetSchema);

export default Tweet;