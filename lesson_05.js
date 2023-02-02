"use strict"

function makeBuffer() {
  let buffer = '';
  
  function bufferAdd(value) {
    buffer += String(value);
  }

  function bufferClear() {
    buffer = '';
  }

  function bufferPrint() {
    console.log(buffer);
  }

  return {
    add: bufferAdd,
    clear: bufferClear,
    print: bufferPrint
  }
}

var buffer = makeBuffer();

buffer.add(5);
buffer.print();
buffer.clear();
buffer.print();

