// interface
// interface isPerson{
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;
// }

// const me: isPerson = {
//     name: 'shaun',
//     age: 30,
//     speak(text: string): void{
//         console.log(text);
//     },
//     spend(amount: number): number{
//         console.log('I spent', amount);
//         return amount;
//     },

// };

// const greetPerson = (person: isPerson) => {
//     console.log('hello', person.name);
// }

// greetPerson(me);

// console.log(me);
import { Payment } from './classes/payment.js';
import { Invoice } from './classes/invoice.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplate.js';







// const anchor = document.querySelector('a')!;

// console.log(anchor.href);

// const form = document.querySelector('form')!;

const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }

    list.render(doc,type.value, 'end');
});

// generics
const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}
let docOne = addUID({ name: 'yoshi', age: 40 });

console.log(docOne.age);


// ENNUMS
enum ResourceType {Book, Author, Film, Director, Person}



// with interface
interface Resource <T>{
    uid: number;
    resourceType: number;
    data: T;
}

const docThree: Resource<object>= {
    uid: 1,
    resourceType: ResourceType.Book,
    data:{name:'shaun'}
}

const docFour: Resource<string[]>={
    uid:2,
    resourceType:ResourceType.Person,
    data:['data','bread','milk']
}

console.log(docThree, docFour);
