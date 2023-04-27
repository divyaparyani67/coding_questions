(function () {
    try {
    throw new Error();
    } catch (x) {
    var x = 1;
    let y = 2;
    console.log(x);
    }
    console.log(x);
    console.log(y);
    })();