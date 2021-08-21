// const bestPrice = 1299;
// const memory1 = 0;
// const memory2 = 180;

// const storage1 = 0;
// const storage2 = 100;
// const storage3 = 180;
// const totalPrice1 = memory2 + bestPrice;



// const shippingFirst = 0;
// const shippingSecond = 20;
// const totalPrice = 1299;



//memory update 
// unified 8gb memory change 
document.getElementById('memory-one').addEventListener('click', function () {
    const memory1 = document.getElementById('memory-one');
    const cost1 = document.getElementById('extra-cost');
    cost1.innerText = '$0';

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = '$1299';


    // const totalPrice = bestPrice + memory1 + storage1 + shippingFirst;
    // // const totalPrice2 = bestPrice + memory1 + storage2 + shippingFirst;
    // // const totalPrice3 = bestPrice + memory2 + storage2 + shippingSecond;
    // console.log(totalPrice);

});

//unified 16gb memory change 
document.getElementById('memory-two').addEventListener('click', function () {
    const memory2 = document.getElementById('memory-two');
    const cost2 = document.getElementById('extra-cost');
    cost2.innerText = '$180';
    // const cost2PriceText = extraCost.innerText;
    // const cost2Price = parseFloat(cost2PriceText);




    // const totalPrice = document.getElementById('total-price');
    // const memoryText = totalPrice.innerText;
    // const bestPrice = parseFloat(memoryText);
    // totalPrice.innerText = cost2Price + bestPrice;

});

// storage update
//256gb update 
document.getElementById('first-storage').addEventListener('click', function () {
    const storage1 = document.getElementById('first-storage');
    const costOne = document.getElementById('storage-cost');
    costOne.innerText = '$0';

});

// storage two update
document.getElementById('second-storage').addEventListener('click', function () {
    const storage2 = document.getElementById('second-storage');
    const costTwo = document.getElementById('storage-cost');
    costTwo.innerText = '$100';

});

// storage three update
document.getElementById('third-storage').addEventListener('click', function () {
    const storage3 = document.getElementById('third-storage');
    const costThree = document.getElementById('storage-cost');
    costThree.innerText = '$180';

});

//shipping cost update
document.getElementById('shipping-1').addEventListener('click', function () {
    const shippingFirst = document.getElementById('shipping-1');
    const freeShipping = document.getElementById('delivery-charge');
    freeShipping.innerText = '$0';

});

document.getElementById('shipping-2').addEventListener('click', function () {
    const shippingSecond = document.getElementById('shipping-2');
    const costlyShipping = document.getElementById('delivery-charge');
    costlyShipping.innerText = '$20';

});







// function calculate() {
//     const price = 1299;
//     const discount = 20;
//     // const afterDiscount = 0;
//     /*    price = Number(document.discountCalculator.price.value);*/
//     numberOfMembers = Number(document.discountCalculator.value);
//     discount = Number(document.discountCalculator.stevekaku.value);


//     afterDiscount = price - (price * discount / 100);


//     /*   document.discountCalculator.price.value=price.toFixed(2);*/
//     document.discountCalculator.discount.value = discount.toFixed(2);
//     document.discountCalculator.afterDiscount.value = afterDiscount.toFixed(2);

// }















