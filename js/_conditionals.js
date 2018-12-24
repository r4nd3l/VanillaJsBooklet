//----01
function clearConsole_01(){
  var clear = document.getElementById('console_01');
  clear.innerHTML = '';
}
function forInstance_01() {
  if(1 == 1){
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_01").appendChild(node);
      }
    }
    console.log('This is true');
  }
}
//----02
function forInstance_02() {
  if(1 == 2){
    console.log('This is true');
  }
}
//----03
function forInstance_03() {
  var var1 = 3;
  var var2 = 4;
  if(var1 == var2){
    console.log('This is true');
  }
}
//----04
function clearConsole_04(){
  var clear = document.getElementById('console_04');
  clear.innerHTML = '';
}
function forInstance_04() {
  var var1 = 3;
  var var2 = 4;
  if(var1 != var2){
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_04").appendChild(node);
      }
    }
    console.log('This is true');
  }
}
//----05
function clearConsole_05(){
  var clear = document.getElementById('console_05');
  clear.innerHTML = '';
}
function forInstance_05() {
  var var1 = 3;
  var var2 = 4;
  if(var1 == var2){
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_05").appendChild(node);
      }
    }
    console.log('This is true');
  }else{
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_05").appendChild(node);
      }
    }
    console.log('This is false');
  }
}
//----06
function clearConsole_06(){
  var clear = document.getElementById('console_06');
  clear.innerHTML = '';
}
function forInstance_06() {
  var var1 = 3;
  var var2 = 3;
  if(var1 == var2 && var1 == 3){
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_06").appendChild(node);
      }
    }
    console.log('This is true');
  }else{
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_06").appendChild(node);
      }
    }
    console.log('This is false');
  }
}
//----07
function clearConsole_07(){
  var clear = document.getElementById('console_07');
  clear.innerHTML = '';
}
function forInstance_07() {
  var var1 = 3;
  var var2 = 4;
  if(var1 == var2 && var1 == 3){
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_07").appendChild(node);
      }
    }
    console.log('This is true');
  }else{
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_07").appendChild(node);
      }
    }
    console.log('This is false');
  }
}
//----08
function clearConsole_08(){
  var clear = document.getElementById('console_08');
  clear.innerHTML = '';
}
function forInstance_08() {
  var var1 = 3;
  var var2 = 4;
  if(var1 == var2 || var1 == 3){
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_08").appendChild(node);
      }
    }
    console.log('This is true');
  }else{
    window.console = {
      log: function(str){
        var node = document.createElement("div");
        node.appendChild(document.createTextNode(str));
        document.getElementById("console_08").appendChild(node);
      }
    }
    console.log('This is false');
  }
}
//----09
function forInstance_09() {
  var fruit = 'apple';
  switch(fruit){
    case "banana":
      alert('I hate bananas');
      break;
    case "apple":
      alert('I hate apples');
      break;
    case "orange":
      alert('Oranges are ok');
      break;
    default:
      alert('I love all other fruits');
      break;
  }
}
//----10
function forInstance_10() {
  var fruit = 'banana';
  switch(fruit){
    case "banana":
      alert('I hate bananas');
      break;
    case "apple":
      alert('I hate apples');
      break;
    case "orange":
      alert('Oranges are ok');
      break;
    default:
      alert('I love all other fruits');
      break;
  }
}
//----11
function forInstance_11() {
  var fruit = 'grapes';
  switch(fruit){
    case "banana":
      alert('I hate bananas');
      break;
    case "apple":
      alert('I hate apples');
      break;
    case "orange":
      alert('Oranges are ok');
      break;
    default:
      alert('I love all other fruits');
      break;
  }
}
