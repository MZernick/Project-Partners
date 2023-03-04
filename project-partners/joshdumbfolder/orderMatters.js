const list = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P"]
const pairs = ["A,B", "A,C", "J,K"]

function orderMatters(string1, string2) {
  if (string1===string2){
    console.log("same!")
    const pair = string1 + "," + string2
    return pair
  } else {
    if (list.includes(string1) && list.includes(string2)){
    console.log("good choices, now...");
    var pair = string1 + "," + string2
    if (!pairs.includes(pair)){
      pair = string2 + "," + string1
    }
    return pair
    }
  }
}

console.log(orderMatters("A","A"))
console.log(orderMatters("B","A"))
console.log(orderMatters("A","B"))
console.log(orderMatters("K","J"))
console.log(orderMatters("C","A"))