var arr = [1, 0, -1, -2, 4, 110, -20, 333],
      fMax,
      fMin;
  function getMax(arr) {
    var arrLen = arr.length,
        maxNum1 = arr[0];
    for (var i = 0; i < arrLen; i++) {
      if (maxNum1 < arr[i]) {
        maxNum1 = arr[i];
      }
    }
    return maxNum1;
  }
  function getMin(arr) {
    var arrLen = arr.length,
        minNum1 = arr[0];
    for (var i = 0; i < arrLen; i++) {
      if (minNum1 > arr[i]) {
        minNum1 = arr[i];
      }
    }
    return minNum1;
  }
  fMax = getMax(arr);
  fMin = getMin(arr);
  console.log(fMax, fMin); 
  document.write("fMax result: " + fMax + " ");
  document.write("fMin result: " + fMin);
  
  
  
  var x = 3;
  var n = 3;
     function pow(x, n) {
      if (n != 1) {
        return x * pow(x, n - 1);
      } else {
        return x;
      }
    } 
	console.log(pow(x,n));
	
	
var x = 4;
var n = 5;	
	function pow(x, n) {
var result = x

for(var i=1; i<n; i++) {
result *= x;
}

return result
}
alert(pow(x,n));	

