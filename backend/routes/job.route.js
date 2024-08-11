import express from 'express';
import { postJob, getAllJobs, getJobById, getAdminJobs } from '../controllers/job.controller.js';
import isAuthenticated from '../middlewares/isAuthenticated.js';
// import isAdmin from '../middlewares/isAdmin.js';


const router = express.Router();    

router.route("/post").post(isAuthenticated,postJob);
router.route("/get").get(isAuthenticated,getAllJobs);
router.route("/get/:id").get(isAuthenticated,getJobById);
router.route("/getadminjobs").get(isAuthenticated,getAdminJobs);
// router.route("/update/:id").put(isAuthenticated,isAdmin,updateJob);

export default router