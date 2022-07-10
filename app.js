const containerFirstReg = document.querySelector(".first-step");
const containerSecondReg = document.querySelector(".second-step");
const containerSucces = document.querySelector(".success-message")

const formFirst = document.querySelector(".first-form")
const formSecond = document.querySelector(".second-form")
const imgPass = document.querySelector(".first-step img")

const inputPass = document.querySelector(".input-password")
const inputEmail = document.querySelector(".input-email")
const inputName = document.querySelector(".input-name")
const inputLastName = document.querySelector(".input-last-name")
const inputDate = document.querySelector(".input-date")
const inputCheck = document.querySelector(".input-check")

const firstReq = document.querySelector(".first-req")
const secondReq = document.querySelector(".second-req")
const thirdReq = document.querySelector(".third-req")

const firstSubBtn = document.querySelector(".first-step-sub-btn")
const secondSubBtn = document.querySelector(".second-step-sub-btn")

const h2Name = document.querySelector(".h2-name")
const h4Email = document.querySelector(".h4-email")

const lastBtn = document.querySelector(".last-btn")


//adding event listener with functionto see password input
imgPass.addEventListener("click", () => {
    if (inputPass.type === "password"){
        inputPass.type = "text";
    } else {
        inputPass.type = "password";
    }
})

//checking that all three password requirements are met and inputs are filled 
const checkingPassword = pass => {
    firstSubBtn.setAttribute("disabled","")
    //first condition - at least 8 characters
    if (pass.length >= 8){
        firstReq.style.color = "green";
    }else{
        firstReq.style.color = "red";
    }
    //second condition - at least one letter
    const letter = /[a-zA-Z]/g;
    if (letter.test(pass)){
        secondReq.style.color = "green";
    }else{
        secondReq.style.color = "red";
    }
    //second condition - at least one digit
    const digit = /[0-9]/g;
    if (digit.test(pass)){
        thirdReq.style.color = "green";
    }else{
        thirdReq.style.color = "red";
    }
    //if all of 3 are ok!
    if(firstReq.style.color === "green" && secondReq.style.color === "green" && thirdReq.style.color === "green") {
        firstSubBtn.removeAttribute("disabled","");
        inputPass.style.outline = "0px"
    }
}

//reading value of input and passing it to checkingPssword function
inputPass.addEventListener("keyup", () => {
    const pass = inputPass.value.trim();
    checkingPassword(pass);
});

//change email in the very last message
const changeEmail = email => {
    h4Email.textContent = `We have sent you an email to ${email}.
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
    h2Name.textContent = `Good job <span>${name}</span>!`
}

//save the value of name
inputName.addEventListener("keyup", () => {
    const name = inputName.value.trim();
    changeName(name);
})

//validation for birthday date
const overEighteen = dayOfBirth => {
    const eighteenAgo = new Date();
    eighteenAgo.setFullYear(eighteenAgo.getFullYear() - 18);
    if (dayOfBirth <= eighteenAgo) {
        secondSubBtn.removeAttribute("disabled","");
    }else{
        alert("You should be minimum 18 years old - because of that register button is disabled");
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

//submit for third step
lastBtn.addEventListener('click', (e) => {
    containerSucces.classList.add("display");
    containerFirstReg.classList.remove("display");
    inputEmail.value = "";
    inputPass.value = "";
    inputName.value = "";
    inputLastName.value = "";
    inputCheck.checked = false;
    inputDate.value = null;
})