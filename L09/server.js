"use strict";
var L09;
(function (L09) {
    document.getElementById("reqHtml")?.addEventListener("click", handleReqHTML);
    document.getElementById("reqJson")?.addEventListener("click", handleReqJSON);
    function handleReqHTML() {
        let formData = new FormData(document.forms[0]);
        let url = "https://marysose2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        communicateHTML(url);
    }
    async function communicateHTML(_url) {
        let response = await fetch(_url, { method: "get" });
        let response2 = await response.text();
        let arraySplit = response2.split("###");
        document.getElementById("answerField").innerHTML = arraySplit[0];
    }
    function handleReqJSON() {
        let formData = new FormData(document.forms[0]);
        let url = "https://marysose2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        communicateJSON(url);
        let text = document.createElement("p");
        text.setAttribute("class", "Json");
        text.innerHTML = "Konsolenausgabe wurde erstellt!";
        document.getElementById("console")?.appendChild(text);
    }
    async function communicateJSON(_url) {
        let response = await fetch(_url, { method: "get" });
        let response2 = await response.text();
        let arraySplit = response2.split("###");
        let jsonString = JSON.parse(arraySplit[1]);
        console.log(jsonString);
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=server.js.map