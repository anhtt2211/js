/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
// [easy][linked-list] 21. Merge Two Sorted Lists
var mergeTwoLists = function (list1, list2) {
  let dummyHead = new ListNode();
  let tail = dummyHead;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }

    tail = tail.next;
  }

  if (list1) {
    tail.next = list1;
  }
  if (list2) {
    tail.next = list2;
  }

  return dummyHead.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
// Function to print the values of a linked list
function printLinkedList(head) {
  let current = head;
  let values = [];
  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }
  console.log(values.join(" -> "));
}

// Create two sorted linked lists
const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

// Merge the two lists
const mergedList = mergeTwoLists(list1, list2);

// Print the merged list
console.log("Merged List:");
printLinkedList(mergedList);
