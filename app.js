const containerFirstReg = document.querySelector(".registration-first-step");

const formFirst = document.querySelector(".first-form")
const imgPass = document.querySelector(".registration-first-step img")
const inputPass = document.querySelector(".input-password")
const inputEmail = document.querySelector(".input-email")
const firstReq = document.querySelector(".first-req")
const secondReq = document.querySelector(".second-req")
const thirdReq = document.querySelector(".third-req")
const firstSubBtn = document.querySelector(".first-step-sub-btn")



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
})


