var div = document.getElementById("textarea");
var btn = document.getElementById("btn1");

btn.addEventListener("click", function () {
  fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var quote = document.createElement("textarea");
      quote.textContent = data.content;
      div.appendChild(quote);
      var element = document.getElementById("btn1");
      element.remove();
    });
});

var options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ee4ba4d88emsh5f022dd384ca11cp1c3043jsn048617c942bf",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

