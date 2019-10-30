// THE SUM OF N NATURAL NUMBERS IS GIVEN BY N(N+1)/2 
let Factorial = (n) => ( n == 0 ) ? 1 : n*Factorial(n-1) ; 

for ( let i = 0 ; i < 6 ; i++ ) {
       console.log ( Factorial(i) ) ;        
}