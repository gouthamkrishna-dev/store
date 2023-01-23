import express from "express";
const router=express.Router();
import {getAllUser,addUser,getUser} from "../controller/user.js"

router.route("/user").get(getAllUser).post(addUser);

router.route("/:id").get(getUser)

export default router;