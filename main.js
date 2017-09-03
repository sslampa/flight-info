document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('btnSearch')
  button.addEventListener( 'click', searchForEmployee('frmEmployeeSearch') );
});


function searchForEmployee( formName )
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

function getThatData( origin ) {
  if (window.XMLHttpRequest) {
    httpRequest = new XMLHttpRequest();
  }
  httpRequest.onreadystatechange = function() {
    console.log("it worked")
  }
  httpRequest.open('POST', )
}
