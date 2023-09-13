function getInputValue(id){
    const inputElement = document.getElementById(id);
    const inputString = inputElement.value;
    const inputNumber = parseFloat(inputString);
    return inputNumber;
}
function setElementInnerText(elementId,result){
    const element = document.getElementById(elementId);
    element.innerText = result;
}
function validateIfNotNumber(){
    alert("please input a number");
}
function makeInputClear(id){
    const element = document.getElementById(id);
    element.value = "";
}
function calculateTriangleArea(){
    const base = getInputValue("triangle-base");
    const height = getInputValue("triangle-height");
    
    const result = 0.5 * base * height;

    setElementInnerText("triangle-result",result);
    makeInputClear("triangle-base");
    makeInputClear("triangle-height");
}
function calculateRectangleArea(){
    const width = getInputValue("rectangle-width");
    const height = getInputValue("rectangle-length");
    const result = width * height;
    setElementInnerText("rectangle-result",result);
}