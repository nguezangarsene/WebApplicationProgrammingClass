
const account =(function(){
  "use strict"
    const accountList=[];
    return{
         add:function(details){
             accountList.push(details);
         },
         display: function(){
           return accountList;
         }
    }
})();

document.getElementById("newAccount").onclick=function(){
  var account_name=document.getElementById("accountName").value;
  var deposit=document.getElementById("deposit").value;
  account.add({name: account_name, deposit: deposit});
  // console.log(account.display());

  let x = account.display();
  account.display().forEach((element)=>{
    // console.log(element)
     document.getElementById("accountScreen").value+=(`Account name: ${element.name}   Deposit: ${element.deposit}`+"\n");
  });
}
