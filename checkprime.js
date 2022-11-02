function checkprime(num){
    let count=0;
    for(let i=i;i<num;i++){
        if(num%i!=0){
            count++;
        }  
    }
    if(count==2){
       return true;
    }
    return false;

}

let a=checkprime(10);
if(a==true){
    console.log("Prime number");
}else{
    console.log("Not a Prime number");
}