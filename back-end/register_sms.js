var phone;
var personalname;
function enviarSMS(){
   phone = document.getElementById("phone").value;
   var clearphone = phone.replace(/\D/gim, '');
   personalname = document.getElementById("personalnameRegister").value;
   var API_SMS = "https://2ckhjqhbxg.execute-api.us-east-1.amazonaws.com/dev/enviarsms";
   url = `${API_SMS}?phone=+55${clearphone}&personalname=${personalname}`;
   let xhr = new XMLHttpRequest();

xhr.open('GET', url, false);

try {
 xhr.send();
 if (xhr.status != 200) {
   alert(`Error ${xhr.status}: ${xhr.statusText}`);
 } else {
   console.log(xhr.response);
 }
} catch(err) { // instead of onerror
 alert("Request failed");
}
}

