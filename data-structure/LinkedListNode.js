export default class LinkedListNode {
  constructor(data, tail = null) {
    this.data = data;
    this.tail = tail;
  }

  toString(callback) {
    return (callback) ? callback(this.value) : `${this.value}`;
  }
}
