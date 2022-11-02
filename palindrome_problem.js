let str = "madam";
let bag="";
for(i=str.length-1;i>=0;i--){
    bag+=str[i]
}
if(str==bag){
    console.log("It is Palindrome");
}
else{console.log("It is not Palindrome");
}