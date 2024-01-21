import { Router, error, json, withContent } from 'itty-router';

const router = Router();

router
	.post('/', withContent, ({ content }) => console.log(content))

	.all('*', () => error(404));

export default {
	fetch: async (request, env, ctx) =>
		router.handle(request, env, ctx).then(json).catch(error)
};
