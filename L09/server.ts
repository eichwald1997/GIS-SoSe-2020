

namespace L09 {

    document.getElementById("reqHtml")?.addEventListener("click", handleReqHTML);
    document.getElementById("reqJson")?.addEventListener("click", handleReqJSON);



    
    function handleReqHTML(): void {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://marysose2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();
        communicateHTML(url);
    } 

    async function communicateHTML(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url, { method: "get" });
        let response2: string = await response.text();
        let arraySplit: string[] = response2.split("###");
        (<HTMLElement>document.getElementById("answerField")).innerHTML = arraySplit[0];
    }



    function handleReqJSON(): void {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://marysose2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();
        communicateJSON(url);
        let text: HTMLDivElement = document.createElement("p");
        text.setAttribute("class", "Json");
        text.innerHTML = "Konsolenausgabe wurde erstellt!";
        document.getElementById("console")?.appendChild(text);
    } 

    async function communicateJSON(_url: RequestInfo): Promise<void> {
        let response: Response = await fetch(_url, { method: "get" });
        let response2: string = await response.text();
        let arraySplit: string[] = response2.split("###");
        let jsonString: string = JSON.parse(arraySplit[1]);
        console.log(jsonString);
      }

}

