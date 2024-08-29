

// import express from "express";
// import multer from "multer";
// import { booking, getAllBookings } from "../controller/book.controller.js";

// const router = express.Router();
// const upload = multer();

// router.post("/booking", upload.single("paymentProof"), booking);


// export default router;


import express from "express";
import multer from "multer";
import { booking, getAllBookings } from "../controller/book.controller.js";

const router = express.Router();
const upload = multer(); // Middleware for file uploads

router.post("/booking", upload.single("paymentProof"), booking);
router.get("/booking", getAllBookings);

export default router;


