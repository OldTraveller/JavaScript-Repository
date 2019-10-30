let object = {
       name : "Abhishek" ,
       batch : "CSE" ,
       something : function( a ) {
              console.log (`THE STRING IS : ${ this.name }`) ; 
       }
}

object.something() ; 