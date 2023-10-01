const mongoose=require("mongoose")
const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://chauhanshivang012:shivang@cluster0.cpxnpl5.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp', {
            //To remove warnings
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
connectDB();


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection
