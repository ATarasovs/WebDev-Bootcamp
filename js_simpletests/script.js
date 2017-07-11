function isEven(num){
   return num % 2 == 0;
}

function factorial(num){
   if(num==0)
   {
      return 1;
   }
   else {
      var  i = num-1;
      for(i === num; i>0; i--)
      {
         num=num*i
      }
      return num;
   }
}

function replace(str) {
   result = str.replace(/-/g, "_");
   return result;
}
