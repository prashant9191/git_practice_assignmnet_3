function check_prime(number){
    let factor=0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            return true;
        }else{
            return false;
        }
    }
}
let ans=check_prime(17);
ans==true?console.log("Palindrome"):console.log("NA");