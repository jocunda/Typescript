let greet: Function;

let greet = () => {
    console.log('hello,world');
}

const add = (a: number, b: number,c?:number|string) => {
    console.log(a + b);
    console.log(c);
}

add(5, 10);
 