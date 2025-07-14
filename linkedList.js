class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {
    const newNode = {
      value: value, next: null
    }

    this.tail.next = newNode
    this.tail = newNode
    this.length++

    return this
  }

  preppend(value) {
    const newNode = {
      value: value,
      next: null
    }

    newNode.next = this.head
    this.head = newNode
    this.length++

    return this
  }

  size() {
    return this.length
  }

  head() {
    return this.head
  }

  tail() {
    return this.tail
  }

  at(index) {
    let currentNode = this.head

    if (index === 0) {
     return currentNode
    }

    let i=0
    while(i < index) {
      currentNode = currentNode.next
      i++
    }

    return currentNode
  }

  pop() {
    const nodeToRemove = this.tail;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return nodeToRemove;
    } 

    let currentNode = this.head;
    let secondToLastNode;

    while(currentNode) {
      if (currentNode == this.tail) {
        secondToLastNode = currentNode;
        break;
      }
      currentNode = currentNode.next;
    }

    secondToLastNode.next = null;
    this.tail = secondToLastNode;
    this.length--;

    // Initialized to this.tail
    return nodeToRemove;
  }

  contains(value) {
    if (this.head === this.tail) {
      return this.head.value === value
    }

    let currentNode = this.head
   
    while(currentNode) {
      if (currentNode.value === value) {
        return true
      }

      currentNode = currentNode.next
    }

    return false
  }

  find(value) {
    let index = 0
    let currentNode = this.head
    
    while(currentNode) {
      if (currentNode.value === value) {
        return index
      }
      currentNode = currentNode.next

      index++
    }

    return null
  }

  toString() {
    let currentNode = this.head
    let arrayInString = `(${currentNode.value})` 

    currentNode = currentNode.next

    while(currentNode) {
      arrayInString += ` -> (${currentNode.value})`

      currentNode = currentNode.next
    }

    arrayInString += ` -> null`

    console.log(arrayInString)
  }

  insertAt(value, index) {
    if(index > this.length) {
      this.tail = {
        value: value,
        next: null
      }
      return this
    }

    let currentNode = this.head
    let newNode
    let i=0

    while(currentNode) {
      if (i === index-1) {
        newNode = {
          value: value,
          next: currentNode.next
        }

        currentNode.next = newNode

        break
      }

      currentNode = currentNode.next
      i++
    }

    this.length++
    return this
  }
}


const list = new LinkedList("dog");

list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.insertAt('teste', 2)

console.log(list)