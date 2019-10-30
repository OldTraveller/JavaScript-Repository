// RECURSIVE DEFINITION OF FIBONACCI SEQUENCE !! 
let FiboRecursive = (n) => {
       if ( n == 0 ) return 0 ; 
       else if ( n == 1 || n == 2 ) return 1 ; 
       else {
              return FiboRecursive( n - 1 ) + FiboRecursive( n - 2 ) ; 
       }
}

// FIBONACCI LOOP METHOD !! 
let first = 0 ; 
let second = 1 ; 
let nth = 1 ; 
for ( let i = 1 ; i < nth ; i++ ) {
       let temp = first + second ; 
       first = second ; 
       second = temp ; 
}
console.log ( second ) ; // 0 1 1 2 3 5 8 

