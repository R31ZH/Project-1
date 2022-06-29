// var quote = document.getElementById("quote1");

// var options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "ee4ba4d88emsh5f022dd384ca11cp1c3043jsn048617c942bf",
//     "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
//   },
// };

// //   btn.addEventListener("click", function handleClick() {
// fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => console.error(err));

//   var textarea = document.getElementById("message");
//   var btn = document.getElementById("btn");
//     textarea.innerHTML = response.content;
// });
var div = document.querySelector("div");
var btn = document.getElementById("btn1");

btn.addEventListener("click", function () {
  // var quoteUrl = "https://quotes15.p.rapidapi.com/quotes/random/";
  // // console.log(event.target);
  // fetch(quoteUrl)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (data) {
  //     console.log(data);

  fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var quote = document.createElement("textarea");
      quote.textContent = data.content;
      div.appendChild(quote);
    });

  // var quote = document.createElement("p");
  // quote.textContent = response.content;
  // div.appendChild(quote);
});

var options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ee4ba4d88emsh5f022dd384ca11cp1c3043jsn048617c942bf",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};

// function call(){
// fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
//   .then((response) => response.json())
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));
// }
