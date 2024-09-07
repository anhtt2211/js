/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// [medium][linked-list] 2130. Maximum Twin Sum of a Linked List

function reverseList(head) {
  let newHead = null;

  while (head) {
    const newNode = new ListNode(head.val);
    newNode.next = newHead;
    newHead = newNode;

    head = head.next;
  }

  return newHead;
}

var pairSum = function (head) {
  let reverse = reverseList(head);
  let maxSum = 0;

  while (head) {
    const sum = head.val + reverse.val;
    head = head.next;
    reverse = reverse.next;
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
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

let head1 = arrayToLinkedList([1, 3, 4, 5]);
let result1 = pairSum(head1);
console.log(result1);

let head2 = arrayToLinkedList([5, 6, 4, 7]);
let result2 = pairSum(head2);
console.log(result2);
