/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// [medium][linked-list] 2. Add Two Numbers
var addTwoNumbers = function (l1, l2) {
  let dummyHeadAns = new ListNode(0);

  let carry = 0;
  let current = dummyHeadAns;

  while (l1 || l2) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
  }

  if (carry !== 0) {
    current.next = new ListNode(carry);
  }

  return dummyHeadAns.next;
};
