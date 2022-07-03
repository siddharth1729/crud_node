const express = require('express');
const mongoose = require('mongoose');
const app = express();


//########################  Mongodb Atlas Connection  ##########################



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://siddharth1729:@Pandey1729@cluster0.nik2p.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    console.log('++++++ Database Connected ++++++');

    client.close();
});


const port = 8000;
app.listen(port, () => {
    console.log('\n+++++++++++++++++++++++++++++++++++++++++++++++');
    console.log(`Server is listning on port =====> ${port} <====`);
    console.log('+++++++++++++++++++++++++++++++++++++++++++++++\n');

});
