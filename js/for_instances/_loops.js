//----01
function clearConsole_01(){
  var clear = document.getElementById('console_01');
  clear.innerHTML = '';
}
function forInstance_01() {
  for(var i = 0; i < 10; i++){
    // console.log(i);
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_01").appendChild(node);
      }
    }
    console.log(i);
  }
}
//----02
function clearConsole_02(){
  var clear = document.getElementById('console_02');
  clear.innerHTML = '';
}
function forInstance_02() {
  for(var i = 0; i <= 10; i++){
    // console.log(i);
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_02").appendChild(node);
      }
    }
    console.log(i);
  }
}
//----03
function clearConsole_03(){
  var clear = document.getElementById('console_03');
  clear.innerHTML = '';
}
function forInstance_03() {
  for(var i = 0; i <= 10; i++){
    // console.log('I love the number '+i);
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_03").appendChild(node);
      }
    }
    console.log('I love the number '+i);
  }
}
//----04
function clearConsole_04(){
  var clear = document.getElementById('console_04');
  clear.innerHTML = '';
}
function forInstance_04() {
  var i = 0;
  while(i < 10){
    // console.log(i);
    i++;
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_04").appendChild(node);
      }
    }
    console.log(i);
  }
}
//----05
function clearConsole_05(){
  var clear = document.getElementById('console_05');
  clear.innerHTML = '';
}
function forInstance_05() {
  var numbers = [33,54,76,34,2,6];
  numbers.forEach(function(number){
    // console.log(number);
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_05").appendChild(node);
      }
    }
    console.log(number);
  });
}
//----06
function clearConsole_06(){
  var clear = document.getElementById('console_06');
  clear.innerHTML = '';
}
function forInstance_06() {
  var numbers = [33,54,76,34,2,6];
  for(var i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_06").appendChild(node);
      }
    }
    console.log(numbers[i]);
  }
}
//----07
function clearConsole_07(){
  var clear = document.getElementById('console_07');
  clear.innerHTML = '';
}
function forInstance_07() {
  var numbers = [33,54,76,34,2,6];
  numbers.reverse();
  for(var i = 0; i < numbers.length; i++){
    // console.log(numbers[i]);
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_07").appendChild(node);
      }
    }
    console.log(numbers[i]);
  }
}
