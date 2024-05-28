// 6655d44fdd437fc79c0e9dd0

const txt = document.getElementById('txt');
const btn = document.getElementById('btn');
const gender = document.getElementById('gender');

txt.addEventListener('change',handleChange);

var names =" ";
function handleChange(event){
    names = event.target.value;
    console.log(names);
};

btn.addEventListener('click',handleClick);

function handleClick() {
    if (names.trim() === "") {
        alert("Please enter a name");
    } else {
        fetch(`https://api.genderapi.io/api/?name=${names}&key=6655d44fdd437fc79c0e9dd0`)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.gender) {
                    gender.style.display="block";
                    gender.textContent = `${names} is ${data.gender} with ${data.probability} certainity.`;
                } else {
                    gender.style.display="block";
                    gender.textContent = `Could not predict gender for ${names}.`;
                }
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                gender.textContent = "There was an error predicting the gender.";
            });
    }
}
