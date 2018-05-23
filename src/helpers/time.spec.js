/* eslint-disable no-undef, quotes */
import { expect } from 'chai';
import { secondsToMinutesWithSeconds } from './index';

describe('Time helpers', () => {
    describe('secondsToMinutesWithSeconds', () => {
        it('can convert a value less than a minute', () => {
            expect(secondsToMinutesWithSeconds('59')).to.equal('0:59');
        });

        it('can convert a value that is exactly a minute', () => {
            expect(secondsToMinutesWithSeconds('60')).to.equal('1:00');
        });

        it('can convert a value greater than a minute', () => {
            expect(secondsToMinutesWithSeconds('172')).to.equal('2:52');
        });

        it('can convert a value that requires a 0 in the tens digit of seconds', () => {
            expect(secondsToMinutesWithSeconds('187')).to.equal('3:07');
        });

        it('can convert a value that has a duration over two hours', () => {
            expect(secondsToMinutesWithSeconds('10800')).to.equal('3:00:00');
        });
    });
});