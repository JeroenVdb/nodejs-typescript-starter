import assert from 'assert';
import { greeting } from '../src/index';

describe('Default: index.ts', function () {
	describe('greeting', function () {
		it('should greet Jeroen', function () {
			assert.strictEqual(greeting('Jeroen'), 'Hello Jeroen');
		});

		it('should throw when no-one is there', function () {
			assert.throws(
				() => {
					greeting();
				},
				{
					message: /No-one is here/,
				}
			);
		});
	});
});
