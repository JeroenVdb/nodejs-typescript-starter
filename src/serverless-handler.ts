import {
	APIGatewayProxyHandler,
	Handler /* can be: Handler, SNSHandler, etc... */,
} from 'aws-lambda';
import { greeting } from './index';

export const run: APIGatewayProxyHandler = async (event, _context) => {
	return {
		statusCode: 200,
		body: greeting('Jeroen'),
	};
};
