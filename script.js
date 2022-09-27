

function calcula(op) {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operacion;
    
    switch (op) {
        case "+":
            operacion = (a, b) => a + b;
            break;
        case "-":
            operacion = (a, b) => a - b;
            break;
        case "/":
            operacion = (a, b) => a * b;
            break;
    }
    document.getElementById("resultado").innerHTML = operacion(num1, num2);
    console.log(num1, op, num2, "=", operacion(num1, num2))
}