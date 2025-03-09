

const rangeContainer = document.querySelector('.range-container');
const inputRange = rangeContainer.querySelector('input[type="range"]');
const lengthCounter = rangeContainer.querySelector('h1');
const generateBtn = document.querySelector('.generator form button');
const passwordHeading = document.querySelector('.password-container h1');

const handleChange = () => {
    lengthCounter.textContent = inputRange.value;
}

const generatePassword = (passwordLength) => {
    let result = '';
    let characters = '';

    //obtener las opciones que esten seleccionadas
    const useUppercase = document.querySelector('#uppercase').checked;
    const uselowercase = document.querySelector('#lowercase').checked;
    const usenumbers = document.querySelector('#numbers').checked;
    const usesymbols = document.querySelector('#symbols').checked;

    //creamos un conjunto de caracteres a usar en la contrase;a
    if(useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if(uselowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if(usenumbers) characters += '123456789';
    if(usesymbols) characters += '!@#$%^&*()+?>*';

    //si no selecciona ninguna opcion
    if(characters === ''){
        passwordHeading.textContent = 'selecciona almenos una opcion :)';
        return '';
    }

    //generador de contrase;a aleatoria
    for(let i=0; i < passwordLength; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        //Multiplicamos por el largo de la cadena de caracteres para obtener un numero aleatorio ya que en Math.random() nos da un numero entre 0 y 1
    }
    return result
    console.log(result)
};

// funcion que imprima la contrase;a
const PrintPassword = (Event) => {
    Event.preventDefault();//previene que el formulario se envie por defecto
    const password = generatePassword(inputRange.value);//genera la contrase;a
    if(password){
        passwordHeading.textContent = password; //muestra la contrase;a generada
    }
}

//configuracion de los eventos
inputRange.addEventListener('input', handleChange);
generateBtn.addEventListener('click', PrintPassword);