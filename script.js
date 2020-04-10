// 集中管理计算器的状态
var calculator = {
    displayValue: "0",
    keyPressed: "",
    operatorPressed: "",
    previousNum: [],
    currentNumber: [],
    result: [],
    // 按需求添加其他属性
};

// 绑定各种按键触发
function bindKeyPress() {
    // 获取按键
    window.onclick = (key) => {
        calculator.keyPressed = key.target.getAttribute("value");
        if ((calculator.keyPressed != null) && (key.target.getAttribute("id") != "display")) {
            // 给按键添加点击事件
            if (Number.isInteger(Number(calculator.keyPressed)) || (calculator.keyPressed == ".")) {
                calculator.currentNumber += calculator.keyPressed
                handleDigit(calculator.currentNumber)
            }
            if (calculator.keyPressed === "clear") {
                handleClear();
            }
            if (key.target.getAttribute("class") === "operator") {
                calculator.operatorPressed = calculator.keyPressed;
                calculator.previousNum = calculator.currentNumber;
                calculator.currentNumber = [];
            }
            if (key.target.getAttribute("class") === "equal") {
                handleOperator(calculator.operatorPressed);
                handleEqual();
            }
            if (key.target.getAttribute("class") === "clock") {
                handleClock();
            }
        }
        //return calculator.keyPressed;
    };
}

// 处理数字点击
function handleDigit(value) {
    // 获取当前显示的数字
    //var currentNumber = value;
    // 更新数字
    calculator.currentNumber = value;
    // 更新面板
    document.getElementsByTagName("input")[0].setAttribute("value", value);
}

// 处理归零点击
function handleClear() {
    calculator.displayValue = "0";
    calculator.currentNumber = [];
    document.getElementsByTagName("input")[0].setAttribute("value", calculator.displayValue);
}

// 处理等号点击
function handleEqual() {
    //console.log("previous is ", calculator.previousNum);
    //console.log("current is ", calculator.currentNumber);
    handleDigit(calculator.result)
}

// 处理运算符号点击
function handleOperator(operator) {
    //console.log(calculator.operatorPressed);
    if (operator === "+") {
        calculator.result = Number(calculator.previousNum) + Number(calculator.currentNumber);
        //console.log("current is ", calculator.result);
    } else if (operator === "-") {
        calculator.result = calculator.previousNum - calculator.currentNumber;
    } else if (operator === "*") {
        calculator.result = calculator.previousNum * calculator.currentNumber;
    } else if (operator === "/") {
        calculator.result = calculator.previousNum / calculator.currentNumber;
    }
}

// 处理小数点点击
function handleDecimal() {
    // 逻辑处理
    // 更新面板
}

// 处理面板更新
function updateDisplay() {
    // 获取面板元素
    // 更新显示内容
}

// 处理时钟点击
function handleClock() {
    var date = new Date();
    var minute = date.getMinutes();
    var hour = date.getHours();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    var modifyYear = year.toString().slice(-2);
    var fullTime = hour + ":" + minute + " " + day + "/" + month + "/" + modifyYear;
    document.getElementsByTagName("input")[0].setAttribute("value", fullTime);
}

//function invoking
bindKeyPress();