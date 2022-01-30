document.getElementById("upper-case").addEventListener("click", function () {
    document.querySelector("textarea").value
        = document.querySelector("textarea").value.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function () {
    document.querySelector("textarea").value
        = document.querySelector("textarea").value.toLowerCase();
});

document.getElementById("proper-case").addEventListener("click", function () {
    document.querySelector("textarea").value
        = document.querySelector("textarea").value.split(" ").map(function (element) {
        return element[0].toUpperCase()
            + element.slice(1).toLowerCase();}).join(" ");
});

document.getElementById("sentence-case").addEventListener("click", function () {
    document.querySelector("textarea").value
        = document.querySelector("textarea").value
        .toLowerCase().replace(/\.\s*([a-z])|^[a-z]/gm, s => s.toUpperCase());
});
const downloadFile = document.getElementById("save-text-file");
const boxText = document.querySelector("textarea");

downloadFile.addEventListener("click", function (){
    download("text.txt",boxText.value);
})

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
