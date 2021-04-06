const last = (arr) => {
    return arr.length === 0 ? null : arr[arr.length - 1]
}

// Sample Tests
console.log(last([1,2,3]))
console.log(last([]))
console.log(last([0]))
console.log(last(['a']))
