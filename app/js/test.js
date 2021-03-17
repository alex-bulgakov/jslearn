describe("pow", function () {

    it("n <= 0 is NaN", function () {
        assert.isNaN(pow(2, -1));
    });


    it("n = 1.5 is NaN", function () {
        assert.isNaN(pow(2, 1.5));
    });

    describe("x ^ 3", function () {
        function makeTest(x) {
            let expected = x * x * x;
            it(`${x} ^ 3 = ${expected}`, function () {
                assert.equal(pow(x, 3), expected);
            });
        }

        for (let i = -10; i < 10; i++) {
            makeTest(i);
        }
    });


    describe("x ^ 2", function () {
        function makeTest(x) {
            let expected = x * x;
            it(`${x} ^ 2 = ${expected}`, function () {
                assert.equal(pow(x, 2), expected);
            });
        }

        for (let i = -10; i < 10; i++) {
            makeTest(i);
        }
    });

});