const icons = document.querySelectorAll('.icon');
const answers = document.querySelectorAll('.ans');

icons.forEach((icon, index) => {
    icon.addEventListener("click", function() {
        const answer = answers[index];
        if (answer.style.display === "none" || answer.style.display === "") {
            answer.style.display = "block";
            icon.setAttribute("name", "chevron-up-circle-outline");
        } else {
            answer.style.display = "none";
            icon.setAttribute("name", "chevron-down-circle-outline");
        }
    });
});
