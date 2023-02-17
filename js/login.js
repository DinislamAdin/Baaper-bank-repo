//step -1
document.getElementById('btn-submit').addEventListener('click', function(){
    //step -2
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //step -3
    const passwordField = document.getElementById('user-password')
    const password = passwordField.value;
    //danger : step - 4
    if(email === 'din@gmail.com' && password === '12345'){
        window.location.href = 'bank.html';
    }
    else{
        alert('wrong password')
    }
})