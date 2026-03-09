function GetId(id){
    return document.getElementById(id);


}

GetId('signin-btn').addEventListener('click',function(){
    const admin = GetId('admin').value;
const password = GetId('password').value;

if(admin === 'admin' && password === 'admin123'){
    alert('Login Successful');
    window.location.href='./my.html';
}
else
{
    alert("Your Input was Wrong Try again!");
    return;
}

})