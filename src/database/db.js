import mongoose from "mongoose";

const connectDatabase = () => {
    console.log("Esperando a conexão com o banco de dados");
  
    mongoose.connect( process.env.MONGODB_URI ,
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        })
      .then(() => console.log("MongoDB Atlas Connectado!"))
      .catch((err) => console.log(`Erro ao se conectar: ${err}`));
};
  
  export default connectDatabase;