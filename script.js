function validateForm() {
    var fName = document.getElementById("fName").value;
    var lName = document.getElementById("lName").value;
    var address = document.getElementById("address").value;
    var cpNumber = document.getElementById("cpNumber").value;
    var city = document.getElementById("city").value;
    var region = document.getElementById("region").value;
    var zip = document.getElementById("zip").value;
    var sID = document.getElementById("sID").value;
    var program = document.getElementById("program").value;
    if (fName == "" || lName == ""  || address == "" || cpNumber == "" || city == "" || region == "" || zip == "" || sID == "" || program == "") {
        alert("Please fill out all the fields.");
        return false;
    } else if (phonenumber(cpNumber)) {
        return true;
    } else {
        return false;
    }
};


function phonenumber(inputtxt) {
    if (isNaN(inputtxt)) {
        alert('Please Input Numeric Characters Only!');
        return false;
    } else {
        if (inputtxt.length == 11) {
            alert('The Enrollment application is Submitted.');
            return true;
        } else {
            alert('Invalid Cellphone Number Format');
            return false;
        }
    }
};

function clearfield() {
    document.getElementById("fName").value = "";
    document.getElementById("lName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("cpNumber").value = "";
    document.getElementById("city").value = "";
    document.getElementById("region").value = "";
    document.getElementById("zip").value = "";
    document.getElementById("sID").value = "";
    document.getElementById("program").value = "";
    alert("All Fields are Cleared");
};