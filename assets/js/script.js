//! Jeremiahs Quote Generation START
var div = document.getElementById("textarea");
var btn = document.getElementById("btn1");

function generation() {
  fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var quote = document.createElement("textarea");
      quote.setAttribute(
        "class",
        "bg-blue-500 text-white w-full inset-x-0 top-0"
      );
      quote.textContent = data.content;
      div.appendChild(quote);
      var element = document.getElementById("submitBtn");
      element.remove();
    });
}

var options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "ee4ba4d88emsh5f022dd384ca11cp1c3043jsn048617c942bf",
    "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
};
//! Jeremiahs Quote Generation END

//! CYRUS img generation START
var fetchButton = document.getElementById("submitBtn");
var recentSearch = JSON.parse(localStorage.getItem("recentSearch")) || [];
var imageLoc = document.querySelector("#imageLoc");
function myFunction() {
  document.getElementById("myForm").submit();
}

function searchedImage() {
  var imageName = $("#imageSearch").val();
  recentSearch.push(imageName);
  localStorage.setItem("recentSearch", JSON.stringify(recentSearch));

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3578c7131cmshc9b6f560358462ap140906jsna7ea811bc316",
      "X-RapidAPI-Host": "google-image-search1.p.rapidapi.com",
    },
  };
  // where paris is marked in the link is where we need the search bar connected to
  fetch(
    `https://google-image-search1.p.rapidapi.com/v2/?q=${imageName}&hl=en`,
    options
  )
    .then((response) => response.json())
    .then(function (response) {
      console.log(response);
      console.log(response.response.images[0].image.url);
      var imagesearched = document.createElement("img");
      imagesearched.setAttribute("src", response.response.images[0].image.url);
      imageLoc.appendChild(imagesearched);
    })
    .catch((err) => console.error(err));
}

fetchButton.addEventListener("click", function (event) {
  event.preventDefault();
  searchedImage();
  generation();
});
//! CYRUS img generation END

//! Share Button Functionality
var shareData = {
  title: "Meme Generator",
  text: "Share Meme Generator!",
  url: "https://r31zh.github.io/Project-1/",
};

var btn = document.getElementById("shareBtn");
// Share must be triggered by "user activation"
btn.addEventListener("click", async () => {
  try {
    await navigator.share(shareData);
  } catch (err) {}
});
//! Share Button Functionality

//!Download Button Functionality

//!Download Button Functionality
