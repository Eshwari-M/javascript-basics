function* numberGenerator(){
    yield 1000;
    yield 2000;
    yield 3000;
}

const gen = numberGenerator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());