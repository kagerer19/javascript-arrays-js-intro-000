var chocolateBars = [
   "snickers", 
     "hundred grand",
      "kitkat",
       "skittles"
  
  ];
  
  // describe('addElementToBeginningOfArray(array, element)', () => {
    it('adds an element to the beginning of an array', () => {
      expect(addElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })
    
  function addElementToBeginningOfArray(array, element) {
    var MovieLine = [1];
      MovieLine.unshift("foo");
       return MovieLine;
  }   
   
   // describe('destructivelyAddElementToBeginningOfArray(array, element)', () => {
    it('adds an element to the beginning of an array', () => {
      expect(destructivelyAddElementToBeginningOfArray([1], 'foo')).to.eql(['foo', 1])
    })
  
  function destructivelyAddElementToBeginningOfArray() {
       var MovieLine = [1]
        MovieLine.unshift('foo');
         return  MovieLine;
   }
    