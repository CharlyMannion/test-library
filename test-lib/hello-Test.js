function testHelloPrintsHello() {
  var hello = new Hello ();
  assert.isEqual(hello.printHello, "Hello");
};

testHelloPrintsHello();
