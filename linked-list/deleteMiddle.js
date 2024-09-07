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
// [medium][linked-list] 2095. Delete the Middle Node of a Linked List

var deleteMiddle = function (head) {
  let slow = head;
  let fast = head;
  let prevSlow = head;

  while (fast && fast.next) {
    prevSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  prevSlow.next = slow.next;

  // If the middle node is the head node, update the head to the next node
  if (slow === head) {
    head = head.next;
  }
  return head;
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
console.log(deleteMiddle(node1));
