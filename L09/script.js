"use strict";
var L09;
(function (L09) {
    let buttonHtml = document.getElementById("reqHtml");
    buttonHtml.addEventListener("click", requestHtml);
    let buttonJson = document.getElementById("reqJson");
    buttonJson.addEventListener("click", requestJson);
    async function requestHtml() {
        let formData = new FormData(document.forms[0]);
        let url = "https://marysose2020.herokuapp.com";
        url += "/html";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        let response = await fetch(url);
        let responseText = await response.text();
        let responseClient = document.getElementById("answerField");
        responseClient.innerHTML = responseText;
    }
    async function requestJson() {
        let formData = new FormData(document.forms[0]);
        let url = "https://marysose2020.herokuapp.com";
        url += "/json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        await fetch(url);
        let response = await fetch(url);
        let responseText = await response.json();
        console.log(responseText);
        let text = document.createElement("p");
        text.setAttribute("class", "Json");
        text.innerHTML = "Konsolenausgabe wurde erstellt!";
        document.getElementById("console")?.appendChild(text);
    }
})(L09 || (L09 = {}));
//# sourceMappingURL=script.js.map