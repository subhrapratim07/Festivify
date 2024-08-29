// import mongoose from "mongoose";
//  const bookSchema=mongoose.Schema({

//   name: { type: String, required: true },
//   batch: { type: String, required: true },
//   foodPreference: { type: String, required: true },
    
// });
// const Book=mongoose.model("Book",bookSchema);
// export default Book;

import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  batch: { type: String, required: true },
  foodPreference: { type: String, required: true },
  paymentProof: {
    data: { type: String }, // Base64 string
    contentType: { type: String },
  },
});

const Book = mongoose.model("Book", bookSchema);

export default Book;


