import * as Http from "http";
import * as Url from "url";

export namespace L09 {
  //Konsolen Ausgabe, dass der Server startet.
  console.log("Starting server");
  //Port wird als Variable typ number gespeichert.
  let port: number = Number(process.env.PORT);
  //Wenn es keinen Port gibt, dann setzt er ihn auf 8100.
  if (!port)
    port = 8100;

  //Server wird als Variable typ Http.Server gespeichert.
  let server: Http.Server = Http.createServer();
  //Handler werden dem Server als Listener hinzugefügt.
  server.addListener("request", handleRequest);
  server.addListener("listening", handleListen);
  //Server hört den Port ab.
  server.listen(port);

  //Konsole gibt beim Aufruf "Listening" aus.
  function handleListen(): void {
    console.log("Listening");
  }

  function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    //Konsole gibt beim Aufruf "I hear voices!" aus.
    console.log("I hear voices!");

    //Parameter werden für die Response festgelegt.
    _response.setHeader("content-type", "text/html; charset=utf-8");
    _response.setHeader("Access-Control-Allow-Origin", "*");



    //Hierbei habe ich mir etwas Hilfe geholt.
    if (_request.url) {
      let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
      let track: string | null = url.pathname;
      if (track == "/html") {
        for (let key in url.query) {
          _response.write(key + ": " + url.query[key] + "<br/>");
        }
      }
      else if (track == "/json") {
        let reqJson: string = JSON.stringify(url.query);
        _response.write(reqJson);
      }
    }

    //Response wird beendet.
    _response.end();

  }
}
