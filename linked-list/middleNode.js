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
// [easy][linked-list] 876. Middle of the Linked List
var middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
};

// Create some sample linked list nodes
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const node1 = new ListNode(1);
const node2 = new ListNode(2);
const node3 = new ListNode(3);
const node4 = new ListNode(4);
const node5 = new ListNode(5);

// Connect the nodes to form a linked list: 1 -> 2 -> 3 -> 4 -> 5
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;

// Call the middleNode function with the head node of the linked list
console.log(middleNode(node1));
