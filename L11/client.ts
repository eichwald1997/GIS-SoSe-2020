import * as Http from "http";
import * as Url from "url";
import * as Mongo from "mongodb";


let mongoDaten: Mongo.Collection;
let databaseUrl: string;

databaseUrl = "mongodb+srv://MarylinE:Karlsruhe76189@marylingis2020.jofyo.mongodb.net/L10?retryWrites=true&w=majority";

connectToDatabase(databaseUrl);

let port: number = Number(process.env.PORT);
if (!port)
  port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("request", handleRequest);
server.listen(port);

async function connectToDatabase(_url: string): Promise<void> {
  let options: Mongo.MongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };
  let mongoClient: Mongo.MongoClient = new Mongo.MongoClient(_url, options);
  await mongoClient.connect();
  mongoDaten = mongoClient.db("L10").collection("Schauspieler");
}


async function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): Promise<void> {

  _response.setHeader("content-type", "text/html; charset=utf-8");
  _response.setHeader("Access-Control-Allow-Origin", "*");


  if (_request.url) {
    let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
    if (url.pathname == "/input") {

      mongoDaten.insertOne(url.query);

    } else if (url.pathname == "/request") {
      _response.write(JSON.stringify(await mongoDaten.find().toArray()));
    }
  }

  _response.end();
} 
