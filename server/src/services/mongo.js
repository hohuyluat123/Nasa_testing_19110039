const mongoose = require("mongoose");

const MONGO_URL = "mongodb+srv://hohuyluat:1234@cluster0.aytpixd.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once('open', () => {
    console.log('MongoDB connect is ready');
});

mongoose.connection.on('error', (err) => {
    console.log(err);
});

async function mongoConnect() {
    await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
    await mongoose.disconnect();
}

module.exports = {
    mongoConnect,
    mongoDisconnect
}