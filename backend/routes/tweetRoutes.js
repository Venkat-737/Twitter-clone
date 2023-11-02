import express from "express";
import {user,tweets, tweetDelete} from "../controllers/tweetControllers.js";


const router = express.Router();

router.post("/tweets",user);

router.get("/tweets",tweets);


router.delete("/tweets/:id",tweetDelete);

export default router;