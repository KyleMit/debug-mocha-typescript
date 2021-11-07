import { expect } from 'chai';
import { add } from './add'

describe("add", function() {
    it('1 + 1 should equal 2 ', function() {
        const output = add(1,1)
        expect(output).to.equal(2);
    })
})
