const { MongoClient } = require("mongodb");
const URL = "mongodb+srv://mateuserra97:5VjdVTp97y49O4uO@cluster0.prjxaxn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let client;
async function connectToMongo() {
  try {
    if (!client) {
      client = await MongoClient.connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    }
    return client;
  } catch (err) {
    console.log(err);
  }
}

async function getMongoCollection(ulissesdb, horasMarcadas) {
  const client = await connectToMongo();
  return client.db(ulissesdb).collection(horasMarcadas);
}

module.exports = { getMongoCollection };
