var lowerRange = 0;
var upperRange = 99;
var testArray = [9, 7, 19, 28, 29, 45, 50, 51, 52, 86, 97];
var result = [];
var star = "";

myMap();

function getresult(lr, ur) {
  testArray.forEach(data => {
    if (data > lr && data <= ur) {
      result.push(data);
    }
  });
  for (i = 0; i < result.length; i++) {
    star = star + "*";
  }
  console.log("[ " + lr + " - " + ur + " ] == " + star);
  star = "";
  result = [];
}

function myMap() {
  var diff = 9;
  while (lowerRange < upperRange) {
    getresult(lowerRange, lowerRange + diff);
    lowerRange = lowerRange + diff + 1;
  }
}
