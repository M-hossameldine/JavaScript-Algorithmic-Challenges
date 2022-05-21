# Queue

### Description

Create a queue data structure. The queue
should be a class with methods 'add' and 'remove'.
Adding to the queue should store an element until it is removed

### Examples

```
  const q = new Queue();
  q.add(1);
  q.remove(); // returns 1;
```

In JavaScript, Array has the capabilities of the Queue data structures
So we will build the Queue with an Array using the unshift, and pop methods and restricting other array capabilities.

```
  class Queue {
    constructor() {
      this.data = [];
    }

    add(record) {
      this.data.unshift(record);
    }

    remove() {
      return this.data.pop();
    }
  }
```
