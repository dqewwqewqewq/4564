function validateform(){  
    var name=document.myform.name.value; 
    var name=document.myform.English.value;
    var name=document.myform.Address.value;
    var password=document.myform.password.value;  
    if (name==null || name==""){  
      alert("Information can't be blank");  
      return false;  
    }else if(password.length<11){  
      alert("number must be at least 11 characters long.");  
      return false;  
      }else if(isNaN(password) || isNaN("")){
          alert("Please enter number");
          return false;
      }
    } 
   