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
  // if (event.target.id === "submitBtn") {
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
  // } else {
  //   var imageName = $(this).text();
  // }

  // console.log(imageName);
  // if (imageName) {
  //   getApi(imageName);
  // }
}

// fetchButton.addEventListener("click", searchedImage);
//! CYRUS img generation END
fetchButton.addEventListener("click", function (event) {
  event.preventDefault();
  searchedImage();
  generation();
});

// download button: 


// function myFunction() {
//   var x = document.getElementById("myAnchor").download;
//   document.getElementById("demo").innerHTML = x;
// }
// function downloadFunction() {
//   document.getElementById("#downloadBtn")

// }
// var fetchButton = document.getElementById("submitBtn");

var downloadFunction = document.getElementById("downloadBtn") 

downloadFunction.addEventListener("click", function (event){
// var download1 = document.getElementById("downloadBtn");
const blob1 = new Blob([imageLoc], { type: ".jpg" })
downloadFunction.href = URL.createObjectURL(blob1);
console.log(blob1)
})