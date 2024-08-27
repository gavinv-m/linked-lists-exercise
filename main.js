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

// List size
console.log(`${list.size(list.list)} including head and tail nodes`);

// Return head and tail
console.log(list.returnHead());
console.log(list.returnTail());

// Node at index
console.log(list.atIndex(list.list, -1));
console.log(list.atIndex(list.list, 12));
console.log(list.atIndex(list.list, 1));

// Pop
list.print(list.list);
list.pop(list.list);
list.print(list.list);

// Contains
console.log(list.contains(list.list, 'cat'));
console.log(list.contains(list.list, 'turtle'));

// Find
console.log(list.find(list.list, 'cat'));
console.log(list.find(list.list, 'turtle'));
