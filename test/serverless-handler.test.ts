import assert from 'assert';
import { run } from '../src/serverless-handler';

import { mock } from 'intermock';

describe('Serverless handler', function () {
	it('should return 200 with greeting', async function () {
		// @ts-ignore
		let response = await run(null, null, null);

		assert.strictEqual(typeof response, 'object');
		// @ts-ignore
		assert.strictEqual(response.statusCode, 200);
		// @ts-ignore
		assert.strictEqual(response.body, 'Hello Jeroen');
	});
});
