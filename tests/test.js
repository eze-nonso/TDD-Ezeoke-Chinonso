import chai from 'chai';
import aritGeo from '../src/main.js'
const assert = chai.assert;


describe('Progression', () => {
    
    
    describe('Handle valid list inputs', () => {
        it('should return 0 for empty array', () => {
             assert.equal(aritGeo([]), 0);
        });
        it('should return "Arithmetic" for [5,13,21,29]', () => {
            assert.equal(aritGeo([5,13,21,29]), 'Arithmetic');
        });
        it('should return -1 for [-2,-4,-8,-16,-20]', () => {
            assert.equal(aritGeo([-2,-4,-8,-16,-20]), -1);
        });
        it('should return -1 for [1,2,4,8,16,17,18,19,20]', () => {
            assert.equal(aritGeo([1,2,4,8,16,17,18,19,20]), -1);
        });
        it('should return "Geometric" for [-50,10,-2,0.4]', () => {
            assert.equal(aritGeo([-50,10,-2,0.4]), 'Geometric');
        });
        it('should return -1 for [7,[8,9],10,[11,12]]', () => {
            assert.equal(aritGeo([7,[8,9],10,[11,12]]), -1);
        });
        it('should return "insufficient array items" for [2,2]', () => {
            assert.equal(aritGeo([2,2]), "insufficient array items");
        });
        
        it('should return "insufficient array items" for [2]', () => {
            assert.equal(aritGeo([2]), "insufficient array items");
        });
    });
    
    describe('Handle non-list or invalid inputs', () => {
        it('should return "input not a list" for {"hello":"there"}', () => {
            assert.equal(aritGeo({"hello":"there"}), "input not a list");
        });
        it('should return "input not a list" for "how are you"', () => {
            assert.equal(aritGeo("how are you"), "input not a list");
        
    });
         it('should return "input not a list" for -150.6', () => {
            assert.equal(aritGeo(-150.6), "input not a list");
        });
         it('should return "input not a list" for false', () => {
            assert.equal(aritGeo(false), "input not a list");
        });
    }
        
        
        
);
});