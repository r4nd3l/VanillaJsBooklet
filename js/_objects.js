//----01
function clearConsole_01(){
  var clear = document.getElementById('console_01');
  clear.innerHTML = '';
}
function forInstance_01() {
  var person = {
    firstName: 'Matt',
    lastName: 'Miller',
    age: 26
  }
  window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("console_01").appendChild(node);
    }
  }
  console.log(person.firstName);
}

//----02
function clearConsole_02(){
  var clear = document.getElementById('console_02');
  clear.innerHTML = '';
}
function forInstance_02() {
  var person = {
    firstName: 'Matt',
    lastName: 'Miller',
    age: 26
  }
  window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("console_02").appendChild(node);
    }
  }
  console.log(person.age);
}

//----03
function clearConsole_03(){
  var clear = document.getElementById('console_03');
  clear.innerHTML = '';
}
function forInstance_03() {
  var person = {
    firstName: 'Matt',
    lastName: 'Miller',
    age: 26,
    children:['Mark','Amanda']
  }
  window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("console_03").appendChild(node);
    }
  }
  console.log(person.children[0]);
}

//----04
function clearConsole_04(){
  var clear = document.getElementById('console_04');
  clear.innerHTML = '';
}
function forInstance_04() {
  var person = {
    firstName: 'Matt',
    lastName: 'Miller',
    age: 26,
    children:['Mark','Amanda'],
    address:{
      street:'555 Something st',
      city:'Boston',
      state: 'MA'
    }
  }
  window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("console_04").appendChild(node);
    }
  }
  console.log(person.address);
  document.getElementById("console_04").innerHTML = typeof person.address+JSON.stringify(person.address);
}

//----05
function clearConsole_05(){
  var clear = document.getElementById('console_05');
  clear.innerHTML = '';
}
function forInstance_05() {
  var person = {
    firstName: 'Matt',
    lastName: 'Miller',
    age: 26,
    children:['Mark','Amanda'],
    address:{
      street:'555 Something st',
      city:'Boston',
      state: 'MA'
    }
  }
  window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("console_05").appendChild(node);
    }
  }
  console.log(person.address.state);
}

//----06
function clearConsole_06(){
  var clear = document.getElementById('console_06');
  clear.innerHTML = '';
}
function forInstance_06() {
  var person = {
    firstName: 'Matt',
    lastName: 'Miller',
    age: 26,
    children:['Mark','Amanda'],
    address:{
      street:'555 Something st',
      city:'Boston',
      state: 'MA'
    },
    fullName: function(){
      return this.firstName +" "+this.lastName;
    }
  }
  window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("console_06").appendChild(node);
    }
  }
  console.log(person.fullName());
}

//----07
function clearConsole_07(){
  var clear = document.getElementById('console_07');
  clear.innerHTML = '';
}
function forInstance_07() {
  var apple = new Object();
  apple.color = 'red';
  apple.shape = 'round';
  apple.describe = function(){
    return 'An apple is the color'+this.color+' and is the shape '+this.shape;
  }
  window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("console_07").appendChild(node);
    }
  }
  console.log(apple);
  document.getElementById("console_07").innerHTML = typeof apple+JSON.stringify(apple);
}

//----08
function clearConsole_08(){
  var clear = document.getElementById('console_08');
  clear.innerHTML = '';
}
function forInstance_08() {
  var apple = new Object();
  apple.color = 'red';
  apple.shape = 'round';
  apple.describe = function(){
    return 'An apple is the color'+this.color+' and is the shape '+this.shape;
  }
  window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("console_08").appendChild(node);
    }
  }
  console.log(apple.color);
}

//----09
function clearConsole_09(){
  var clear = document.getElementById('console_09');
  clear.innerHTML = '';
}
function forInstance_09() {
  var apple = new Object();
  apple.color = 'red';
  apple.shape = 'round';
  apple.describe = function(){
    return 'An apple is the color '+this.color+' and is the shape '+this.shape;
  }
  window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("console_09").appendChild(node);
    }
  }
  console.log(apple.describe());
}

//----10
function clearConsole_10(){
  var clear = document.getElementById('console_10');
  clear.innerHTML = '';
}
function forInstance_10() {
  function Fruit(name, color, shape){
    this. name = name;
    this.color = color;
    this.shape = shape;
  }
  var apple = new Fruit('apple', 'red', 'round');
  window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("console_10").appendChild(node);
    }
  }
  console.log(apple);
  document.getElementById("console_10").innerHTML = typeof apple+JSON.stringify(apple);
}

//----11
function clearConsole_11(){
  var clear = document.getElementById('console_11');
  clear.innerHTML = '';
}
function forInstance_11() {
  function Fruit(name, color, shape){
    this. name = name;
    this.color = color;
    this.shape = shape;
  }
  var apple = new Fruit('apple', 'red', 'round');
  var melon = new Fruit('melon', 'green', 'round');
  window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("console_11").appendChild(node);
    }
  }
  console.log(melon.shape);
}

//----12
function clearConsole_12(){
  var clear = document.getElementById('console_12');
  clear.innerHTML = '';
}
function forInstance_12() {
  function Fruit(name, color, shape){
    this. name = name;
    this.color = color;
    this.shape = shape;

    this.describe = function(){
      return 'A '+this.name+' is the color '+this.color+' and is the shape '+this.shape;
    }
  }
  var melon = new Fruit('melon', 'green', 'round');
  window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("console_12").appendChild(node);
    }
  }
  console.log(melon.describe());
}

//----13
function clearConsole_13(){
  var clear = document.getElementById('console_13');
  clear.innerHTML = '';
}
function forInstance_13() {
  var users = [
    // objects
    {
       name: 'Matt Miller',
       age: 26
    },
    {
       name: 'Matt Damon',
       age: 48
    },
    {
       name: 'John Doe',
       age: 30
    }
  ];
  window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("console_13").appendChild(node);
    }
  }
  console.log(users[0])
  document.getElementById("console_13").innerHTML = typeof users+JSON.stringify(users[0]);
}

//----14
function clearConsole_14(){
  var clear = document.getElementById('console_14');
  clear.innerHTML = '';
}
function forInstance_14() {
  var users = [
    // objects
    {
       name: 'Matt Miller',
       age: 26
    },
    {
       name: 'Matt Damon',
       age: 48
    },
    {
       name: 'John Doe',
       age: 30
    }
  ];
  window.console = {
    log: function(str){
      var node = document.createElement("div");
      node.appendChild(document.createTextNode(str));
      document.getElementById("console_14").appendChild(node);
    }
  }
  console.log(users[0].name)
}
