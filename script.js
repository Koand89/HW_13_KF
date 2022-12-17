

// Task 1

const inp1=document.getElementById("first_value");
const inp2=document.getElementById("second_value");
const oper=document.getElementById("operator");
const Res=document.getElementById("res_calc");

let res=0;

function calc(){
    const frst = +inp1.value;
    const scnd = +inp2.value;
    switch (oper.value){
        case "+":
            res=frst+scnd;
            Res.textContent=res;
            break;
        case "-":
            res=frst-scnd;
            Res.textContent=res;
            break;
        case "*":
            res=frst*scnd;
            Res.textContent=res;
            break;
        case "/":
            res=frst/scnd;
            Res.textContent=res;
            break;
    }
}

// Task 2

const arr=[];
const inp=document.getElementById("item_input");
const printArr=document.getElementById("array_result");
const resSum=document.getElementById("sum_item");
let sum = 0;
function addItem() {
    arr.push(inp.value);
    printArr.textContent = JSON.stringify(arr);
    if(!isNaN(inp.value)){
        resSum.textContent=Number(resSum.textContent)+Number(inp.value);
    }
}


// Task 3

const numInp=document.getElementById("number_input");
const newNum=document.getElementById("reverse_result");

function reverseNumber(){
    let rever=0;
    let lst=0;
    if(!isNaN(numInp.value)){
        let num=numInp.value;
        while(num>0){
            lst=num%10;
            rever=rever*10+lst;
            num=Math.floor(num/10);
        }
        newNum.textContent=rever;
    }else{
        newNum.textContent="Not a number";
    }
}

