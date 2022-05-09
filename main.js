const d = document;

const button = d.querySelector('.iniciar');

const hablar = (texto) => {
    speechSynthesis.speak(new SpeechSynthesisUtterance
        (texto))
}

let texto = 'hola mundo mi nombre es wilmer'

button.addEventListener('click', ()=>{
    hablar(texto)
})