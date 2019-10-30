/* BASIC IMPLEMENTATION OF THE DOUBLY LINKED LIST !!! */

class Node {
       constructor( data ) {
              this.data = data ; 
              this.prev = null ; 
              this.next = null ; 
       }
}

class DoublyLinkedList {
       constructor() {
              this.head = null ;
              this.counts = 0 ; 
       }

       pushFront( ele ) {
              let newNode = new Node(ele) ; 
              if ( this.counts == 0 ) {
                     this.head = newNode ; 
                     newNode.next = newNode ; 
                     newNode.prev = newNode ; 
              } else {
                     newNode.next = this.head ;  
                     this.head.prev = newNode ; 
                     this.head = newNode ; 
              }
              this.counts++ ;
       }

       pushLast( ele ) {
              let newNode = new Node( ele ) ;
              let currentNode = this.head ; 
              if ( currentNode == null ) {
                     this.head = newNode ; 
                     this.prev = newNode ; 
                     this.next = newNode ; 
              } else {
                     while ( currentNode.next != null ) {
                            currentNode = currentNode.next ; 
                     }
                     currentNode.next = newNode ; 
                     newNode.prev = currentNode ; 
                     newNode.next = null ; 
              }
              this.counts++ ; 
       }

       removeFront() {
              if ( this.counts > 0 ) {
                     this.head = this.head.next ; 
                     return true ; 
              } 
              return false ; 
       }

       removeLast() {
              if ( this.counts > 0 ) {
                     let current = this.head ; 
                     let prev ; 
                     while ( current.next != null ) {
                            prev = current ; 
                            current = current.next ; 
                     }
                     prev.next = null ; 
                     return true ; 
              } return false ; 
       }

       display() {
              for ( let i = this.head ; i != null ; ) {
                     console.log ( i.data + " => " ) ; 
                     i = i.next ; 
              }
       }
}

double = new DoublyLinkedList() ; 
for ( let i = 12 ; i < 20 ; i++ ) {
       double.pushFront(i) ;
}
console.log ( double ) ; 