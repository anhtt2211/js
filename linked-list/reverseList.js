class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// [easy][linked-list] 206. Reverse Linked List
var reverseList = function (head) {
  let newHead = null;

  while (head) {
    let nextHead = head.next;
    head.next = newHead;
    newHead = head;
    head = nextHead;
  }
  return newHead;
};

// Function to generate a linked list from an array of values
function generateLinkedList(arr) {
  let head = null;
  let tail = null;
  for (let val of arr) {
    const newNode = new ListNode(val);
    if (!head) {
      head = newNode;
      tail = head;
    } else {
      tail.next = newNode;
      tail = tail.next;
    }
  }
  return head;
}

// Test case
const linkedList = generateLinkedList([1, 2, 3, 4, 5]);
console.log(reverseList(linkedList));
