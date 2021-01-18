// let linkedList = {
//   "head": {value: 1, next: "address_two"},
//   "address_two": {value: 2, next: "address_three"},
//   "address_three": {value: 3, next: "address_four"},
//   "address_four": {value: 4, next: "tail"},
//   "tail": {value: 5, next: null}
// }

// const linkedList = {
//   head: {
//       value: 6,
//       next: {
//           value: 10,                                          
//           next: {
//               value: 12,
//               next: {
//                   value: 3,
//                   next: null	
//                   }
//               }
//           }
//       }
//   }

reverseList = list => {
  
  let prev = null
  let next = null
  let head = list.head
  // console.log(head.next)

  while (head !== null) {
    next = head.next
    head.next = prev
    prev = head
    head = next



  }
  return prev
}

// let rev = reverseList(linkedList)

// console.log(rev)

class ListNode {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }
}

let node1 = new ListNode(5)
let node2 = new ListNode(3)
let node3 = new ListNode(9)

node1.next = node2
node2.next = node3

let list = new LinkedList(node1)

console.log(list)