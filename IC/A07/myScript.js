function getClasses(elem)
{
    var classList = document.getElementById(elem).className.split(/\s+/);
};

function addClass(elem, className){
    elem.classList.add(className);
}



function validateForm()
{
    var un=document.getElementById('username').value;
    var em=document.getElementById('email').value;
    var pa=document.getElementById('password').value;
    var co=document.getElementById('confirm').value;
    if(un == ""){
        alert('Please Enter First Name');
        document.getElementById('username').style.borderColor = "red";
    }else{
        document.getElementById('username').style.borderColor = "green";
    }
    if (/^[0-9]+$/.test(document.getElementById("username").value)) {
        alert("First Name Contains Numbers!");
        document.getElementById('username').style.borderColor = "red";
    }else{
        document.getElementById('username').style.borderColor = "green";
    }
    if(un.length <=2){
        alert('Your Name is To Short');
        document.getElementById('username').style.borderColor = "red";
    }else{
        document.getElementById('username').style.borderColor = "green";
    }
}