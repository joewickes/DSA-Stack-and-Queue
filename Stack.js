class _Node {
  constructor(value, next) {
      this.value = value;
      this.next = next;
  }
}

class Stack {
  constructor() {
      this.top = null;
  }

  peek() {
    if (this.top === null) {
      return null;
    }

    return this.top.value;
  }

  isEmpty() {
    if (this.top === null) {
      console.log(true);
    } else {
      console.log(false);
    }
  }

  display() {
    if (this.top === null) {
      return null;
    }

    let currNode = this.top;
    while (currNode.next !== null) {
      console.log(currNode.value);
      currNode = currNode.next;
    }
    console.log(currNode.value);
  }
  

  push(data) {
    /* If the stack is empty, then the node will be the
       top of the stack */
    if (this.top === null) {
        this.top = new _Node(data, null);
        return this.top;
    }

    /* If the stack already has something, 
       then create a new node,
       add data to the new node, and
       have the pointer point to the top */
    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    /* In order to remove the top of the stack, you have to point
      the pointer to the next item and that next item becomes the
      top of the stack */
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

module.exports = Stack;