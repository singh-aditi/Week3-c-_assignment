export class Validation {
    ValidateEmail(inputText, rInd) {
        this.sendVal = inputText;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (inputText.match(mailformat)) {
            return true;
        }
        else {
            let app2 = document.getElementById("tbl1").rows[rInd].cells[3];
            let dateSpan2 = document.createElement('span');
            dateSpan2.innerHTML = "<br>You have entered an invalid email address!";
            dateSpan2.style.color = "red";
            app2.append(dateSpan2);
            return false;
        }
    }
    //email validation fn ends here
    //phone no validation
    phonenumber(inputtxt, rInd) {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (inputtxt.match(phoneno)) {
            return true;
        }
        else {
            if (this.ValidateEmail(this.sendVal, rInd)) {
                let rem1 = document.getElementById("tbl1").rows[rInd].cells[3]; //.firstChild as HTMLInputElement);
                let rem2 = document.getElementById("tbl1").rows[rInd].cells[3].childNodes[1]; //.firstChild as HTMLInputElement);
                if (rem2)
                    rem1.removeChild(rem2);
            }
            let app1 = document.getElementById("tbl1").rows[rInd].cells[4];
            let dateSpan1 = document.createElement('span');
            dateSpan1.innerHTML = "<br>Not a valid Phone Number";
            dateSpan1.style.color = "red";
            app1.append(dateSpan1);
            return false;
        }
    }
    //phone number validation
    InputValidation(input, rInd) {
        if (input == "") {
            let app2 = document.getElementById("tbl1").rows[rInd].cells[0]; //.firstChild as HTMLInputElement);
            let dateSpan2 = document.createElement('span');
            dateSpan2.innerHTML = "<br>Please fill the first name!";
            dateSpan2.style.color = "red";
            app2.append(dateSpan2);
            return false;
        }
        else
            return true;
    }
}
