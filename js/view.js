if (screen.width < 768) {
  document.getElementById("myBtn").addEventListener("click", changeMenu);
}

function changeMenu() {
  document.getElementById("_navbar").style.zIndex = "-1";
}

function navBar(){
  document.getElementById("_navbar").style.zIndex = "1";
}

$(document).ready(function mainPage(){
  // $('#show').fadeOut(300, function(){$('#show').load("sections/main/home.html", function(){$('#show').fadeIn(300);});});
  $('#show').fadeOut(300, function(){$('#show').load("sections/dev/dev_links.html", function(){$('#show').fadeIn(300);});});

  $('#home').click(function(){$('#show').fadeOut(300, function(){$('#show').load("sections/main/home.html", function(){$('#show').fadeIn(300);});});});
  $('#variables').click(function(){$('#show').fadeOut(300, function(){$('#show').load("sections/instances/variables.html", function(){$('#show').fadeIn(300);});});});
  $('#arrays').click(function(){$('#show').fadeOut(300, function(){$('#show').load("sections/instances/arrays.html", function(){$('#show').fadeIn(300);});});});
  $('#loops').click(function(){$('#show').fadeOut(300, function(){$('#show').load("sections/instances/loops.html", function(){$('#show').fadeIn(300);});});});
  $('#conditionals').click(function(){$('#show').fadeOut(300, function(){$('#show').load("sections/instances/conditionals.html", function(){$('#show').fadeIn(300);});});});
  $('#objects').click(function(){$('#show').fadeOut(300, function(){$('#show').load("sections/instances/objects.html", function(){$('#show').fadeIn(300);});});});
  $('#events').click(function(){$('#show').fadeOut(300, function(){$('#show').load("sections/instances/events.html", function(){$('#show').fadeIn(300);});});});
  $('#tasks').click(function(){$('#show').fadeOut(300, function(){$('#show').load("sections/tasks/tasks.html", function(){$('#show').fadeIn(300);});});});
  $('#dev_corner').click(function(){$('#show').fadeOut(300, function(){$('#show').load("sections/dev/dev_corner.html", function(){$('#show').fadeIn(300);});});});
  $('#dev_links').click(function(){$('#show').fadeOut(300, function(){$('#show').load("sections/dev/dev_links.html", function(){$('#show').fadeIn(300);});});});
});
