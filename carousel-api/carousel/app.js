
const MongoClient = require("mongodb").MongoClient;
let response;

//connection string
const MONGODB_URI ="mongodb+srv://kalanat1:kalana@carouselapp.wevmclp.mongodb.net/?retryWrites=true&w=majority";

// once connect to the database,store that connection and reuse.
let cachedDb = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  // connect the mongodb hosted on MongoDB Atlas
  const client = await MongoClient.connect(MONGODB_URI);

  // Specify the database 
  const db = await client.db("carouseldb");

  cachedDb = db;
  return db;
}

exports.getImagesHandler = async (event, context) => {


    try {  
        context.callbackWaitsForEmptyEventLoop = false;
        const imageCount = event.queryStringParameters['slides'];
        const db = await connectToDatabase();
        const collectionData = await db.collection("carousel-images").find({}).toArray();
        const collection = collectionData.slice(0, imageCount);
        if(imageCount <= 10){
            response = {
                'isBase64Encoded': false,
                'statusCode': 200,
                'headers': {
                    "Access-Control-Allow-Headers" : "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
                },
                'body': JSON.stringify(collection)
            }
        }else{
            response = {
                'isBase64Encoded': false,
                'statusCode': 500,
                'headers': {
                    "Access-Control-Allow-Headers" : "Content-Type",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
                },
                'body': JSON.stringify({error: "Maximum 10 images can be retrieved"})
            }
        }

    } catch (err) {
        console.error(err);
       
    }

    return response;
};

