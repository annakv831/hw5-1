function showPrimes(n,m){
 metka:for(let i=n; i<=m; i++){
        for(let j=2; j<i; j++){
            if(i%j==0) continue metka;

        }
        console.log(i);
    }

}
const startNumber = +prompt("Enter number:");
const finishNumber = +prompt("Enter number:");

showPrimes(startNumber, finishNumber);