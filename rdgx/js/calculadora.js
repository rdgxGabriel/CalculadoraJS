//calculadora em java script >_<
function soma(){
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;

    let soma= parseFloat(numero1) + parseFloat(numero2);    
    return document.getElementById('resultado').value = soma;
}
function subtrai(){
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;

    let subtrai= parseFloat(numero1) - parseFloat(numero2);    
    return document.getElementById('resultado').value = subtrai;
}
function multiplica(){
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;

    let multiplica= parseFloat(numero1) * parseFloat(numero2);    
    return document.getElementById('resultado').value = multiplica;
}
function divide(){
    let numero1 = document.getElementById('num1').value;
    let numero2 = document.getElementById('num2').value;

    let divide= parseFloat(numero1) / parseFloat(numero2);    
    return document.getElementById('resultado').value = divide;
}