const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://siddharth1729:@Pandey1729@cluster0.nik2p.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});