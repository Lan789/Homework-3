function a (arr){ 
  for(var i = 0 ; i < arr.length; i ++){ 
      for (var j=0; j< arr.length; j++){
        for (var m=0; m< arr.length; m++){
      if(arr[i] >= 0 && (arr[j]>arr[i]) && (arr[m]>arr[j]) ){
          var k = Math.min(arr[i])
          return k; 
      } 
  }
  }
  }
  return "-1"; 
}

console.log(a([45,-9,15,5,-78]));