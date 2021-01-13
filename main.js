
window.addEventListener('load', function() {

const range = document.querySelector('#range');
const number = document.querySelector('#number');
const value = document.querySelector('.value');
const comm = document.querySelector('.commission');
// range
	range.addEventListener('input', function(){
		var currentValue = range.value;
		number.value = currentValue;
		value.style.height = currentValue + 'px';
        calcCommiss()
	});
// number
	number.addEventListener('input', function(){
        var currentNumber= number.value;
        range.value = currentNumber;
        value.style.height = currentNumber + 'px';
        calcCommiss()
 	});
//commiss
    function calcCommiss() {
        if (range.value < 20) {
            comm.style.height = range.value * 0.02  + 'px';       
        } else if (range.value < 50) {
            comm.style.height = range.value * 0.04  + 'px';  
        } else if (range.value < 75) {
            comm.style.height = range.value * 0.06  + 'px';
        } else if (range.value <= 100) {
            comm.style.height = range.value * 0.08  + 'px';
        }
    }
});

