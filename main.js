const emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
const msg = "Please provide a valid email";
var input = document.querySelector('input');

const errormsg = document.createElement('p');
errormsg.classList.add('error__text');

function AddressVerifiedCheck() {
    var emailaddress = document.querySelector('[name="email"]').value;
    if (emailaddress.match(emailformat)) {
        return 1
    }
    else {
        return 0
    }
}

function SubmitCheck () {
    var emailaddress = document.querySelector('[name="email"]').value;
    var input = document.querySelector('input');

    if (emailaddress == "" || AddressVerifiedCheck() == 0) {
        input.style.border = "2px solid hsl(0, 93%, 68%)";
        SendErrorMsg(msg);
    }
    else {
        input.style.border = "1px solid hsl(0, 36%, 70%)";
        alert("Thank You For Subscribe us!");
    }
}

function SendErrorMsg (self) {
    var formblock = document.querySelector('.container__contents');
    
    errormsg.textContent = self;
    formblock.appendChild(errormsg);
    // document.body.insertBefore(errormsg, formblock);
}