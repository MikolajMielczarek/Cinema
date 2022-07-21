//containers for steps
const containerFirstReg = document.querySelector(".first-step");
const containerSecondReg = document.querySelector(".second-step");
const containerSucces = document.querySelector(".success-message")

//forms
const formFirst = document.querySelector(".first-form")
const formSecond = document.querySelector(".second-form")

//img to show password
const btnPass = document.querySelector(".input-div button")

//inputs
const inputPass = document.querySelector(".input-password")
const inputEmail = document.querySelector(".input-email")
const inputFirstName = document.querySelector(".input-name")
const inputLastName = document.querySelector(".input-last-name")
const inputDate = document.querySelector(".input-date")
const inputCheck = document.querySelector(".input-check")

const firstReq = document.querySelector(".first-req")
const secondReq = document.querySelector(".second-req")
const thirdReq = document.querySelector(".third-req")

//buttons
const firstSubBtn = document.querySelector(".first-step-sub-btn")
const secondSubBtn = document.querySelector(".second-step-sub-btn")
const lastBtn = document.querySelector(".last-btn")

//h1 and h3 (h2 not needed)
const h1Name = document.querySelector(".h1-name")
const h3Email = document.querySelector(".h3-email")

//const for colors inputs - borders - buttons - req

const red1 = "#EC1115";
const red2 = "#A60C0E";
const red3 = "#F47073";
const gray1 = "#F7F7F7";
const gray2 = "#85868D";
const gray3 = "#343541";
const blue = "#2F80ED";
const green = "green"
const red = "red"

////////all actions for email input

//checking requirement for email

const onFocusEmail = () => {
    if(inputEmail.name === "reqForInput" || inputEmail.name === "noLengthForInput") {
        inputEmail.style.borderColor = blue;
    }
}

const outFocusEmail = () => {
    if(inputEmail.name === "reqForInput" || inputEmail.name === "noLengthForInput") {
        inputEmail.style.borderColor = gray1;
    } else if(inputEmail.name === "reqNoForInput") {
        alert('Email have to: 1) End with monterail.com 2) Contain @ 3) Have some value before @')
    }
}

const checkingEmail = email => {
    //at the end need to have "monterail.com"
    firstSubBtn.setAttribute("disabled","")

    const emailCondition = /monterail.com$/gi;
    const emailMonky = /[@]/g;
    const emailStart = /.+@/g;

    if(emailStart.test(email) && emailMonky.test(email) && emailCondition.test(email)){
        inputEmail.style.borderColor = blue;
        inputEmail.name = "reqForInput";
        if(firstReq.style.color === green && secondReq.style.color === green && thirdReq.style.color === green){
        firstSubBtn.removeAttribute("disabled","");}
    }else{
        inputEmail.style.borderColor = red1;
        inputEmail.name = "reqNoForInput";
    }

    if(email.length === 0){
        inputEmail.style.borderColor = blue;
        inputEmail.name = "noLengthForInput";
    }
}

//change email in the last message
const changeEmail = email => {
    h3Email.innerHTML = `We have sent you an email to <span>${email}</span>.<br>
    Make sure to click the link from the message to activate your account.`
}

//save the value of email
inputEmail.addEventListener("keyup", () => {
    const email = inputEmail.value.trim();
    checkingEmail(email)
    changeEmail(email);
})

////////all actions for password input

//adding event listener with function to see password input
btnPass.addEventListener("click", () => {
    if (inputPass.type === "password"){
        inputPass.type = "text";
    } else {
        inputPass.type = "password";
    }
})

//checking req for border color onfocus and outfocus

const onFocusPass = () => {
    if(firstReq.style.color != red && secondReq.style.color != red && thirdReq.style.color != red) {
        inputPass.style.borderColor = blue;
        }
}

const outFocusPass = () => {
    if(firstReq.style.color != red && secondReq.style.color != red && thirdReq.style.color != red)
    {
    inputPass.style.borderColor = gray1;
    }
}


//checking that all three password requirements are met and inputs are filled 
const checkingPassword = pass => {
    firstSubBtn.setAttribute("disabled","")
    
    //first condition - at least 8 characters
    if (pass.length >= 8){
        firstReq.style.color = green;
    }else if (pass.length === 0){
        firstReq.style.color = gray3;
    } 
     else {
        firstReq.style.color = red;
        inputPass.style.borderColor = red1;
    }
    //second condition - at least one letter
    const letter = /[a-zA-Z]/g;
    if (letter.test(pass)){
        secondReq.style.color = green;
    }else if(pass.length === 0){
        secondReq.style.color = gray3;
    }else{
        secondReq.style.color = red;
        inputPass.style.borderColor = red1;
    }
    //third condition - at least one digit
    const digit = /[0-9]/g;
    if (digit.test(pass)){
        thirdReq.style.color = green;
    }else if(pass.length === 0){
        thirdReq.style.color = gray3;
    }else{
        thirdReq.style.color = red;
        inputPass.style.borderColor = red1;
    }

    //if all of 3 are ok!
    if(firstReq.style.color === green && secondReq.style.color === green && thirdReq.style.color === green) {
        if(inputEmail.name = "reqForInput"){
        firstSubBtn.removeAttribute("disabled","");}
        inputPass.style.borderColor = blue;
    }

    if(pass.length === 0){
        inputPass.style.borderColor = blue;
    }
}

//reading value of input and passing it to checkingPssword function
inputPass.addEventListener("keyup", () => {
    const pass = inputPass.value.trim();
    checkingPassword(pass);
});

//submit for first step
formFirst.addEventListener('submit', (e) => {
    e.preventDefault();
    containerFirstReg.classList.add("display");
    containerSecondReg.classList.remove("display");
})

////////all actions for first name input

//checking requirement for name

const onFocusFirstName = () => {
    if(inputFirstName.name === "reqForInput" || inputFirstName.name === "noLengthForInput") {
        inputFirstName.style.borderColor = blue;
    }
}

const outFocusFirstName = () => {
    if(inputFirstName.name === "reqForInput" || inputFirstName.name === "noLengthForInput") {
        inputFirstName.style.borderColor = gray1;
    }
}

const checkingFirstName = firstName => {
    secondSubBtn.setAttribute("disabled","")

    if(firstName != "" && (firstName[0].toUpperCase() === firstName[0]) && (firstName.length >= 2)) {
        inputFirstName.style.borderColor = blue;
        inputFirstName.name = "reqForInput";
        if(inputLastName.name = "reqForInput" && inputDate.name === "reqForInput"){
            secondSubBtn.removeAttribute("disabled","")
        }
    } else if(firstName.length === 0){
        inputFirstName.style.borderColor = blue;
        inputFirstName.name = "noLengthForInput"
    } else {
        inputFirstName.style.borderColor = red;
        inputFirstName.name = "reqNoForInput";
    }
}

//change name in last message
const changeFirstName = firstName => {
    h1Name.textContent = `Good job ${firstName}!`
}

//save the value of name
inputFirstName.addEventListener("keyup", () => {
    const firstName = inputFirstName.value.trim();
    changeFirstName(firstName);
    checkingFirstName(firstName);
})

////////all actions for last name input

//checking requirement for last name

const onFocusLastName = () => {
    if(inputLastName.name === "reqForInput" || inputLastName.name === "noLengthForInput") {
        inputLastName.style.borderColor = blue;
    }
}

const outFocusLastName = () => {
    if(inputLastName.name === "reqForInput" || inputLastName.name === "noLengthForInput") {
        inputLastName.style.borderColor = gray1;
    }
}

const checkingLastName = lastName => {
    secondSubBtn.setAttribute("disabled","");
    if(lastName != "" && (lastName[0].toUpperCase() === lastName[0]) && (lastName.length >= 2)) {
        inputLastName.style.borderColor = blue;
        inputLastName.name = "reqForInput";
        if(inputFirstName.name === "reqForInput" && inputDate.name === "reqForInput"){
            secondSubBtn.removeAttribute("disabled","")
        }
    } else if(lastName.length === 0){
        inputLastName.style.borderColor = blue;
        inputLastName.name = "noLengthForInput"
    } else {
        inputLastName.style.borderColor = red;
        inputLastName.name = "reqNoForInput";
    }
}
//save the value of name
inputLastName.addEventListener("keyup", () => {
    const lastName = inputLastName.value.trim();
    checkingLastName(lastName);
})

////////all actions for date input

//checking requirement for date

const onFocusDate = () => {
    if(inputDate.name === "reqForInput") {
        inputDate.style.borderColor = blue;
    }
}

const outFocusDate = () => {
    if(inputDate.name === "reqForInput" || inputDate.name === "noLengthForInput") {
        inputDate.style.borderColor = gray1;
    }
    if(inputDate.name === "reqNoForInput"){
        inputDate.style.borderColor = red1;
        inputDate.style.color = gray3;
    }
}

//validation for birthday date
const overEighteen = dayOfBirth => {
    const eighteenAgo = new Date();
    eighteenAgo.setFullYear(eighteenAgo.getFullYear() - 18);
    if (dayOfBirth <= eighteenAgo) {
        inputDate.style.color = gray3;
        inputDate.style.borderColor = blue;
        inputDate.name = "reqForInput";
        if(inputFirstName.name === "reqForInput" && inputLastName.name === "reqForInput"){
            secondSubBtn.removeAttribute("disabled","")
        }
    }else{
        inputDate.style.borderColor = red1;
        inputDate.name = "reqNoForInput";
    }
}

//checking the age
inputDate.onchange = (e) => {
    secondSubBtn.setAttribute("disabled","");
    const dayOfBirth = new Date(e.target.value);
    overEighteen(dayOfBirth);
}

//submit for second step
formSecond.addEventListener('submit', (e) => {
    e.preventDefault();
    containerSecondReg.classList.add("display");
    containerSucces.classList.remove("display");
})

//submit for third step clean all inputs and reset req  for pass
lastBtn.addEventListener('click', (e) => {
    containerSucces.classList.add("display");
    containerFirstReg.classList.remove("display");
    inputEmail.value = "";
    inputPass.value = "";
    inputFirstName.value = "";
    inputLastName.value = "";
    inputCheck.checked = false;
    inputDate.value = null;
    firstReq.style.color = red;
    secondReq.style.color = red;
    thirdReq.style.color = red;
})