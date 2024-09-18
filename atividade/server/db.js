import mongoose from "mongoose";

export default async function conectNaDB(){
    mongoose.connect("mongodb+srv://leticiavillegas007:Lele1502@cluster1.yeaig.mongodb.net/spotify?retryWrites=true&w=majority&appName=Cluster1") 

    return mongoose.connection;
}
