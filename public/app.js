"use strict";
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes Rp${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on mario website', 250);
const invTwo = new Invoice('luigi', 'work on luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    inv.client = 'something else';
    console.log(inv.client, inv.amount, inv.format());
});
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
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
