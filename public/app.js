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
import { ListTemplate } from './classes/ListTemplate.js';
// const anchor = document.querySelector('a')!;
// console.log(anchor.href);
// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form');
// console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// tuples
let arr = ['ryu', 25, true];
let tup = ['ryu', 25, true];
// generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne.age);
// ENNUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["Book"] = 0] = "Book";
    ResourceType[ResourceType["Author"] = 1] = "Author";
    ResourceType[ResourceType["Film"] = 2] = "Film";
    ResourceType[ResourceType["Director"] = 3] = "Director";
    ResourceType[ResourceType["Person"] = 4] = "Person";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 1,
    resourceType: ResourceType.Book,
    data: { name: 'shaun' }
};
const docFour = {
    uid: 2,
    resourceType: ResourceType.Person,
    data: ['data', 'bread', 'milk']
};
console.log(docThree, docFour);
