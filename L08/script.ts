namespace Aufgabe08 {

    document.getElementById("send")?.addEventListener("click", handleButton);

    function handleButton(): void {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://marysose2020.herokuapp.com/";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();
        communicate(url);
    } 

    async function communicate(_url: RequestInfo): Promise<void> {
        let resp: Response = await fetch(_url, { method: "get" });
        let resp2: String = await resp.text();
        console.log(resp2);
      }

}