/*

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
const wrap = (line, maxLen) => '';
module.exports = wrap;