document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('btnSearch')
  button.addEventListener( 'click', searchForEmployee('frmEmployeeSearch') );
});


function searchForEmployee( formName )
{
  //this is where to perform validation
  var uInput = document.getElementById('name');
  if ( !(uInput.value).length )
    console.log("Please enter search input.");
    return;
  } elseif ( !localStorage.getItem(uInput.value)) {
    getData();
  } else { return localStorage.getItem(uInput.value) }


}
