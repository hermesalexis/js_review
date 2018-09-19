// Promises
const applyDiscount = new Promise((resolve, reject) => {
    setTimeout( () => {
        let discount = true;

        if(discount) {
            resolve('Discount applied');
        }else{
            reject('Discount is not applied');
        }
    }, 3000);
});

applyDiscount.then(result => {
    console.log(result);
}).catch(error => {
    console.log(error);
});