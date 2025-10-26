import express from 'express';
import ensureAuthenticated from '../Middlewares/Auth.js';
const router = express.Router();

router.get("/",ensureAuthenticated,(req,res) =>{
    console.log("...logging user details",req.user)
    res.status(200).json([
        {
            welcome:"welcome to the page"
        }
    ])
});

export default router;