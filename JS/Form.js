/*================ Start Form ==================*/
function validate() {

    var checkY1;    
    var checkY2;    
    var checkY3;    
    var checkY4;    
    var checkY5;   
    var checkY6;  

    var Y1=document.forms[0].firstName.value;
    var Y2=document.forms[0].userName.value;
    var Y3=document.forms[0].email.value;
    var Y4=document.forms[0].password.value;
    var Y5=document.forms[0].phone.value;
    var Y6=document.forms[0].secondName.value;

    var atposition = Y3.indexOf("@");
    var dotposition = Y3.indexOf(".");

    var zeroposition = Y5.indexOf("0");
    var numOnePosition = Y5.indexOf("1");

    var numbers = /^[0-9]+$/;

    //alert(Y1);
    
    // First Name Check
    if(Y1.includes("0") || Y1.includes("1") || Y1.includes("2") || Y1.includes("3") || Y1.includes("4") || Y1.includes("5") || Y1.includes("6") || Y1.includes("7") || Y1.includes("8") || Y1.includes("9"))
    {
        document.getElementById('x1').innerHTML = "First Name shouldn't include numbers !";
        checkx1 = false;
    }  
    else
    {
        document.getElementById('x1').innerHTML="";
    }
    
    //Second Name Check
    if(Y6.includes("0") || Y6.includes("1") || Y6.includes("2") || Y6.includes("3") || Y6.includes("4") || Y6.includes("5") || Y6.includes("6") || Y6.includes("7") || Y6.includes("8") || Y6.includes("9"))
    {
        document.getElementById('x6').innerHTML = "Second Name shouldn't include numbers !";
        checkx1 = false;
    }  
    else
    {
        document.getElementById('x6').innerHTML="";
    }

    // User Name Check
    if(Y2.length < 5 || Y2.length > 8 )
    {
        document.getElementById('x2').innerHTML = "* Usre Name must be between (5-8) character !";
        checkY2 = false;
    }  
    else
    {
        document.getElementById('x2').innerHTML="";
    }

    // Email Check
    if(atposition < 1 ||  dotposition + 2 >= Y3.length)
    {
        document.getElementById('x3').innerHTML = "* Invalid Email!";
        checkY3 = false;
    }  
    else
    {
        document.getElementById('x3').innerHTML="";
    }

     // Password Check
    if(Y4 =='' || Y4.length < 7)
    {
        document.getElementById('x4').innerHTML = "* Password can't be empty and must be > 7 character !";
        checkY4 = false;
    }  
    else
    {
        document.getElementById('x4').innerHTML="";
    }

    // Phone Check
    if(zeroposition != 0 || numOnePosition != 1 || Y5.length != 11 || !(Y5.match(numbers)) )
    {
        document.getElementById('x5').innerHTML = "mobile phone must be a number of 11 digits and start with '01' !";
        checkY5 = false;
    }  
    else
    {
        document.getElementById('x5').innerHTML="";
    }
    
    if(checkY1 == false || checkY2 == false || checkY3 == false || checkY4 == false || checkY5 == false || checkY6 == false)
    {
        return false;
    }
    return true;
}