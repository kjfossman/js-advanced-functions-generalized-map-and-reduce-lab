// Add your functions here
function map(array, callback){
    const r = []
    for(let i = 0; i < array.length; i++){
        const element = array[i]
        r.push(callback(element))
    }
    return r
}
function reduce(src, callback, startingValue) {
    let total;
    if (startingValue) {
      total = startingValue;
      for (let i = 0; i < src.length; i++) {
        total = callback(src[i], total);
      }
      return total;
    } else {
      total = src[0];
      for (let i = 1; i < src.length; i++) {
        total = callback(src[i], total);
      }
      return total;
    }
  }