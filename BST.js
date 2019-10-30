class Node {
       constructor(data) {
              this.data = data ; 
              this.left = null ; 
              this.right = null ; 
       }
}

class BinarySearchTree {
       constructor() {
              this.root = null ; 
       }

       inorder( root ) {
              if ( root != null ) {
                     this.inorder( root.left ) ;
                     console.log ( root.data ) ; 
                     this.inorder( root.right ) ; 
              }
       }

       Height( node ) {
              if ( node == null ) return -1 ; 
              else {
                     return 1 + Math.max( this.Height(node.left) , this.Height(node.right)) ; 
              }
       }

       insertNode( root , key ) {
              if ( root == null ) {
                     root = new Node(key) ; 
              } else {
                     if ( key < root.data ) {
                            this.insertNode( root.left , key ) ;  
                     } else {
                            this.insertNode( root.right , key ) ; 
                     }
              }
       }

       inorder( root ) {
              if ( root != null ) {
                     this.inorder( root.left ) ;
                     console.log ( root.data ) ; 
                     this.inorder( root.right ) ; 
              }
       }

       insert( key ) {
              if ( this.root == null ) {
                     this.root = new Node(key) ;  
              } else {
                     this.insertNode ( this.root , key ) ; 
              }
       }

       
}

let BST = new BinarySearchTree() ; 
BST.insert(10) ;
BST.insert(20) ; 
BST.insert(8) ; 
BST.insert(9) ; 
BST.insert(6) ; 
console.log(BST);
//BST.inorder( BST.root ) ;
