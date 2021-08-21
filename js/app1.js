const memory1 = 0;
const memory2 = 2 + 0;
menoryTotal.innerText = memory1 + memory2;
function updateMemoryNumber(memory, price, isIncreasing) {

    const memoryInput = document.getElementById(memory + '-number')
    let memoryNumber = memoryInput.value;
    if (isIncreasing == true) {
        memoryNumber = parseInt(memoryNumber) + 1;

    }
    else if (memoryNumber > 0) {
        memoryNumber = parseInt(memoryNumber) - 1;
    }
    memoryInput.value = memoryNumber;


}
const memoryTotal = document.getElementById(memory + '-total')
memoryTotal.innerText = memoryNumber * price;

calculateTotal();

function getInputValue(product) {
    const memoryInput = document.getElementById(memory, '-number');
    const memoryNumber = parseInt(mackbookInput.value);
    return memoryNumber;


    function calculateTotal() {
        const bestTotal = getInputValue('priceTotal') * 1299;
        const costTotal = getInputValue('cost') * 59;
        const subTotal = phoneTotal + caseTotal;
        const tax = subTotal / 10;
        const totalPrice = subTotal + tax;

// function updateProductNumber(product, price, isIncreasing) {
//     const productInput = document.getElementById(product + '-number');
//     let productNumber = productInput.value;


//     if (isIncreasing == true) {
//         productNumber = parseInt(productNumber) + 1;

//     }
//     else if (productNumber > 0) {
//         productNumber = parseInt(productNumber) - 1;
//     }
//     productInput.value = productNumber;

//     //update  total
//     const productTotal = document.getElementById(product + '-total')
//     productTotal.innerText = productNumber * price;

//     // calculate total
//     calculateTotal();

// }

// function getInputValue(product) {
//     const productInput = document.getElementById(product, '-number');
//     const productNumber = parseInt(phoneInput.value);
//     return productNumber;

// }
// function calculateTotal() {
//     const phoneTotal = getInputValue('phone') * 1219;
//     const caseTotal = getInputValue('case') * 59;
//     const subTotal = phoneTotal + caseTotal;
//     const tax = subTotal / 10;
//     const totalPrice = subTotal + tax;

//     //update on the html
//     document.getElementById('sub-total').innerText = subTotal;
//     document.getElementById('tax-amount').innerText = tax;
//     document.getElementById('total-price').innerText = totalPrice;


// }


// //phone increase decrease events 
// document.getElementById('phone-plus').addEventListener('click', function () {
//     updateProductNumber('phone', 1219, true)

// });

// document.getElementById('phone-minus').addEventListener('click', function () {
//     updateProductNumber('phone', 1219, false);

// });




// // handle case increase decrease events
// document.getElementById('case-plus').addEventListener('click', function () {
//     updateProductNumber('case', 59, true);

//     // const productInput = document.getElementById('case-number');
//     // const productNumber = productInput.value;
//     //productInput.value = parseInt(productNumber) + 1;


//     // console.log(productNumber);
// });

// document.getElementById('case-minus').addEventListener('click', function () {
//     updateProductNumber('case', 59, false);
//     // const productInput = document.getElementById('case-number');
//     // const productNumber = productInput.value;
//     // productInput.value = parseInt(productNumber) - 1;



// });