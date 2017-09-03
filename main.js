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
var url = 'https://www.googleapis.com/qpxExpress/v1/trips/search?key=AIzaSyDkhnNt01PA-kqLsfDBwTJndLsxlKvEJpc'

function getThatData( origin ) {
  hRequest.open('POST', url, true);
  hRequest.onreadystatechange = handleIt();
  hRequest.send();
}

function handleIt() {
  console.log("Oh, it's handled.");
}
