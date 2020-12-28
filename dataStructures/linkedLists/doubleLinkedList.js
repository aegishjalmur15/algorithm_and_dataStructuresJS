//!Double Linked list: item navigation can be foward and backward:

class Node{
    constructor(value){
        this.data = value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        
    }
    insertAtFirst(value){
        let newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        return this.head
    }
    insertAtLast(value){
        let newNode = new Node(value);

        if(!this.head){
            this.head = newNode;
        }
        else{
           let tail = this.head;
           while(tail.next !== null){
               tail = tail.next;
           }
           newNode.prev = tail;
           tail.next = newNode;
        }
        return this.head
    }
    getAt(index){
        let counter = 0;
        let node = this.head;
        while(node){
            if(counter === index){
                return node
            }
            counter++;
            node = node.next;
        }
        return null
    }
    insertAt(data, index,){ 
        if(!this.head){
            this.head = new node(data);
            return
        }
        if(index === 0){
            this.head = new Node(data, this.head);
            return
        }
        let after = this.getAt(index);
        let before = after.prev;
        let newNode = new Node(data);
        after.prev = newNode;
        before.next = newNode;
        newNode.next = after;
        newNode.prev = before;
        return this.head
    }
    deleteFirstNode(){
        
    }

}

let doublelinkedList = new DoubleLinkedList();
doublelinkedList.insertAtLast(38);
doublelinkedList.insertAtLast(39);
doublelinkedList.insertAtFirst(40)
doublelinkedList.insertAtLast(1)
doublelinkedList.insertAt(38.5, 1);

console.log(doublelinkedList.getAt(2))
