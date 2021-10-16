class Node {
    constructor(data) { 
      this.previous = null; 
      this.data = data;  
      this.next = null;  
      this.head = {  
        data: data, 
        previous:null, 
        next: null  
      };
      this.tail = this.head;
    }
  
    insertData(data) {
      let newNode = new Node(data);
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
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
  linkedList.insertData(2);
  linkedList.insertData(3);
  console.log(linkedList);
  //linkedList.printList(); 
  