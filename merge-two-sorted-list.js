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
const mergeTwoLists = (list1, list2) => {
    if (!list1) return list2;
    if (!list2) return list1;
    let result = list1.concat(list2);
    return result.sort((val1, val2) => (val2 - val1 > 0) && -1)
};

const list1 = null
const list2 = []

console.log(mergeTwoLists(list1, list2));