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
  $('#show').fadeOut(300, function(){$('#show').load("tasks/home.html", function(){$('#show').fadeIn(300);});});

  $('#home').click(function(){$('#show').fadeOut(300, function(){$('#show').load("tasks/home.html", function(){$('#show').fadeIn(300);});});});
  $('#variables').click(function(){$('#show').fadeOut(300, function(){$('#show').load("tasks/variables.html", function(){$('#show').fadeIn(300);});});});
  $('#arrays').click(function(){$('#show').fadeOut(300, function(){$('#show').load("tasks/arrays.html", function(){$('#show').fadeIn(300);});});});
  $('#loops').click(function(){$('#show').fadeOut(300, function(){$('#show').load("tasks/loops.html", function(){$('#show').fadeIn(300);});});});
  $('#conditionals').click(function(){$('#show').fadeOut(300, function(){$('#show').load("tasks/conditionals.html", function(){$('#show').fadeIn(300);});});});
  $('#objects').click(function(){$('#show').fadeOut(300, function(){$('#show').load("tasks/objects.html", function(){$('#show').fadeIn(300);});});});
  $('#events').click(function(){$('#show').fadeOut(300, function(){$('#show').load("tasks/events.html", function(){$('#show').fadeIn(300);});});});
  $('#tasks').click(function(){$('#show').fadeOut(300, function(){$('#show').load("tasks/tasks.html", function(){$('#show').fadeIn(300);});});});
});
