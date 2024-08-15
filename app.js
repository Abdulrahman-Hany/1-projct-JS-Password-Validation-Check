let eye = document.querySelector(".pass-field i");
let inputText = document.querySelector(".pass-field input");
let requirementList = document.querySelectorAll(".requirement-list li");

eye.addEventListener("click", ()=> {
    inputText.type = inputText.type === "password"? "text": "password";
    eye.classList = `fa-solid fa-eye${inputText.type !== "password" ? "" : "-slash"}`
});
let requirements = [
    {regex: /.{8,}/, index: 0},
    {regex: /[0-9]/, index: 1},
    {regex: /[a-z]/, index: 2},
    {regex: /[^A-Za-z0-9]/, index: 3},
    {regex: /[A-Z]/ ,index: 4},
]
inputText.addEventListener("keyup", (e)=>{
    requirements.forEach(ietm =>{
        let vaitItem = ietm.regex.test(e.target.value);
        let requirementItem = requirementList[ietm.index]
        if(vaitItem){
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className ="fa-solid fa-check";
        }else{
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle";
        }
    })
})