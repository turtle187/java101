function encrypt(firstInitial, lastInitial, message){
   var alphabet = [" ","a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", 
   "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
   var letterkey = [];
   var encmessage = [];
   for (let i = 0; i < 27; i++){
      letterkey[alphabet[i]] = i;
      //letterkey["a"]
}
  for(let j = 0; j < message.length; j++){
     
     let sum = letterkey[firstInitial] + letterkey[lastInitial];  
     let total = letterkey[message[j]]  * sum;
     console.log(total);
      
  }
  
    
}
encrypt("r", "f", "this is not my dog");