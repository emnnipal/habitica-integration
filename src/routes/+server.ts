import {} from '$app/environment';
import { json } from '@sveltejs/kit';
import { name, version } from '../../package.json';

export const GET = () => {
  return json({
    name,
    version,
    status: 'OK!',
  });
};
