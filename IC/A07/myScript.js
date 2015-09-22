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
    }
    if(em == ""){
        alert('Please Enter Email');
        document.getElementById('email').style.borderColor = "red";
    }
    if(pa == ""){
        alert('Please Enter Password');
        document.getElementById('password').style.borderColor = "red";
    }
    if(co == ""){
        alert('Please Enter Password Confirmation');
        document.getElementById('confirm').style.borderColor = "red";
    }
    if(co != pa){
        alert("Your password and confirmation password do not match.");
        document.getElementById('confirm').style.borderColor = "red";
    }
}