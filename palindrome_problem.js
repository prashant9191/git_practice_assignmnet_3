//Palindrome Problem

let str = "madam";
let lp="";
let pl="";
for(i=0;i<str.length;i++){
    lp+=str[i]
}
for(i=str.length-1;i>=0;i--){
    pl=pl+str[i]
}
if(lp==pl){
    console.log("It is Palindrome");
}
else{console.log("It is not Palindrome");
}

