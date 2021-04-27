/* new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Everything went well");
        reject("Something went wrong");
    }, 4000);
}).then(message => {
    console.log(message);
}).catch(errorMessage => {
    console.log(errorMessage);
}); */

new Promise((resolve, reject) => {
    resolve("Happy days are starting.");
}).then(result => {
    console.log(result);
});

function myPromiseFunction() {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("Everything went well");
            }, 3000);
        } catch (error) {
            reject("Not every promise works out this way");
        }
    });
}

/* let myPromise = myPromiseFunction();
myPromise
.then(message => console.log(message))
.catch(error => console.log(error)); */

(async function asyncCall() {
    const message = await myPromiseFunction();
    console.log(message);
})();


