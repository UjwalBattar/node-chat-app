const expect = require('expect');

const {
    isRealString
} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var res = isRealString(1234);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var res = isRealString("    ");
        expect(res).toBeFalsy();
    });

    it('should allow string eith non-space charachters', () => {
        var res = isRealString("    realString    ");
        expect(res).toBe(true);
    });
});