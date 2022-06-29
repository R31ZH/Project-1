// start of javascript for image creation
var fetchButton = document.getElementById('submitBtn')
var recentSearch = JSON.parse(localStorage.getItem("recentSearch")) || []
var imageLoc = document.querySelector("#imageLoc")
    function myFunction() {
        document.getElementById("myForm").submit();
      }

	function searchedImage(event){
		event.preventDefault();
		console.log(event.target.id)
		if(event.target.id === "submitBtn") {
			var imageName = $("#imageSearch").val();
			recentSearch.push(imageName)
			localStorage.setItem("recentSearch", JSON.stringify(recentSearch))

			
	const options = {
		method: 'GET',
		headers: {
		'X-RapidAPI-Key': '3578c7131cmshc9b6f560358462ap140906jsna7ea811bc316',
		'X-RapidAPI-Host': 'google-image-search1.p.rapidapi.com'
		}
	};
// where paris is marked in the link is where we need the search bar connected to
	fetch(`https://google-image-search1.p.rapidapi.com/v2/?q=${imageName}&hl=en`, options)
	.then(response => response.json())
	.then(function(response) {
		console.log(response)
		console.log(response.response.images[0].image.url)
		var imagesearched = document.createElement("img")
		imagesearched.setAttribute('src',response.response.images[0].image.url)
		imageLoc.appendChild(imagesearched)



		// issueEl.appendChild(typeEl);
		// var issueEl = document.createElement('a');
		// issueEl.setAttribute('href', issues[i].html_url);
		
	})
	.catch(err => console.error(err));


		}
		else{
		var imageName = $(this).text()
		}

		console.log(imageName)
		if (imageName) {
			getApi(imageName);
		};

	}

	  fetchButton.addEventListener("click", searchedImage);
	  
	//  End of Javascript for image creation
	 
	  // // will fetch info searched for when button is submited

// var fetchButton = document.getElementById('submitBtn')
// var recentSearch = JSON.parse(localStorage.getItem("recentSearch")) || []
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '3578c7131cmshc9b6f560358462ap140906jsna7ea811bc316',
// 		'X-RapidAPI-Host': 'google-image-search1.p.rapidapi.com'
// 	}
// };
// function getApi(imageName) {
// // where paris is marked in the link is where we need the search bar connected to
// var imageInput = (`https://google-image-search1.p.rapidapi.com/v2/?q=${imageName}&hl=en`, options);

// fetch(imageInput)
// 	.then(function(response){
// 		if(response.ok){
// 			response.json()
// 			.then(function(data){

// 				console.log(data)
// 			})
// 		}
// 	})


// 	.then(response => response.json())
// 	.then(response => console.log(response))

// 	.catch(err => console.error(err));

// }
//     // function myFunction() {
//     //     document.getElementById("myForm").submit();
//     //   }

// 	function searchedImage(event){
// 		event.preventDefault();
// 		console.log(event.target.id)
// 		if(event.target.id === "submitBtn") {
// 			var imageName = $("imageSearch").val();
// 			recentSearch.push(imageName)
// 			localStorage.setItem("recentSearch", JSON.stringify(recentSearch))
			
// 		}
// 		else{
// 			var imageName = $(this).text()
// 		}

// 		console.log(imageName)
// 		if (imageName) {
// 			getApi(imageName);
// 		};

// 	}

// 	  fetchButton.addEventListener("click", searchedImage);