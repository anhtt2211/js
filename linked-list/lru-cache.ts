// [medium][linked-list] 146. LRU Cache

class DLLNode {
  value: number;
  key: number | null;
  next: DLLNode | null;
  prev: DLLNode | null;

  constructor(
    value: number = 0,
    key: number | null = null,
    next: DLLNode | null = null,
    prev: DLLNode | null = null
  ) {
    this.value = value;
    this.key = key;
    this.next = next;
    this.prev = prev;
  }
}

class DLinkedList {
  head: DLLNode;
  tail: DLLNode;

  constructor() {
    this.head = new DLLNode();
    this.tail = new DLLNode();

    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  public remove(node: DLLNode) {
    const prev = node.prev;
    const next = node.next;
    prev!.next = next;
    next!.prev = prev;
  }

  public addTail(node: DLLNode) {
    const prev = this.tail.prev;
    prev!.next = node;
    node.prev = prev;
    node.next = this.tail;
    this.tail.prev = node;
  }
}

class LRUCache {
  capacity: number;
  size: number;
  dll: DLinkedList;
  map: Map<number, DLLNode>;

  constructor(capacity: number) {
    this.dll = new DLinkedList();
    this.capacity = capacity;
    this.size = 0;
    this.map = new Map();
  }

  private moveToBack(node: DLLNode) {
    this.dll.remove(node);
    this.dll.addTail(node);
  }

  get(key: number): number {
    const node = this.map.get(key);

    if (!node) {
      return -1;
    }

    this.moveToBack(node);

    return node.value;
  }

  put(key: number, value: number): void {
    const node = this.map.get(key);

    if (node) {
      node.value = value;
      this.moveToBack(node);
      return;
    }

    if (this.size === this.capacity) {
      let evictedNode = this.dll.head.next!;
      this.map.delete(evictedNode.key!);
      this.dll.remove(evictedNode);
      this.size = this.size - 1;
    }

    let newNode = new DLLNode(value, key);
    this.map.set(key, newNode);
    this.dll.addTail(newNode);
    this.size = this.size + 1;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
