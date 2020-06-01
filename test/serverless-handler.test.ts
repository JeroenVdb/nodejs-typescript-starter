import assert from 'assert';
import { run } from '../src/serverless-handler';
import * as APIGatewayProxyEventExample from './apigateway-proxy-event-example';

describe('Serverless handler', function () {
	it('should return 200 with greeting', async function () {
		// @ts-ignore
		let response = await run(APIGatewayProxyEventExample, null, null);

		assert.strictEqual(typeof response, 'object');
		// @ts-ignore
		assert.strictEqual(response.statusCode, 200);
		// @ts-ignore
		assert.match(response.body, /Hello Jeroen/);
	});
});
