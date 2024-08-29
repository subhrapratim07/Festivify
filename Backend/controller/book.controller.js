// import Book from "../model/book.model.js";

// export const booking= async(req,res)=>{
//     try {
//         const {name,batch,foodPreference}=req.body;
       

//         const createreg=new Book({

//           name: name,
//           batch: batch,
//           foodPreference: foodPreference,
      

//         });
//        await createreg.save()
//         res.status(201).json({message:"Registration successfully"});
//     } catch (error) {
//         console.log("Error: " + error.message);
//         res.status(500).json({ message: "Internal server error" });
//     }
// };

// Backend controller code

import Book from "../model/book.model.js";

export const booking = async (req, res) => {
  try {
    const { name, batch, foodPreference } = req.body;
    const paymentProof = req.file;

    if (!paymentProof) {
      return res.status(400).json({ message: "Payment proof is required" });
    }

    // Convert buffer to base64 string
    const paymentProofBase64 = paymentProof.buffer.toString("base64");

    const createreg = new Book({
      name,
      batch,
      foodPreference,
      paymentProof: {
        data: paymentProofBase64,
        contentType: paymentProof.mimetype,
      },
    });

    await createreg.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    const bookings = await Book.find();
    res.status(200).json(bookings);
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};



  



