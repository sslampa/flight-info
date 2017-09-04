document.addEventListener('DOMContentLoaded', function() {
  var mybutton = document.getElementById('btnSearch');
  mybutton.addEventListener('click', searchForEmployee )
});


function searchForEmployee()
{
  //this is where to perform validation
  var uInput = document.getElementById('name');
  if ( !(uInput.value).length ) {
    console.log("Please enter search input.");
    return;
  } else if ( !localStorage.getItem(uInput.value) ) {
    getThatData();
  } else { return localStorage.getItem(uInput.value) }
}


var hRequest = new XMLHttpRequest();
// My Key
var url = 'https://www.googleapis.com/qpxExpress/v1/trips/search?fields=trips&key=AIzaSyDzCQffVMxuT42BQDgCuK5w1o_I1uHYRcw'

// Your Key
// var url = 'https://www.googleapis.com/qpxExpress/v1/trips/search?fields=trips&key=AIzaSyDkhnNt01PA-kqLsfDBwTJndLsxlKvEJpc'

function getThatData( origin ) {
var someRequest =
{
 "request": {
  "passengers": {
   "adultCount": 2
  },
  "slice": [
   {
    "kind": "qpxexpress#sliceInput",
    "origin": "LAX",
    "destination": "SYD",
    "date": "2017-11-20"
   }
  ]
 }
};
  hRequest.open('POST', url, true);
  hRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  hRequest.send(JSON.stringify(someRequest));
  // hRequest.onreadystatechange = handleIt();
  hRequest.onreadystatechange = function () {
    if (hRequest.status == 200) {
      console.log("Oh, it's handled.");
    }
  };
}

// function handleIt() {
//   console.log(hRequest);
//   if (hRequest.status == 200) {
//     console.log("Oh, it's handled.");
//   }
// }
