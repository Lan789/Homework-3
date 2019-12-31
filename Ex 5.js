

function findIndex(arr, Index) {

  if (Index + 1 === arr.length) {
    return -1
  }

  if (arr[Index] > arr[Index + 1]) {
    return Index + 1
  }
  return findIndex(arr, Index + 1)
}


console.log(findIndex([-9, -4, -4, 3, 12, 4, 5], 0))


