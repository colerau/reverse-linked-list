let linkedList = {
  "head": {value: 1, next: "address_two"},
  "address_two": {value: 2, next: "address_three"},
  "address_three": {value: 3, next: "address_four"},
  "address_four": {value: 4, next: "tail"},
  "tail": {value: 5, next: null}
}

reverseList = list => {
  
  let prev = null
  let next = null
  let head = list.head
  console.log(head.next)

  // while (head !== null) {
  //   next = head.next
  //   head.next = prev
  //   prev = head
  //   head = next



  // }
  return prev
}

let rev = reverseList(linkedList)

// console.log(rev)