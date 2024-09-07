/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// [medium][linked-list] 328. Odd Even Linked List

var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  // 1 2 3 4 5
  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}
function arrayToLinkedList(arr) {
  let dummy = new ListNode();
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

function linkedListToArray(head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}

let head1 = arrayToLinkedList([1, 2, 3, 4, 5]);
let result1 = oddEvenList(head1);
console.log(linkedListToArray(result1));

let head2 = arrayToLinkedList([2, 1, 3, 5, 6, 4, 7]);
let result2 = oddEvenList(head2);
console.log(linkedListToArray(result2));
