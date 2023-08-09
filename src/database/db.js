import mongoose from "mongoose";

const connectDatabase = () => {
    console.log("Esperando a conexão com o banco de dados");
  
    mongoose.connect( process.env.MONGODB_URI ,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
      .then(() => console.log("MongoDB Atlas Connected!"))
      .catch((err) => console.log(`Error connecting to MongoDB Atlas: ${err}`));
};
  
  export default connectDatabase;