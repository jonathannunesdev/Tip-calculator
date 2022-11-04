let bill = document.querySelector('.container--left #bill');
let people = document.querySelector('.container--left .nop');
let custom =  document.querySelector('#tip--input');
let resetBtn =  document.querySelector('#reset');
let tipAmount = document.querySelector('#tip--amount--value');
let totalPerson = document.querySelector('#total--value');
let negative = document.querySelector('.nop');
let negativeInfo = document.querySelector('.negative--info');

let calcPerson = 0;
let tipValue = 0;

reset();
document.querySelectorAll('.tip').forEach((tip) => {
    tip.addEventListener('click', (e) => {
        e.preventDefault(); 
        
        custom.setAttribute('data-tip',`${custom.value}`);
        tipValue = tip.getAttribute('data-tip');
        calcPerson = Number(bill.value) / Number(people.value);
        
        if(people.value > 0){
            checkStatus();
            let tipPerson = tipCalc(tipValue);
            let calcPersonTotal = calcPerson + tipPerson;
            tipAmount.innerHTML = `$${tipPerson.toFixed(2)}`;
            totalPerson.innerHTML = `$${calcPersonTotal.toFixed(2)}`;      
        } else{
            checkStatus();
        }
    });
});

function tipCalc(tipValue){
    let CalcTip = Number(bill.value * Number(tipValue / 100) / Number(people.value));
    return CalcTip
};

function checkStatus(){
    if(people.value > 0){
        negative.classList.remove('negative');
        negativeInfo.style.display = 'none';
    } else {
        negative.classList.add('negative');
        negativeInfo.style.display = 'block';
    };
};

function reset(){
    resetBtn.addEventListener('click', (e) => {
        negative.classList.remove('negative');
        negativeInfo.style.display = 'none';
        tipAmount.innerHTML = '$0.00'
        totalPerson.innerHTML = '$0.00'
        document.querySelectorAll('input').forEach((inputs) =>{
            inputs.value = '';
        })
    });
};