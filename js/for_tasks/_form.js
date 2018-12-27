function changeBackground(x) {
  // console.log(x.value);
  var heading = document.getElementById('color');
  heading.style.color = x.value;
}

function validateForm(){
  var firstName = document.forms["myForm"]["firstName"].value;
  var lastName = document.forms["myForm"]["lastName"].value;
  if (firstName == null || firstName == "") {
    alert("First name is required!");
    return false;
  }

  if (firstName.length < 3) {
    alert("First name must be at least 3 chars!");
    return false;
  }

  if (lastName == null || lastName == "") {
    alert("Last name is required!");
    return false;
  }

  if (lastName.length < 3) {
    alert("Last name must be at least 3 chars!");
    return false;
  }

}
