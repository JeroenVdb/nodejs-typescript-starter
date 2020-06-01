import { APIGatewayProxyHandler /* can be: Handler, SNSHandler, etc... */ } from 'aws-lambda';
import { greeting } from './index';

export const run: APIGatewayProxyHandler = async (event, _context) => {
	return {
		statusCode: 200,
		body: `
			<h1>Hello ${greeting('Jeroen')}</h1>
			<code>
				${JSON.stringify(event.body, null, 4)}
			</code>
		`,
	};
};
