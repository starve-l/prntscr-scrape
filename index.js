let char = "abcdefghijklmnopqrstuvwxyz0123456789";

let randomImage = () => {
    let str = "";

    for (let i = 0; i < 6; i++) {
        str += char.charAt(Math.floor(Math.random() * char.length));
    }
    return `https://prnt.sc/${str}`;
};

console.log(randomImage());
