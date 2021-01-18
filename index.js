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

let node1 = new ListNode(4)
let node2 = new ListNode(8)
let node3 = new ListNode(12)

node1.next = node2
node2.next = node3

let list = new LinkedList(node1)

reverseList = list => {
  let prev = null
  let next = null
  let head = list.head

  while (head !== null) {
    next = head.next 
    head.next = prev 
    prev = head 
    head = next 
  }
  return prev 
}

let res = reverseList(list)

console.log(res)

