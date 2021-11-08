function showPrimes(n,m){
    if (n==1) {
    metka: for( let i=n+1; i<=m; i++) {
        for(let j=2; j<i; j++){
            if(i%j==0) continue metka;
            }
        console.log(i);
    }} 
    else {
        metka2: for(let i=n; i<=m; i++){
                    for(let j=2; j<i; j++){
                        if(i%j==0) continue metka2;

                    }
                console.log(i);
                }
         }    

}


const startNumber = +prompt("Enter start number:");
const finishNumber = +prompt("Enter finish  number:");

showPrimes(startNumber, finishNumber);