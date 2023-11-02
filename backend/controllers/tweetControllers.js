import Tweet from "../models/tweetModel.js";
import asyncHandler from "express-async-handler";
const user = asyncHandler(async (req, res) => {
  const { username, content } = req.body;

  try {
    const tweet = await Tweet.create({
      username,
      content,
    });

    res.status(200).json({ message: 'Tweet created successfully', tweet });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create tweet', details: error.message });
  }
});

const tweets = asyncHandler(async(req,res)=>{
    try {
        const documents = await Tweet.find({});
        res.status(200).json({
            documents
        })
        
      } catch (err) {
        console.error('Error fetching documents:', err);
      }
})

const tweetDelete = asyncHandler(async(req,res)=>{
  const tweetId = req.params.id;
  try {
   const deleteTweet = await Tweet.findOneAndDelete({_id : tweetId});
   res.status(200).json({
    deleteTweet
   })
  }catch(error) {
    res.status(500).json({ message: error.message });

  }

})

export { user,tweets, tweetDelete };
