class Set {
       constructor() {
              this.item = {} ; 
       }

       has( ele ) {
              return Object.prototype.hasOwnProperty.call( this.item , ele ) ; 
       }

       add( ele ) {
              if ( !this.has(ele) ) {
                     this.item[ele] = ele ; 
                     return true ; 
              }
              return false ; 
       }

       delete(ele) {
              if ( !this.has(ele) ) {
                     return false ; // INDICATING NOT DELETED !! 
              } else {
                     delete this.item[ele] ; 
                     return true ; 
              }
       }

       clear() {
              this.item = {} ;
       }

       sizeLegacy() {
              let count = 0 ; 
              for ( const key in this.item ) {
                     if ( this.item.hasOwnProperty(key) )  {
                            count++ ; 
                     }
              }
              return count ; 
       }

       union( otherSet ) {
              let unionSet = new Set() ; 
              for ( const i in this.item ) {
                     unionSet.add(i) ; 
              }
              for ( const i in otherSet.item ) {
                     unionSet.add(i) ; 
              }
              return unionSet ; 
       }

}

const first = new Set() ; 
const second = new Set() ; 
first.add(1) ; 
first.add(2) ; 
second.add(999) ; 
second.add(1000) ; 

const third = first.union(second) ; 
console.log ( third ) ; 