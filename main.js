import linkedList from './linked-list.js';

const list = linkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
list.print(list.list);

list.prepend('elephant');
list.prepend('lion');
list.prepend('zebra');
list.prepend('bear');
list.print(list.list);

console.log(`${list.size(list.list)} including head and tail nodes`);
