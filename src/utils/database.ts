import mongoose from 'mongoose';

async function MongoDB(): Promise<void> {
    try {
        console.log("CONNECTING TO DATABASE...");
        await mongoose.connect('mongodb+srv://barbershop:hvvl8T66HNzu7dbD@nodetuts.yalha.mongodb.net/TODO?retryWrites=true&w=majority' as string);
        console.log("DATABASE CONNECTED");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
}

export default MongoDB;