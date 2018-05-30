(function(exports) {
  function NoteArray() {
    this.list = []
  }

  NoteArray.prototype.addNoteToArray = function(note) {
    this.list.push(note);
  }

  exports.NoteArray = NoteArray;
})(this);
