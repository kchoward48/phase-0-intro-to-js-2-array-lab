// Write your solution here!

const cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const copyCats = [...cats];
    copyCats.push(name);
    return copyCats;
}

function prependCat(name) {
    const copyCats = [...cats];
    copyCats.unshift(name);
    return copyCats;
}

function removeLastCat() {
    const copyCats = [...cats.slice(0,cats.length - 1)]
    return copyCats;
}

function removeFirstCat() { 
    const copyCats = [...cats.slice(1)]
    return copyCats;
}