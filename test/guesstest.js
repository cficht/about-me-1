// IMPORT MODULES under test here:
import compareNumbers from '../src/compareNumbers.js';

const test = QUnit.test;

test('Test for match', function(assert) {
    //ARRANGE Set up your parameters and expectations
    let input = 12;
    const expect = 0;

    //ACT - Call the function you're testing and set the result to a const
    const result = compareNumbers(input, 12);

    //ASSERT - Make assertions about what is expected valid result
    assert.equal(result, expect);
});

test('Test for less than', function(assert) {
    //ARRANGE Set up your parameters and expectations
    let input = 1;
    const expect = -1;

    //ACT - Call the function you're testing and set the result to a const
    const result = compareNumbers(input, 12);

    //ASSERT - Make assertions about what is expected valid result
    assert.equal(result, expect);
});

test('Test for greater than', function(assert) {
    //ARRANGE Set up your parameters and expectations
    let input = 20;
    const expect = 1;

    //ACT - Call the function you're testing and set the result to a const
    const result = compareNumbers(input, 12);

    //ASSERT - Make assertions about what is expected valid result
    assert.equal(result, expect);
});

test('Test for falsy', function(assert) {
    //ARRANGE Set up your parameters and expectations
    let input = '12';
    const expect = false;

    //ACT - Call the function you're testing and set the result to a const
    let result = compareNumbers(input, 12);

    //ASSERT - Make assertions about what is expected valid result
    assert.equal(result, expect);
    input = '12';
    result = compareNumbers(input, 12);
    assert.equal(result, expect);
    input = 21;
    result = compareNumbers(input, 12);
    assert.equal(result, expect);
    input = 0;
    result = compareNumbers(input, 12);
    assert.equal(result, expect);
    input = 'some string';
    result = compareNumbers(input, 12);
    assert.equal(result, expect);
    input = true;
    result = compareNumbers(input, 12);
    assert.equal(result, expect);
    input = [1, 2, 3];
    result = compareNumbers(input, 12);
    assert.equal(result, expect);
});