//  Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverse = (head) => {
  let newHead = null;

  while (head !== null) {
    let nextHead = head.next;
    head.next = newHead;
    newHead = head;
    head = nextHead;
  }

  return newHead;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const findMiddle = (head) => {
  let slow = head,
    fast = head;
  let prevSlow;

  while (fast && fast.next) {
    prevSlow = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  return { prevSlow, slow };
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// [easy][linked-list] 234. Palindrome Linked List
var isPalindrome = function (head) {
  let { prevSlow, slow } = findMiddle(head);

  if (!prevSlow) {
    return true;
  }
  if (prevSlow.next !== null) {
    prevSlow.next = null;
  }

  let newHead = reverse(slow);

  while (head !== null) {
    if (head.val !== newHead.val) {
      return false;
    }

    head = head.next;
    newHead = newHead.next;
  }

  return true;
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

// Test case: Check if [1] is a palindrome
const linkedList = generateLinkedList([1]);
console.log("Is Palindrome:", isPalindrome(linkedList));

// Test case: Check if [1, 2, 3, 4, 5] is a palindrome
const linkedList2 = generateLinkedList([1, 2, 3, 4, 5]);
console.log("Is Palindrome:", isPalindrome(linkedList2));
