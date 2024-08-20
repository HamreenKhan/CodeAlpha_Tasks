let submit = document.getElementById("submit");
let result = document.getElementById("result");

submit.addEventListener("click", () => {  // Fixed the syntax here (replaced "." with "," in addEventListener)
    let birth = new Date(document.getElementById("birth").value);
    let dateNow = new Date();

    if (birth.getTime()) {
        let difference = dateNow.getTime() - birth.getTime();
        let newAge = new Date(difference);
        let x = Math.abs(newAge.getUTCFullYear() - 1970);  // Use UTCFullYear for consistency
        
        let inDays = Math.floor(difference / (1000 * 3600 * 24));
        result.style.display = "block";
        result.innerHTML = `You are <span>${x}</span> years and <span>${inDays}</span> days old.`;  // Fixed template literals
    }
});
