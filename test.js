var negate = require('./')
var test = require('tape').test

test("negates a function", function(t) {
    function bar(b) {
        return b
    }

    var neg = negate(bar)
    
    t.equal(bar(true), true, 'fn returns expected')
    t.equal(neg(true), false, 'negated fn returns expected')
    t.equal(neg(false), true, 'negated fn returns expected')
    t.end()
})