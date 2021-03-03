import { expect } from 'chai';
import { greet } from '../js/main';

describe('main tests', () => {
	it('should return a string', () => {
		expect(greet('oi')).to.be.equal('oi :)');
	});
});