# Implement a Queue Data Structure using two Stacks

### Directions

- Implement a Queue datastructure using two stacks.
- _Do not_ create an array inside of the 'Queue' class.
- Queue should implement the methods 'add', 'remove', and 'peek'.
- For a reminder on what each method does, look back at the Queue exercise.

### Examples

```
  const q = new Queue();
  q.add(1);
  q.add(2);
  q.peek();  // returns 1
  q.remove(); // returns 1
  q.remove(); // returns 2
```

#### Solution

```
  // Stack.js file

  class Stack {
    constructor() {
      this.data = [];
    }

    push(record) {
      this.data.push(record);
    }

    pop() {
      return this.data.pop();
    }

    peek() {
      return this.data[this.data.length - 1];
    }
  }
```

##### My Solution

```
  // Queue.js file
  class Queue {
    constructor() {
      this.first = new Stack();
      this.second = new Stack();
    }

    add(record) {
      this.first.push(record);
    }

    remove() {
      // if there is still records in the second stack
      if (this.second.peek()) {
        return this.second.pop();
      }

      // move all records from first stack to second stack
      while (this.first.peek()) {
        this.second.push(this.first.pop());
      }

      return this.second.pop();
    }

    peek() {
      // check if the second stack is empty
      if (!this.second.peek()) {
        while (this.first.peek()) {
          this.second.push(this.first.pop());
        }
      }

      return this.second.peek();
    }
  }

```

### Stephan's Solution

```
  // Queue.js file

  class Queue {
    constructor() {
      this.first = new Stack();
      this.second = new Stack();
    }

    add(record) {
      this.first.push(record);
    }

    remove() {
      // move all records from first to second stack
      while (this.first.peek()) {
        this.second.push(this.first.pop());
      }

      // remove the top record from the second stack
      const record = this.second.pop();

      // move all records back to first stack
      while (this.second.peek()) {
        this.first.push(this.second.pop());
      }

      return record;
    }

    peek() {
      while (this.first.peek()) {
        this.second.push(this.first.pop());
      }

      const record = this.second.peek();

      while (this.second.peek()) {
        this.first.push(this.second.pop());
      }

      return record;
    }
  }

```
