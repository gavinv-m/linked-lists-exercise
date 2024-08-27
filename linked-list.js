import node from './node.js';

// Exports to main.js
export default function linkedList() {
  const tail = { nextNode: null };
  const head = { nextNode: tail };
  const list = head;
  let lastElement = head;

  const append = function appendValue(value) {
    const newNode = node(value, tail);
    lastElement.nextNode = newNode;
    lastElement = newNode;
  };

  const prepend = function prependValue(value) {
    const headNextNodeHolder = head.nextNode;
    const newNode = node(value, headNextNodeHolder);
    head.nextNode = newNode;
  };

  const print = function printList(list) {
    if (list.nextNode === null) {
      process.stdout.write('null\n');
      return;
    }

    if (list.hasOwnProperty('value') === true) {
      process.stdout.write(`( ${list.value} ) -> `);
    }

    print(list.nextNode);
    return;
  };

  const size = function returnSize(list) {
    if (list.nextNode === null) {
      return 1;
    }
    return 1 + size(list.nextNode);
  };

  const returnHead = function returnHeadNode() {
    return head;
  };

  const returnTail = function returnTailNode() {
    return tail;
  };

  return {
    list,
    append,
    print,
    prepend,
    size,
    returnHead,
    returnTail,
  };
}
