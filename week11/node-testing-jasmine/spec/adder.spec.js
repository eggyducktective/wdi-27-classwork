const adder = require('../lib/adder');

// similar to before block in RSPEC, set up the test each time
beforeEach(() => {
  // when add spyOn, it breaks the function 'add', need to add and.callThrough
  spyOn(adder, 'add').and.callThrough();
  spyOn(adder, 'check').and.callThrough();
});

describe('Adder module', () => {

  it('should export the object', () => {
    expect( typeof adder ).toBe( 'object' );
  });

  it('should add two number correctly', () => {
    // Arrange(before blocks, DB init etc),
    // Act(run the code you're testing),
    // Assert (check that it does what you expect)
    const sum = adder.add(2, 200);
    // expect(adder.add).toHaveBeenCalled();
    // expect(adder.add).toHaveBeenCalledWith(2, 200);
    expect(adder.check).toHaveBeenCalledWith(2, 200, 202);
    expect(adder.check).toHaveBeenCalledTimes(1);
    expect(sum).toBe(202);
  });

  it('return an error if a non-numeric argument is given', () => {
    // const sum = adder.add(2, 'notanumber');
    // expect(sum).toBe('Invalid Input');
    expect(() => {
      adder.add(2, 'notanumber');
    }).toThrow( new Error('Invalid Input') );
  });

});
