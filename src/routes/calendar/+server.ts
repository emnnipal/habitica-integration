import { json, type RequestHandler } from '@sveltejs/kit';
import dayjs from 'dayjs';

export const POST = (async ({ request }) => {
  const body = await request.json();
  console.log(`[${dayjs().format()}]`, 'body', JSON.stringify(body, null, 2));
  return json({
    message: 'Success',
  });
}) satisfies RequestHandler;

export const edge = true;
