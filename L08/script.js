"use strict";
var Aufgabe08;
(function (Aufgabe08) {
    document.getElementById("send")?.addEventListener("click", handleButton);
    function handleButton() {
        let formData = new FormData(document.forms[0]);
        let url = "https://marysose2020.herokuapp.com/";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        communicate(url);
    }
    async function communicate(_url) {
        let resp = await fetch(_url, { method: "get" });
        let resp2 = await resp.text();
        console.log(resp2);
    }
})(Aufgabe08 || (Aufgabe08 = {}));
//# sourceMappingURL=script.js.map