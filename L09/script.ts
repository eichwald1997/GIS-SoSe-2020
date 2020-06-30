

namespace L09 {

let htmlAusgabe: HTMLButtonElement = <HTMLButtonElement>document.getElementById("reqHtml");
htmlAusgabe.addEventListener("click", requestHtml);

let jsonAusgabe: HTMLButtonElement = <HTMLButtonElement>document.getElementById("reqJson");
jsonAusgabe.addEventListener("click", requestJson);

async function requestHtml(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://marysose2020.herokuapp.com/";
    url += "/html";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();
    await fetch(url);

    let response: Response = await fetch(url);
    let responseText: string = await response.text();
    let responseClient: HTMLElement = <HTMLElement>document.getElementById("answerField");
    responseClient.innerHTML = responseText;

    let text: HTMLDivElement = document.createElement("p");
    text.setAttribute("class", "Json");
    text.innerHTML = "Konsolenausgabe wurde erstellt!";
    document.getElementById("console")?.appendChild(text);


}

async function requestJson(): Promise<void> {

    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://marysose2020.herokuapp.com/";
    url += "/json";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();
    await fetch(url);

    let response: Response = await fetch(url);
    let responseText: string = await response.json();
    console.log(responseText);
}

}