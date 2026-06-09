require("dotenv").config();
const mongoose=require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = process.env.ATLASDB_URL;

main()
.then(()=>{
    console.log("connecterd to DB");
})
.catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB =async ()=>{
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj)=>({...obj,owner:"698a1a053bd34baa36f618fa"}));
    await Listing.insertMany(initData.data);
};

initDB();

