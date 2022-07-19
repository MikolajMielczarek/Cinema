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
const inputName = document.querySelector(".input-name")
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

//const for colors inputs - borders - buttons

//adding event listener with function to see password input
btnPass.addEventListener("click", () => {
    if (inputPass.type === "password"){
        inputPass.type = "text";
    } else {
        inputPass.type = "password";
    }
})

const onFocus = () => {
    if(firstReq.style.color != "red" && secondReq.style.color != "red" && thirdReq.style.color != "red") {
        inputPass.style.borderColor = "#2F80ED";
        }
}

const outFocus = () => {
    if(firstReq.style.color != "red" && secondReq.style.color != "red" && thirdReq.style.color != "red")
    {
    inputPass.style.borderColor = "#F7F7F7";
    }
}


//checking that all three password requirements are met and inputs are filled 
const checkingPassword = pass => {
    firstSubBtn.setAttribute("disabled","")
    
    //first condition - at least 8 characters
    if (pass.length >= 8){
        firstReq.style.color = "green";
    }else if (pass.length === 0){
        firstReq.style.color = "#343541";
    } 
     else {
        firstReq.style.color = "red";
        inputPass.style.borderColor = "#EC1115";
    }
    //second condition - at least one letter
    const letter = /[a-zA-Z]/g;
    if (letter.test(pass)){
        secondReq.style.color = "green";
    }else if(pass.length === 0){
        secondReq.style.color = "#343541";
    }else{
        secondReq.style.color = "red";
        inputPass.style.borderColor = "#EC1115";
    }
    //third condition - at least one digit
    const digit = /[0-9]/g;
    if (digit.test(pass)){
        thirdReq.style.color = "green";
    }else if(pass.length === 0){
        thirdReq.style.color = "#343541";
    }else{
        thirdReq.style.color = "red";
        inputPass.style.borderColor = "#EC1115";
    }
    //if all of 3 are ok!
    if(firstReq.style.color === "green" && secondReq.style.color === "green" && thirdReq.style.color === "green") {
        firstSubBtn.removeAttribute("disabled","");
        inputPass.style.borderColor = "#2F80ED";
    }

    if(pass.length === 0){
        inputPass.style.borderColor = "#2F80ED";
    }
}

//reading value of input and passing it to checkingPssword function
inputPass.addEventListener("keyup", () => {
    const pass = inputPass.value.trim();
    checkingPassword(pass);
    console.log(secondReq.style.color)
});

//change email in the last message
const changeEmail = email => {
    h3Email.innerHTML = `We have sent you an email to <span>${email}</span>.<br>
    Make sure to click the link from the message to activate your account.`
}

//save the value of email
inputEmail.addEventListener("keyup", () => {
    const email = inputEmail.value.trim();
    changeEmail(email);
})

//submit for first step
formFirst.addEventListener('submit', (e) => {
    e.preventDefault();
    containerFirstReg.classList.add("display");
    containerSecondReg.classList.remove("display");
})

//change name in last message
const changeName = name => {
    h1Name.textContent = `Good job ${name}!`
}

//save the value of name
inputName.addEventListener("keyup", () => {
    const name = inputName.value.trim();
    changeName(name);
})

//date input color
const inputDateColor = () => {
    if (inputDate.value === '') {
        inputDate.classList.add("input-date");
    } else {
        inputDate.classList.remove("input-date");
    }
}


//validation for birthday date
const overEighteen = dayOfBirth => {
    const eighteenAgo = new Date();
    eighteenAgo.setFullYear(eighteenAgo.getFullYear() - 18);
    if (dayOfBirth <= eighteenAgo) {
        secondSubBtn.removeAttribute("disabled","");
        inputDate.style.color = "#343541";
    }else{
        inputDate.style.color = "red";
    }
}

//checking the age
inputDate.onchange = (e) => {
    inputDateColor();
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
    inputName.value = "";
    inputLastName.value = "";
    inputCheck.checked = false;
    inputDate.value = null;
    firstReq.style.color = "red";
    secondReq.style.color = "red";
    thirdReq.style.color = "red";
})