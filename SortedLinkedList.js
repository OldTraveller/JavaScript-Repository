class Node {
       constructor( data ) {
              this.data = data ; 
              this.next = null ; 
       }
}

class SortedLinkedList {
       constructor() {
              this.head = null ; 
              this.count = 0 ; 
       } 

       insertElement( ele ) {
              let newNode = new Node(ele) ; 
              if ( this.head == null ) {
                     this.head = newNode ; 
              } else if ( this.count == 1 ) {
                     if ( this.head.data > newNode.data ) {
                            newNode.next = this.head ; 
                     } else {
                            this.head.next = newNode ; 
                     }
              } else {
                     let before = null ; 
                     let after = this.head ; 
                     while ( after.data < ele && after.next != null ) {
                            before = after ; 
                            after = after.next ;
                     }
                     before.next = newNode ; 
                     newNode.next = after ; 
              }
       }
}

let sll = new SortedLinkedList() ; 
sll.insertElement(4) ; 
console.log ( sll ) ;
sll.insertElement(1) ; 
console.log ( sll ) ;
sll.insertElement(99) ;
console.log ( sll ) ;
sll.insertElement(-1) ; 
console.log ( sll ) ;