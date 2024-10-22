const button =document.querySelector('button')

    



button.addEventListener('click',displaystats )
function displaystats() {
    const input =document.getElementById('input')
    const city=input.options[input.selectedIndex].value
    let population=0, literacyRate=0, language=''
    switch (city) {
        case 'bengaluru':
            population=1000000;
            literacyRate=40;
            language='kannada'; 
            break;
            case 'chennai':
            population=5000000;
            literacyRate=90;
            language='Tamil'; 
            break;
            case 'Mumbai':
            population=5000000;
            literacyRate=80;
            language='Marathi'; 
            break;
            case 'Delhi':
            population=3000000;
            literacyRate=50;
            language='Hindhi'; 
            break;
    
    }


    let text=`The indian ${city} city  is heigher population ${population} in the world ${language} to ${literacyRate}% `
    console.log(text);
    let resultdiv=document.createElement('div')
resultdiv.id='result'
document.querySelector('.container').appendChild(resultdiv)
document.getElementById('result').innerHTML = text
   
}
