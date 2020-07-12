

    let button1: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("sending"));
    button1.addEventListener("click", sendButton);
    let button2: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("getting"));
    button2.addEventListener("click", getButton);

    let formData: FormData;

    async function sendButton(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://marysose2020.herokuapp.com";
        url += "/input";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();
        await fetch(url);
    }

    async function getButton(): Promise<void> {
        let url: string = "https://marysose2020.herokuapp.com";
        url += "/request";
        let response: Response = await(fetch(url));
        let responseText: string = await response.text();
        (<HTMLDivElement>document.getElementById("output")).innerHTML = responseText;
    }
