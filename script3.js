function showPrimes(n,m){
    
    metka: for( let i=n>=2?n:2; i<=m; i++) {
        for(let j=2; j<i; j++){
            if(i%j==0) continue metka;
            }
        console.log(i);
    }
   
}


const startNumber = +prompt("Enter start number:");
const finishNumber = +prompt("Enter finish  number:");

showPrimes(startNumber, finishNumber);