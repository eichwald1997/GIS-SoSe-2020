

namespace L09 {

let buttonHtml: HTMLButtonElement = <HTMLButtonElement>document.getElementById("reqHtml");
buttonHtml.addEventListener("click", requestHtml);

let buttonJson: HTMLButtonElement = <HTMLButtonElement>document.getElementById("reqJson");
buttonJson.addEventListener("click", requestJson);


async function requestHtml(): Promise<void> {
    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://marysose2020.herokuapp.com";
    url += "/html";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();
    await fetch(url);

    let response: Response = await fetch(url);
    let responseText: string = await response.text();
    let responseClient: HTMLElement = <HTMLElement>document.getElementById("answerField");
    responseClient.innerHTML = responseText;
}


async function requestJson(): Promise<void> {

    let formData: FormData = new FormData(document.forms[0]);
    let url: string = "https://marysose2020.herokuapp.com";
    url += "/json";
    let query: URLSearchParams = new URLSearchParams(<any>formData);
    url = url + "?" + query.toString();
    await fetch(url);

    let response: Response = await fetch(url);
    let responseText: string = await response.json();
    console.log(responseText);

    let text: HTMLDivElement = document.createElement("p");
    text.setAttribute("class", "Json");
    text.innerHTML = "Konsolenausgabe wurde erstellt!";
    document.getElementById("console")?.appendChild(text);
}

}