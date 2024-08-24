// index.js
const express = require('express');
const { mongoconnect, fetchProducts, fetchFaq, isConnected } = require('./fetchdb');
const app = express();
const user = require("./models/user")
const cors = require("cors")
const port = 3001;

app.use(cors())
app.use(express.json())

mongoconnect()
   .then(() => {
      app.use(express.json());

      app.get('/', (req, res) => {
         res.send('Hello, World!');
      });

      app.listen(port, () => {
         console.log(`Server is running at http://localhost:${port}`);
      });

      
   })
   .catch((err) => {
      console.log(err);
   });
// app.get("/api/product?filterType=category&filterName=kitchen",async(req,res)=>{
//    const data = "";
// })

app.get("/api/product",async(req,res)=>{
   try{
      let {filterType,filterName} = req.query
      

      await mongoconnect()

      let data = await fetchProducts();
      let filteredData
      if(filterType && filterName){

         filterType.toLowerCase().replace(/\s/g, '')
         filterName.toLowerCase().replace(/\s/g, '')
         
         if(filterType === "price"){
            
            filteredData = data.filter(product=>{
               const productKey = filterType
               const productValue = parseInt(product[`${productKey}`])
               filterBackPrice = productValue - 250
               filterFrontPrice = productValue + 250
               
               return filterName>filterBackPrice && filterName<filterFrontPrice
            })
         }
         
         else{filteredData = data.filter(product => {
            // console.log(product)
            const productKey = filterType
            // console.log(productKey)
            const productValue = product[`${productKey}`].toString().toLowerCase().replace(/\s/g, '');
    
        
            
            return productValue === filterName;
            
          });}

      }
      
      else{
         filteredData = data
      }
      res.json(filteredData)
   }
   catch(err){
      console.error("Error : ",err)
      res.status(500).json({err: "Server Connection Interrupted!"})
   }
})
app.get("/api/faqs",async(req,res)=>{
   try{
      await mongoconnect()
      const data = await fetchFaq();
      res.json(data)
   }
   catch(err){
      console.error("Error : ",err)
      res.status(500).json({err: "Server Connection Interrupted!"})
   }
})

app.post("/api/newuser",async (req,res)=>{
   try{
      await mongoconnect()
      const { email }=  req.body
      
      console.log("Data recieved successfully")
      
      const newUser = new user({
         email: email
      });
      await newUser.save()
      res.status(200).json(1)
   }
   catch(err){
      console.log("Error found : ",err)
      res.status(400).json(2)
   }

})