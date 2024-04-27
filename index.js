
const authUName = "SakuraHimiko"
const authPass = "mikumiku"
const username = prompt("Username: ")
const password = prompt("Password: ")
if(authUName === username && authPass === password){
  alert("Siccessfully Logged In")
}else{
  alert("Wrong Username or Password")
}

