export const buildRequestPath = (...parts) => parts.join('');

export const get_json = (path, headers={}) =>
  fetch(path, getQuery('get', headers))
    .then(response => response.ok ? response.json() : null);

export const post_json = (path, data={}, headers={}) =>
  fetch(path, getQuery('post', headers, JSON.stringify(data)))
    .then(response => response.ok ? response.json() : null);


const getQuery = (method, headers={}, body={}) =>
  {
    return {
    'mode': 'cors',
    'method': `${method}`,
    'headers': {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
      'Access-Control-Request-Headers': 'Accept',
      'Content-Type': 'application/json',
      ...headers
    },
    'body': body }}
