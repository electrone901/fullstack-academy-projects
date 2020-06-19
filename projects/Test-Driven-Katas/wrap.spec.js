const { expect } = require('chai');
const wrap = require('./wrap');

describe('wrap', () => {
    it('Returns empty string if empty string was provided', () => {
        expect(wrap('', 10)).to.equal('');
    });

    /*
it('Returns a string less or equal to 10 character", () => {
   expect(wrap('', 10)).to.equal('');
})
wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)


pseudo:
1. take the str & count up <= 20
2. if word next word is more than 20, then dont included
3. return

Should return

Lorem ipsum dolor =17
Lorem ipsum dolor si
sit eu amet, elit na =20
magna sem amet nulla
vel purus ac ligula.
Hint: String.prototype.indexOf or String.prototype.lastIndexOf might be useful here.
*/
});