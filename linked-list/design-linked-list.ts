// [medium][linked-list] 707. Design Linked List

class ListNode {
  public val: number;
  public next: ListNode | null;

  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedList {
  constructor(public dummyHead: ListNode, public size: number) {
    this.dummyHead = new ListNode(0);
    this.size = 0;
  }

  get(index: number): number {
    if (index >= this.size) {
      return -1;
    }

    let node: ListNode | null = this.dummyHead;

    for (let i = 0; i <= index; i++) {
      if (!node?.next) {
        return -1;
      }
      node = node.next;
    }

    return node.val;
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) {
      return;
    }

    let prev = this.dummyHead;

    for (let i = 0; i < index; i++) {
      if (!prev.next) {
        return;
      }
      prev = prev.next;
    }

    let newNode = new ListNode(val);
    newNode.next = prev.next;
    prev.next = newNode;
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index >= this.size) {
      return;
    }

    let prev = this.dummyHead;

    for (let i = 0; i < index; i++) {
      if (!prev.next) {
        return;
      }
      prev = prev.next;
    }

    if (!prev.next) {
      return;
    }
    prev.next = prev.next.next;
    this.size--;
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val);
  }

  addAtTail(val: number): void {
    this.addAtIndex(this.size, val);
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
