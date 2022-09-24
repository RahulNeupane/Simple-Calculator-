const display1El = document.querySelector('.display-1')
const display2El = document.querySelector('.display-2')
const numbersEl = document.querySelectorAll('.number')
const operatorEl = document.querySelectorAll('.operator')
const equalEl = document.querySelector('.equal')
const clearAllEl = document.querySelector('.clear-all')
const clearLastEl = document.querySelector('.clear-last-entry')

let dis1Num = ''
let dis2Num = ''
let result = ''
let lastOperation = ''
let haveDot = false

numbersEl.forEach((number)=>{
    number.addEventListener('click',(e)=>{
        if(e.target.innerText==="." && !haveDot){
            haveDot=true;
        } else if(e.target.innerText==='.' && haveDot) return
        dis2Num += e.target.innerText
        display2El.innerText=dis2Num
    })
})

operatorEl.forEach((operator)=>{
    operator.addEventListener('click',(e)=>{
        if(!dis2Num) return
        haveDot = false
        const opeartorName = e.target.innerText
        if(dis1Num && dis2Num &&lastOperation){
            mathOperation()
        }else{
            result = parseFloat(dis2Num)
            console.log(result)
        }
        clearVar(opeartorName)
        lastOperation = opeartorName
    })
})

equalEl.addEventListener('click',()=>{
    if(!dis2Num || !dis1Num) return
    haveDot = false
    mathOperation()
    clearVar()
    display2El.innerText = result
    dis2Num = result
    dis1Num = ''
})

clearAllEl.addEventListener('click',()=>{
    dis1Num = ''
    dis2Num = ''
    display1El.innerText = '0'
    display2El.innerText = '0'
    result = ''
})

clearLastEl.addEventListener('click',()=>{
    if(!dis1Num) return
    dis2Num = dis2Num.slice(0,-1)
    display2El.innerText= dis2Num
})

function mathOperation(){
    if(lastOperation=== 'x'){
        result = parseFloat(result) * parseFloat(dis2Num)
    }else if (lastOperation === '+'){
        result = parseFloat(result) + parseFloat(dis2Num)
    }else if(lastOperation==='-'){
        result = parseFloat(result) - parseFloat(dis2Num)
    }else if(lastOperation==='/'){
        result = parseFloat(result) / parseFloat(dis2Num)
    }else if(lastOperation==='%'){
        result = parseFloat(result) % parseFloat(dis2Num)
    }
    console.log(result)
}


function clearVar(name = ''){
    dis1Num += dis2Num + ' ' + name + ' '
    display1El.innerText = dis1Num
    dis2Num = ''
    display2El.innerText = ''
}


