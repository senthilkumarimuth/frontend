const form = document.getElementById("my-form");
form.addEventListener("submit", (event) => {
event.preventDefault();

function sendRequest() {
  var xhr = new XMLHttpRequest();
  var url = "/"; // URL of the Flask endpoint
  var data = {
    "lat": Number(document.getElementById("lat").value),
    "lon": Number(document.getElementById("lon").value),
  };

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      var response = xhr.responseText;
      if (xhr.status === 200) {
        document.getElementById("iframe-map").srcdoc = response;
      } else {
        document.getElementById("iframe-map").srcdoc = response;
      }
    }
  };
  xhr.send(JSON.stringify(data));
}

sendRequest();
});