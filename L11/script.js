"use strict";
let button1 = document.getElementById("sending");
button1.addEventListener("click", sendButton);
let button2 = document.getElementById("getting");
button2.addEventListener("click", getButton);
let formData;
async function sendButton() {
    formData = new FormData(document.forms[0]);
    let url = "https://marysose2020.herokuapp.com";
    url += "/input";
    let query = new URLSearchParams(formData);
    url += "?" + query.toString();
    await fetch(url);
}
async function getButton() {
    let url = "https://marysose2020.herokuapp.com";
    url += "/request";
    let response = await (fetch(url));
    let responseText = await response.text();
    document.getElementById("output").innerHTML = responseText;
}
//# sourceMappingURL=script.js.map