//It was the fastes way for me to use only JS not react because I am reapiting all material from JS (courses, notes and projects) and the next one is react - now is Monday(11.07) late night and I will try to solve all with react too, hope to until Wednesday(13.07 03:00pm) I will manage to send also react app.
//I have the last days in my current job (last day 15.07) and I have to delegate all of duties, so I am not sure if I can do it until then, hope that the solution below will be sufficient in case I would not manage :)

//containers for steps
const containerFirstReg = document.querySelector(".first-step");
const containerSecondReg = document.querySelector(".second-step");
const containerSucces = document.querySelector(".success-message")

//forms
const formFirst = document.querySelector(".first-form")
const formSecond = document.querySelector(".second-form")

//img to show password
const imgPass = document.querySelector(".first-step img")

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



//adding event listener with function to see password input
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