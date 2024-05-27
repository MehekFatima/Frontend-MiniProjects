var btn = document.getElementById('btn');
var mng = document.getElementById('meaning');
var txt = document.getElementById('txt');
var icon = document.getElementById('icon');

var word =' ';
const handleChange = (e)=>{
    word = e.target.value;
}

txt.addEventListener('change',handleChange);

btn.addEventListener('click',handleSumbit);

function handleSumbit(){

    let p = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    p.then((respone)=>{
        return respone.json();
    }).then((data)=>{
        if (data && data.length > 0) {
            let definition = data[0].meanings[0].definitions[0].definition;
            mng.style.display ="block";
            mng.style.backgroundColor = "bisque";
            mng.style.color = "black";
            mng.textContent = definition;
        } else {
            mng.style.display ="block";
            mng.style.fontFamily = "Sevillana, cursive";
            mng.style.color = "red";
            mng.style.letterSpacing = "5px";
            mng.style.backgroundColor = "bisque";
            mng.textContent = 'No definition found.';
        }
    }).catch((error)=>{
        console.log(`${error} fetching data`);
    })
};

icon.addEventListener('click',handleVoice);
icon.addEventListener('click', handleVoice);

function handleVoice() {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        .then((response) => response.json())
        .then((data) => {
            if (data && data.length > 0) {
                let audioUrl= data[0].phonetics[0].audio;
                    let audio = new Audio(audioUrl);
                    audio.play();
            } 
        })
        .catch((error) => {
            console.log(`Error fetching audio: ${error}`);
        });
}
