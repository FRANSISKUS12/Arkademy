function is_username_valid(username) {

  var lowercaseRe = /[a-z]/g;

   var uppercaseRe = /[A-Z]/g;

     var numberRe = /[0-9]/g;
  
	if(username.length == 9 && username.match(lowercaseRe).length == username.length) {
    
    	return true;
    }
    return false;
}

function is_password_valid(password) {
  
	var lowercaseRe = /[a-z]/g;
  
 
  var uppercaseRe = /[A-Z]/g;


  var numberRe = /[0-9]/g;

 
  var specialRe = /[_@#$%]/g;

  if(password.length == 10
     && lowercaseRe.test(password)
     && uppercaseRe.test(password)
     && numberRe.test(password)
     && specialRe.test(password)) {
     return true;
  }

  return false;
}
//username
console.log(is_username_valid('aiueobnmk') ? 'benar' : 'salah'); 
console.log(is_username_valid('hahaha') ? 'benar' : 'salah'); 
//password
console.log(is_password_valid('qazW_@12') ? 'benar' : 'salah'); 
console.log(is_password_valid('API@12oo') ? 'benar' : 'salah');
console.log(is_password_valid('nanana@s') ? 'benar' : 'salah');  