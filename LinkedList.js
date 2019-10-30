/* IMPLEMENTATION OF LINKED LIST IN JS !!! */

class Node {
       constructor( data ) {
              this.data = data ;
              this.next = undefined ;  
       }
}

class LinkedList {
       // DEFAULT PARAMETER !!
       constructor() {
              this.count = 0 ; 
              this.head = undefined ; 
       }

       push( element ) {
              let newNode = new Node( element ) ; 
              if ( this.count == 0 ) {
                     this.head = newNode ; 
              } else {
                     let current = this.head ; 
                     while ( current.next != null ) {
                            current = current.next ; 
                     }
                     current.next = newNode ; 
              }
              this.count++ ; 
       }

       removeAtIndex( index ) {
              let current = this.head ; 
              if ( current == undefined ) return undefined ; 
              else {
                     if ( index == 0 ) {
                            this.head = current.next ; 
                     } else {
                            let previous = current ; 
                            for ( let i = 0 ; i < index ; i++ ) {
                                   previous = current ; 
                                   current = current.next ; 
                            }
                            if ( previous != null ) {
                                   previous.next = current.next ; 
                            }
                     }
                     this.count-- ;
                     return current.data ;
              }
       }

       removeLast() {
              let current = this.head ; 
              if ( current == null ) {
                     return undefined ; 
              } else {
                     while ( current.next != null ) {
                            current = current.next ; 
                     }
                     current = null ; 
              }
       }

       displayList() {
              let current = this.head ; 
              if ( current == null ) {
                     console.log ( "THE LSIT IS EMPTYR !!" ) ; 
                     return undefined ; 
              }
              while ( current ) {
                     console.log ( current.data ) ; 
                     current = current.next ; 
              }
       }

       insertAtPos( pos , element ) {
              if ( pos >= 0 && pos <= this.count ) {
                     let newNode = new Node(element) ; 
                     let current = this.head ; 
                     for ( let i = 1 ; i < pos ; i++ ) {
                            current = current.next ; 
                     }
                     let after = current.next ; 
                     current.next = newNode ; 
                     newNode.next = after ; 
                     return true ; 
              }
              return false ; 
       }
}

linkedList = new LinkedList() ; 
for ( let i = 1 ; i < 5 ; i++  ) {
       linkedList.push(i) ; 
}
console.log ( linkedList ) ;
linkedList.removeAtIndex(2) ;
console.log ( "===============================" ) ;  
console.log ( linkedList ) ;

linkedList.insertAtPos( 0 , 9999 ) ; 
console.log ( linkedList ) ; 