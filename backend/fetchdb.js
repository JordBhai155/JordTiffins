const mongoose = require("mongoose");
require('dotenv').config();

const URI = process.env.dbLink;

let isConnected = false

const mongoconnect = async () => {
  try {
    if(!isConnected){await mongoose.connect(URI, {
    });

    console.log("Connected to MongoDB");
    isConnected = true
  }

}
catch (err) {
  console.error("Error: " + err);
  throw err; // Throw the error to handle it outside the function
}}


const fetchProducts =async ()=>{
  try{
    const fetched_data = mongoose.connection.db.collection("products");
    const data = await fetched_data.find({}).toArray();
 //  console.log(data);

  return data; // Return the fetched data

} catch (err) {
  console.error("Error: " + err);
  throw err; // Throw the error to handle it outside the function
}
}


const fetchFaq =async ()=>{
  try{
    const fetched_data = mongoose.connection.db.collection("faqs");
    const data = await fetched_data.find({}).toArray();
 //  console.log(data);

  return data; // Return the fetched data

} catch (err) {
  console.error("Error: " + err);
  throw err; // Throw the error to handle it outside the function
}
}

// Close MongoDB connection on process termination
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('MongoDB connection closed through app termination');
    process.exit(0);
  });
});

module.exports = {
  mongoconnect,
  fetchProducts,
  fetchFaq,
  isConnected
};