const imgPass = document.querySelector(".registration-first-step img")
const inputPass = document.querySelector(".input-password")



//adding event listener with functionto see password input
imgPass.addEventListener("click", () => {
    if (inputPass.type === "password"){
        inputPass.type = "text";
    } else {
        inputPass.type = "password";
    }
})

//check if all of 3 conditions for pass are 