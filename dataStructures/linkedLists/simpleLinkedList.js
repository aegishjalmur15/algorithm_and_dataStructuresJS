//! A linked list is a data structure who are connected via links, each link contains a connection to another 
//! to another link
//? Link: each link can store a data called element
//? Next: each link contains a link to the next link called Next
//! Types: 
//todo Simple Linked list: item navigation is foward only
//todo Double Linked list: item navigation can be foward and backward
//todo Circular linked list: the last item has a link of the first element as Next and the first have a link of the last element as previous

//* implementation of a simple linked list in javascript:


class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(head = null){
        this.head = head;
    };
    //* insertAtFirst method will put a link element aways in the first position
    insertAtFirst(data){
        let newNode = new Node(data);

        newNode.next = this.head;

        this.head = newNode;

        return this.head;
    };
    //* insertAtFirst method will put a link element aways in the last position
    insertAtEnd(data){
        let newNode = new Node(data);

        if(!this.head){
            this.head = newNode;
            return this.head;
        }
        let tail = this.head;
        while(tail.next !== null ){
            tail = tail.next
        }
        tail.next = newNode;

        return this.head;
    };
    //*this method returns a node of the index given
    getAt(index){
        let counter = 0;
        let node = this.head;

        while(node){
            if(counter === index){
                return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    //* this method will insert and element in specific index of the linked list
    insertAt(data, index){
        if(!this.head){
            this.head = new Node(data);
            return
        }
        if(index === 0){
            this.head = new Node(data, this.head);
            return
        }
        let previous = this.getAt(index - 1);
        let newNode = new Node(data);
        newNode.next = previous.next;
        previous.next = newNode;
        return this.head;
    }
    //* as the name say this method delete the first node
    deleteFirstNode(){
        if(!this.head){
            return;
        }
        this.head = this.head.next
        return this.head;
    }
    //* this method will delete the last node
    deleteLastNode(){
        if(!this.head){
            return null;
        }
     if(!this.head.next){
       this.head =  null; 
     }
     let previous = this.head;
     let tail = this.head.next;
     while(tail.next !== null){
         previous = tail;
         tail = tail.next;
     }
     previous.next = null;
     return this.head
    } 
    //* this method will delete the node passed by index
    deleteAt(index){

        if(!this.head){
            this.head = new node(data);
            return
        }
        if(index === 0 ){
            this.head = this.head.next;
            return
        }
        const previous = this.getAt(index - 1);
        if(!previous || !previous.next){
            return
        }
        previous.next = previous.next.next
        return this.head
    }
    deleteAll(){
        this.head = null
    }


}

let newLinkedList = new LinkedList();
newLinkedList.insertAtFirst(38)
newLinkedList.insertAtFirst(39)
newLinkedList.insertAtFirst(40)
//* the newLinkedList will contain:  head: { data: 40, next: Node { data: 39, next: Node { data: 38, next: [Node] } } }


newLinkedList.insertAtEnd(37);
//* the newLinkedList will contain:  head: { data: 40, next: Node { data: 39, next: Node { data: 38, next: { data: 37, next: null } } } }

newLinkedList.getAt(2);
//* will return { data: 38, next: Node { data: 37, next: null } }

newLinkedList.insertAt(39.9, 1);
//* will return : {data: 40, next: Node { data: 39.9, next: Node { data: 39, next: [Node] } }}

newLinkedList.deleteFirstNode();
//* will return { data: 39.9, next: Node { data: 39, next: Node { data: 38, next: [Node] } } }

newLinkedList.deleteLastNode();
//* will return {data: 39.9, next: Node { data: 39, next: Node { data: 38, next: null } }}

newLinkedList.deleteAt(0);
//* will return {data: 39, next: Node { data: 38, next: null } }}
