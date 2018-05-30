function testAddNoteToNoteArray() {
  var note = new Note("test text")
  var noteArray = new NoteArray()
  noteArray.addNotetoArray('test');
  assert.isTrue(noteArray.list.length === 1)
};
