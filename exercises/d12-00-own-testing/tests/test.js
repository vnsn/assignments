
// in the actual code file, have to put 
// module.exports = helperCallbForFilt;

// new model
var chai = require("chai");
var assert = chai.assert;
var helperCallbForFilt = require("../main.js");

var testCases = {
    case0: "aaacopebbb",
    case1: "codexxcode",
    case2: "cozexxcope",
    case3: "cozexxcope CODE COZE COPE CO1E",
    case4: "co-exxco1e"
}


describe("counting code warmup test", function(){
    it("should return 1", function() {
        assert.equal(helperCallbForFilt(testCases.case0), 1);
    });

    it("should return 2", function() {
        assert.equal(helperCallbForFilt(testCases.case1), 2);
    });

    it("should return 2", function() {
        assert.equal(helperCallbForFilt(testCases.case2), 2);
    });

    it("should return 5", function() {
        assert.equal(helperCallbForFilt(testCases.case3), 5);
    });

    it("should return 0", function() {
        assert.equal(helperCallbForFilt(testCases.case4), 0);
    });
})
