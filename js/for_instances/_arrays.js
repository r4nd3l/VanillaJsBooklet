function forInstance_01() {
  var color = ['red','blue','green'];
  alert(color);
}

function forInstance_02() {
  var color = ['red','blue','green'];
  alert(color[1]);
}

function forInstance_03() {
  var colors = new Array('red','yellow','orange');
  alert(colors);
}

function forInstance_04() {
  var colors = new Array('red','yellow','orange');
  alert(colors[2]);
}

function forInstance_05() {
  var colors = new Array('red','yellow','orange');
  colors[3] = 'green';
  alert(colors);
}

function forInstance_06() {
  var colors = new Array('red','yellow','orange');
  colors.push('purple');
  alert(colors[3]);
}

function forInstance_07() {
  var numbers = [5,77,6,43];
  alert(numbers[0] + numbers[2]);
}

function forInstance_08() {
  var numbers = [5,77,6,'seven'];
  alert(numbers[3]);
}

function forInstance_09() {
  var numbers = [5,77,6,'seven'];
  alert(numbers.length);
}

function forInstance_10() {
  var numbers = [5,77,6,'seven',1,55];
  alert(numbers.length);
}

function forInstance_11() {
  var numbers = [5,77,6,'seven',1,55];
  alert(numbers.sort());
}

function forInstance_12() {
  var numbers = [5,77,6,'seven',1,55];
  alert(numbers.reverse());
}
