const assert = require("assert");
const Main = require("../src/main");

describe("测试addfunction", function() {
    it('1+1', function() {
        assert.strictEqual(Main.add(1,1), 3);
    })
})

export{}