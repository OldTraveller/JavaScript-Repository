const set = new Set() ; 

set.add(1) ;
set.add(2) ; 
set.add(3) ; 
set.add(1) ; 
set.add(1) ; 
set.add(2) ; 

console.log ( set ) ;

let keys = set.keys() ; 

while ( keys.next ) {
       console.log ( keys ) ; 
       keys = keys.next ; 
}
