module.exports =
function getZerosCount(number, base) {
    var resultZeros=number;
    primes = countPrimes(base)

for(let n=2; n<primes.length; n++){
	if(primes[n]!=undefined){
		var countZeros=0;
		for(var	zeros=Math.floor(number/n); zeros>0;){
			countZeros+=zeros;
			zeros=Math.floor(zeros/n);
		}
		resultZeros=Math.min(resultZeros,Math.floor(countZeros/primes[n]));
	}
	
}

 return resultZeros;
 }



function countPrimes(base){
primes=[];
var i=1;

for(let n=2; n<=base;){
	if(base%n==0){
	primes[n]=i++;
		base/=n;
	}
	else{
i=1;
	 n++;}
	 
}
return primes;
}
