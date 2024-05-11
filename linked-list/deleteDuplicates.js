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
// [easy][linked-list] 83. Remove Duplicates from Sorted List
var deleteDuplicates = function (head) {
  let cur = head;

  while (cur && cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
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

// Generate the linked list using the values
const linkedList = generateLinkedList([1, 1, 2, 3, 3, 4, 5, 5, 5]);
console.log(deleteDuplicates(linkedList));
