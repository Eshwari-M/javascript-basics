const person = {
    firstName: "Vuk",
    lastName: "Maroni",
    age: 34
};

const handler = {
    get(target, prop) {
        console.log(`Read: ${prop}`);
        return target[prop];
    },

    set(target, prop, value) {
        console.log(`Setting ${prop} to ${value}`);
        target[prop] = value;
    }
};

const pperson = new Proxy(person, handler);
console.log(pperson.firstName);
pperson.age=35;
console.log(pperson.age);