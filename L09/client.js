"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.L09 = void 0;
const Http = require("http");
const Url = require("url");
var L09;
(function (L09) {
    //Konsolen Ausgabe, dass der Server startet.
    console.log("Starting server");
    //Port wird als Variable typ number gespeichert.
    let port = Number(process.env.PORT);
    //Wenn es keinen Port gibt, dann setzt er ihn auf 8100.
    if (!port)
        port = 8100;
    //Server wird als Variable typ Http.Server gespeichert.
    let server = Http.createServer();
    //Handler werden dem Server als Listener hinzugefügt.
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    //Server hört den Port ab.
    server.listen(port);
    //Konsole gibt beim Aufruf "Listening" aus.
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        //Konsole gibt beim Aufruf "I hear voices!" aus.
        console.log("I hear voices!");
        //Parameter werden für die Response festgelegt.
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        //Hierbei habe ich mir etwas Hilfe geholt.
        if (_request.url) {
            let url = Url.parse(_request.url, true);
            let track = url.pathname;
            if (track == "/html") {
                for (let key in url.query) {
                    _response.write(key + ": " + url.query[key] + "<br/>");
                }
            }
            else if (track == "/json") {
                let reqJson = JSON.stringify(url.query);
                _response.write(reqJson);
            }
        }
        //Response wird beendet.
        _response.end();
    }
})(L09 = exports.L09 || (exports.L09 = {}));
//# sourceMappingURL=client.js.map