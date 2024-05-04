const makeChange = (c) => {
    const quarterValue = 25;
    const dimeValue = 10;
    const nickelValue = 5;
    const pennyValue = 1;

    let quarters = Math.floor(c / quarterValue);
    c %= quarterValue;

    let dimes = Math.floor(c / dimeValue);
    c %= dimeValue;

    let nickels = Math.floor(c / nickelValue);
    c %= nickelValue;

    let pennies = c;

    return { "q": quarters, "d": dimes, "n": nickels, "p": pennies };
};

// Example usage
console.log(makeChange(47)); // { "q": 1, "d": 2, "n": 0, "p": 2 }
console.log(makeChange(24)); // { "q": 0, "d": 2, "n": 0, "p": 4 }
