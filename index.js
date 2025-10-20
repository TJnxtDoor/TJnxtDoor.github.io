fetch("https://tjnxtdoor.github.io/")
    .then(response => response.text())
    .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const body = doc.querySelector("body");
        document.body.innerHTML = body.innerHTML;
    })
    .catch(error => console.error(error));
    