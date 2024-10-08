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

  const atIndex = function returnAtIndex(list, reqIndex, currentIndex = 0) {
    if (currentIndex === 0) {
      if (reqIndex < 0) return 'Enter a non-negative index';

      const listSize = size(list);
      if (reqIndex >= listSize) return 'Index exceeds list size';
    }

    if (reqIndex === currentIndex) {
      return list;
    }

    return atIndex(list.nextNode, reqIndex, currentIndex + 1);
  };

  const pop = function removeLastNode(list) {
    // List with only head and tail
    if (list.nextNode.nextNode === null) return;

    if (list.nextNode.nextNode.nextNode === null) {
      const tail = list.nextNode.nextNode;
      list.nextNode = tail;
      return;
    }

    pop(list.nextNode);
    return;
  };

  const contains = function listContains(list, value) {
    if (list.value === value) return true;
    if (list.nextNode === null) return false;

    return contains(list.nextNode, value);
  };

  const find = function findValueIndex(list, value, index = 0) {
    if (list.value === value) return index;
    if (list.nextNode === null) return 'Not found';

    return find(list.nextNode, value, index + 1);
  };

  const validateIndex = (list, reqIndex) => {
    if (reqIndex < 0) return 'Enter a non-negative index';
    if (reqIndex === 0) return 'Cannot modify head node';

    const listSize = size(list);
    if (reqIndex === listSize - 1) return 'Cannot modify tail node';
    if (reqIndex >= listSize) return 'Index exceeds list size';

    return null;
  };

  const insert = function insertAtIndex(list, value, reqIndex, index = 0) {
    if (index === 0) {
      const validationError = validateIndex(list, reqIndex);
      if (validationError !== null) return validationError;
    }

    if (index === reqIndex - 1) {
      const nextNodeHolder = list.nextNode;
      const newNode = node(value, nextNodeHolder);
      list.nextNode = newNode;
      return;
    }

    return insert(list.nextNode, value, reqIndex, index + 1);
  };

  const removeAt = function removeAtIndex(list, reqIndex, index = 0) {
    if (index === 0) {
      const validationError = validateIndex(list, reqIndex);
      if (validationError !== null) return validationError;
    }

    if (index === reqIndex - 1) {
      const remainingNodes = list.nextNode.nextNode;
      list.nextNode = remainingNodes;
      return;
    }

    return removeAt(list.nextNode, reqIndex, index + 1);
  };

  return {
    list,
    append,
    print,
    prepend,
    size,
    returnHead,
    returnTail,
    atIndex,
    pop,
    contains,
    find,
    insert,
    removeAt,
  };
}
