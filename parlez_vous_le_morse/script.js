const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

let text = 'Hello, World';
let letters = text.split('');
const getLatinCharacterList = (texte) =>{
console.log(letters);
}
getLatinCharacterList(text);


const translateLatinCharacter =(lettre) =>{
    console.log(latinToMorse[lettre])
}
translateLatinCharacter('A');

const encode =(texte) =>{ 
   const characteres = getLatinCharacterList(texte);
   let signMorse = '';
    for(let i = 0; i <characteres.length; i++)

};
encode();