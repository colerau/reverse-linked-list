let linkedList = {
  "head": {value: 1, next: "address_two"},
  "address_two": {value: 2, next: "address_three"},
  "address_three": {value: 3, next: "address_four"},
  "address_four": {value: 4, next: "tail"},
  "tail": {value: 5, next: null}
}

reverseList = list => {
  console.log(list.head.value)
}

// console.log(linkedList)

let rev = reverseList(linkedList)

// console.log(rev)