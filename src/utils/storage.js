export const sessionStorage = {
    set:function(name,value){
      if(typeof value === 'string'){
        sessionStorage.setItem(name,value);
      }else{
        sessionStorage.setItem(name,JSON.stringify(value));
      }
    },
    get:function(name){
      return sessionStorage.getItem(name);
    },
    del:function(name){
      if (name) {
        sessionStorage.removeItem(name);
      } else {
        sessionStorage.clear();
      }
    }
 }

 