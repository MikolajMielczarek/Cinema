//containers for steps
const containerFirstReg = document.querySelector(".first-step");
const containerSecondReg = document.querySelector(".second-step");
const containerSucces = document.querySelector(".success-message");

//forms
const firstFormRegistration = document.querySelector(".first-form");
const secondFormRegistration = document.querySelector(".second-form");

//img to show password
const buttonSeeHidePassword = document.querySelector(".registration__inputdiv button");

//inputs
const inputPassword = document.querySelector(".registration__inputdiv--input-password");
const inputEmail = document.querySelector(".registration__inputdiv--input-email");
const inputFirstName = document.querySelector(".registration__inputdiv--input-first-name");
const inputLastName = document.querySelector(".registration__inputdiv--input-last-name");
const inputDate = document.querySelector(".registration__inputdiv--input-date");
const inputCheckPrivacyPolicy = document.querySelector(".registration__inputdiv--input-check");

//buttons
const firstStepSubmitButton = document.querySelector(".registration__buttons--button1");
const secondStepSubmitButton = document.querySelector(".registration__buttons--button2");
const lastStepSuccesButton = document.querySelector(".registration--succes-div-button--button");

//h1, p and h3
const h1Name = document.querySelector(".registration__headings__succes");
const firstRequirementHeader = document.querySelector(".registration--password-requirements--first-req");
const secondRequirementHeader = document.querySelector(".registration--password-requirements--second-req");
const thirdRequirementHeader = document.querySelector(".registration--password-requirements--third-req");
const h3Email = document.querySelector(".registration--succesh3");

//const for colors inputs - borders - buttons - req
const red1 = "#EC1115";
const red2 = "#A60C0E";
const red3 = "#F47073";
const gray1 = "#F7F7F7";
const gray2 = "#85868D";
const gray3 = "#343541";
const inputHoverGray = "#E5E5E5";
const blue = "#2F80ED";
const green = "green";
const red = "red";


////////all actions for email input
const onMouseOverEmailInput = () => {
    if(inputEmail === document.activeElement && (inputEmail.name === "reqForInput"|| inputEmail.name === "noLengthForInput")){
        inputEmail.style.borderColor = blue;
    }
    else if(inputEmail.name === "reqForInput" || inputEmail.name === "noLengthForInput") {
        inputEmail.style.borderColor = inputHoverGray;
    }
}

const onMouseOutEmailInput = () => {
    if(inputEmail === document.activeElement && (inputEmail.name === "reqForInput"|| inputEmail.name === "noLengthForInput")) {
        inputEmail.style.borderColor = blue;
    } else if(inputEmail.name === "reqForInput" || inputEmail.name === "noLengthForInput"){
        inputEmail.style.borderColor = gray1;
    }
}

const onFocusEmailInput = () => {
    if(inputEmail.name === "reqForInput" || inputEmail.name === "noLengthForInput") {
        inputEmail.style.borderColor = blue;
    }
}

const outFocusEmailInput = () => {
    if(inputEmail.name === "reqForInput" || inputEmail.name === "noLengthForInput") {
        inputEmail.style.borderColor = gray1;
    } else if(inputEmail.name === "reqNoForInput") {
        //alert('Email have to: 1) End with monterail.com 2) Contain @ 3) Have some value before @')
    }
}

//checking requirement for email
const checkEmailInputRequirements = email => {
    //at the end need to have "monterail.com"
    firstStepSubmitButton.setAttribute("disabled","");

    const emailCondition = /monterail.com$/gi;
    const emailAt = /[@]/g;
    const emailStart = /.+@/g;

    if(emailStart.test(email) && emailAt.test(email) && emailCondition.test(email)){
        inputEmail.style.borderColor = blue;
        inputEmail.name = "reqForInput";
        if(firstRequirementHeader.style.color === green && secondRequirementHeader.style.color === green && thirdRequirementHeader.style.color === green){
        firstStepSubmitButton.removeAttribute("disabled","");}
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
const changeEmailInSuccesStep = email => {
    h3Email.innerHTML = `We have sent you an email to <span>${email}</span>.<br>
    Make sure to click the link from the message to activate your account.`
}

//save the value of email
inputEmail.addEventListener("keyup", () => {
    const email = inputEmail.value.trim();
    checkEmailInputRequirements(email);
    changeEmailInSuccesStep(email);
    
})

////////all actions for password input

//adding event listener with function to see password input
buttonSeeHidePassword.addEventListener("click", () => {
    if (inputPassword.type === "password"){
        inputPassword.type = "text";
    } else {
        inputPassword.type = "password";
    }
})

//checking req for border color onfocus and outfocus onhover outhover

const onMouseOverPasswordInput = () => {
    if(inputPassword === document.activeElement && (firstRequirementHeader.style.color != red && secondRequirementHeader.style.color != red && thirdRequirementHeader.style.color != red)){
        inputPassword.style.borderColor = blue;
    }
    else if(firstRequirementHeader.style.color != red && secondRequirementHeader.style.color != red && thirdRequirementHeader.style.color != red) {
        inputPassword.style.borderColor = inputHoverGray;
    }
}

const onMouseOutPasswordInput = () => {
    if(inputPassword === document.activeElement && (firstRequirementHeader.style.color != red && secondRequirementHeader.style.color != red && thirdRequirementHeader.style.color != red)) {
        inputPassword.style.borderColor = blue;
    } else if(firstRequirementHeader.style.color != red && secondRequirementHeader.style.color != red && thirdRequirementHeader.style.color != red){
        inputPassword.style.borderColor = gray1;
    }
}

const onFocusPasswordInput = () => {
    if(firstRequirementHeader.style.color != red && secondRequirementHeader.style.color != red && thirdRequirementHeader.style.color != red) 
        {
            inputPassword.style.borderColor = blue;
        }
}

const outFocusPasswordInput = () => {
    if(firstRequirementHeader.style.color != red && secondRequirementHeader.style.color != red && thirdRequirementHeader.style.color != red)
        {
            inputPassword.style.borderColor = gray1;
        }
}

//checking that all three password requirements are met and inputs are filled 
const checkPasswordInput = password => {
    firstStepSubmitButton.setAttribute("disabled","")
    
    //first condition - at least 8 characters
    if(password.length >= 8){
        firstRequirementHeader.style.color = green;
    }else if(password.length === 0){
        firstRequirementHeader.style.color = gray3;
    } 
     else{
        firstRequirementHeader.style.color = red;
        inputPassword.style.borderColor = red1;
    }

    //second condition - at least one letter
    const letter = /[a-zA-Z]/g;
    if(letter.test(password)){
        secondRequirementHeader.style.color = green;
    }else if(password.length === 0){
        secondRequirementHeader.style.color = gray3;
    }else{
        secondRequirementHeader.style.color = red;
        inputPassword.style.borderColor = red1;
    }

    //third condition - at least one digit
    const digit = /[0-9]/g;
    if (digit.test(password)){
        thirdRequirementHeader.style.color = green;
    }else if(password.length === 0){
        thirdRequirementHeader.style.color = gray3;
    }else{
        thirdRequirementHeader.style.color = red;
        inputPassword.style.borderColor = red1;
    }

    //if all conditions are ok!
    if(firstRequirementHeader.style.color === green && secondRequirementHeader.style.color === green && thirdRequirementHeader.style.color === green) {
        if(inputEmail.name = "reqForInput"){
        firstStepSubmitButton.removeAttribute("disabled","");}
        inputPassword.style.borderColor = blue;
    }

    if(password.length === 0){
        inputPassword.style.borderColor = blue;
    }
}

//reading value of input and passing it to checkingPssword function
inputPassword.addEventListener("keyup", () => {
    const password = inputPassword.value.trim();
    checkPasswordInput(password);
});

//submit for first step
firstFormRegistration.addEventListener('submit', (e) => {
    e.preventDefault();
    containerFirstReg.classList.add("display");
    containerSecondReg.classList.remove("display");
})

////////all actions for first name input

const onMouseOverFirstNameInput = () => {
    if(inputFirstName === document.activeElement && (inputFirstName.name === "reqForInput"|| inputFirstName.name === "noLengthForInput")){
        inputFirstName.style.borderColor = blue;
    }
    else if(inputFirstName.name === "reqForInput" || inputFirstName.name === "noLengthForInput") {
        inputFirstName.style.borderColor = inputHoverGray;
    }
}

const onMouseOutFirstNameInput = () => {
    if(inputFirstName === document.activeElement && (inputFirstName.name === "reqForInput"|| inputFirstName.name === "noLengthForInput")) {
        inputFirstName.style.borderColor = blue;
    } else if(inputFirstName.name === "reqForInput" || inputFirstName.name === "noLengthForInput"){
        inputFirstName.style.borderColor = gray1;
    }
}

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

//checking requirement for name
const checkingFirstName = firstName => {
    secondStepSubmitButton.setAttribute("disabled","")

    if(firstName != "" && (firstName[0].toUpperCase() === firstName[0]) && (firstName.length >= 2)) {
        inputFirstName.style.borderColor = blue;
        inputFirstName.name = "reqForInput";
        if(inputLastName.name = "reqForInput" && inputDate.name === "reqForInput"){
            secondStepSubmitButton.removeAttribute("disabled","")
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

const onMouseOverLastNameInput = () => {
    if(inputLastName === document.activeElement && (inputLastName.name === "reqForInput"|| inputLastName.name === "noLengthForInput")){
        inputLastName.style.borderColor = blue;
    }
    else if(inputLastName.name === "reqForInput" || inputLastName.name === "noLengthForInput") {
        inputLastName.style.borderColor = inputHoverGray;
    }
}

const onMouseOutLastNameInput = () => {
    if(inputLastName === document.activeElement && (inputLastName.name === "reqForInput"|| inputFirstName.name === "noLengthForInput")) {
        inputLastName.style.borderColor = blue;
    } else if(inputLastName.name === "reqForInput" || inputLastName.name === "noLengthForInput"){
        inputLastName.style.borderColor = gray1;
    }
}

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

//checking requirement for last name
const checkingLastName = lastName => {
    secondStepSubmitButton.setAttribute("disabled","");
    if(lastName != "" && (lastName[0].toUpperCase() === lastName[0]) && (lastName.length >= 2)) {
        inputLastName.style.borderColor = blue;
        inputLastName.name = "reqForInput";
        if(inputFirstName.name === "reqForInput" && inputDate.name === "reqForInput"){
            secondStepSubmitButton.removeAttribute("disabled","")
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

const onMouseOverDateInput = () => {
    if(inputDate === document.activeElement && (inputDate.name === "reqForInput"|| inputDate.name === "noLengthForInput")){
        inputDate.style.borderColor = blue;
    }
    else if(inputDate.name === "reqForInput" || inputDate.name === "noLengthForInput") {
        inputDate.style.borderColor = inputHoverGray;
    }
}

const onMouseOutDateInput = () => {
    if(inputDate === document.activeElement && (inputDate.name === "reqForInput")) {
        inputDate.style.borderColor = blue;
    } else if(inputDate.name === "reqForInput"){
        inputDate.style.borderColor = gray1;
    } else if(inputDate.name === "reqNoForInput"){
        inputDate.style.borderColor = red1;
    }
}

const onFocusDateInput = () => {
    if(inputDate.name === "reqForInput") {
        inputDate.style.borderColor = blue;
        inputDate.style.color = gray3;
    }
}

const outFocusDateInput = () => {
    if(inputDate.name === "reqForInput") {
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
            secondStepSubmitButton.removeAttribute("disabled","")
        }
    }else{
        inputDate.style.borderColor = red1;
        inputDate.name = "reqNoForInput";
    }
}

//checking the age
inputDate.onchange = (e) => {
    secondStepSubmitButton.setAttribute("disabled","");
    const dayOfBirth = new Date(e.target.value);
    overEighteen(dayOfBirth);
}

//submit for second step
secondFormRegistration.addEventListener('submit', (e) => {
    e.preventDefault();
    containerSecondReg.classList.add("display");
    containerSucces.classList.remove("display");
})

//submit for third step clean all inputs and reset req  for pass
lastStepSuccesButton.addEventListener('click', (e) => {
    containerSucces.classList.add("display");
    containerFirstReg.classList.remove("display");
    inputEmail.value = "";
    inputPassword.value = "";
    inputFirstName.value = "";
    inputLastName.value = "";
    inputCheckPrivacyPolicy.checked = false;
    inputDate.value = null;
    firstRequirementHeader.style.color = red;
    secondRequirementHeader.style.color = red;
    thirdRequirementHeader.style.color = red;
})