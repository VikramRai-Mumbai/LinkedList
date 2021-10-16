class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.head = {
        data: data,
        next: null
      };
    }
  
    insertData(data) {
      let newNode = {
        data: data,
        next: null
      };
      if (this.head.next === null) {
        this.head.next = newNode;
      } else {
        this.temp = this.head;
        while (this.temp.next != null) {
          this.temp = this.temp.next;
        }
        this.temp.next = newNode;
      }
    }
  
    printList() {
      this.temp = this.head;
      while (this.temp != null) {
        console.log(this.temp.data);
        this.temp = this.temp.next;
      }
    }
  }
  
  let linkedList = new Node(1);
  console.log(linkedList);
  linkedList.insertData(2);
  console.log(linkedList);
  linkedList.insertData(3);
  console.log(linkedList);
  //linkedList.printList();
  