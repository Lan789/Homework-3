function a (arr, arg){ 
  for(var i = 0 ; i < arr.length; i ++){ 
      for (var j=0; j< arr.length; j++){
        for (var m=0; m< arr.length; m++)
      if(arr[i] > arg && (arr[j]>arr[i] && arr[m]>arr[j])){
          var k = arr[j]+","+arr[m]+","+arr[i]
          return k; 
      } 
  } 
  }
  return "Such values do not exist"; 
}

console.log(a([10,25,16,-5,30,15,24],16));
