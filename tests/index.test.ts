// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIPromise } from 'matti/core/api-promise';

import util from 'node:util';
import Matti from 'matti';
import { APIUserAbortError } from 'matti';
const defaultFetch = fetch;

describe('instantiate client', () => {
  const env = process.env;

  beforeEach(() => {
    jest.resetModules();
    process.env = { ...env };
  });

  afterEach(() => {
    process.env = env;
  });

  describe('defaultHeaders', () => {
    const client = new Matti({
      baseURL: 'http://localhost:5000/',
      defaultHeaders: { 'X-My-Default-Header': '2' },
      apiKey: 'My API Key',
    });

    test('they are used in the request', async () => {
      const { req } = await client.buildRequest({ path: '/foo', method: 'post' });
      expect(req.headers.get('x-my-default-header')).toEqual('2');
    });

    test('can ignore `undefined` and leave the default', async () => {
      const { req } = await client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': undefined },
      });
      expect(req.headers.get('x-my-default-header')).toEqual('2');
    });

    test('can be removed with `null`', async () => {
      const { req } = await client.buildRequest({
        path: '/foo',
        method: 'post',
        headers: { 'X-My-Default-Header': null },
      });
      expect(req.headers.has('x-my-default-header')).toBe(false);
    });
  });
  describe('logging', () => {
    const env = process.env;

    beforeEach(() => {
      process.env = { ...env };
      process.env['MATTI_LOG'] = undefined;
    });

    afterEach(() => {
      process.env = env;
    });

    const forceAPIResponseForClient = async (client: Matti) => {
      await new APIPromise(
        client,
        Promise.resolve({
          response: new Response(),
          controller: new AbortController(),
          requestLogID: 'log_000000',
          retryOfRequestLogID: undefined,
          startTime: Date.now(),
          options: {
            method: 'get',
            path: '/',
          },
        }),
      );
    };

    test('debug logs when log level is debug', async () => {
      const debugMock = jest.fn();
      const logger = {
        debug: debugMock,
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
      };

      const client = new Matti({ logger: logger, logLevel: 'debug', apiKey: 'My API Key' });

      await forceAPIResponseForClient(client);
      expect(debugMock).toHaveBeenCalled();
    });

    test('default logLevel is warn', async () => {
      const client = new Matti({ apiKey: 'My API Key' });
      expect(client.logLevel).toBe('warn');
    });

    test('debug logs are skipped when log level is info', async () => {
      const debugMock = jest.fn();
      const logger = {
        debug: debugMock,
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
      };

      const client = new Matti({ logger: logger, logLevel: 'info', apiKey: 'My API Key' });

      await forceAPIResponseForClient(client);
      expect(debugMock).not.toHaveBeenCalled();
    });

    test('debug logs happen with debug env var', async () => {
      const debugMock = jest.fn();
      const logger = {
        debug: debugMock,
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
      };

      process.env['MATTI_LOG'] = 'debug';
      const client = new Matti({ logger: logger, apiKey: 'My API Key' });
      expect(client.logLevel).toBe('debug');

      await forceAPIResponseForClient(client);
      expect(debugMock).toHaveBeenCalled();
    });

    test('warn when env var level is invalid', async () => {
      const warnMock = jest.fn();
      const logger = {
        debug: jest.fn(),
        info: jest.fn(),
        warn: warnMock,
        error: jest.fn(),
      };

      process.env['MATTI_LOG'] = 'not a log level';
      const client = new Matti({ logger: logger, apiKey: 'My API Key' });
      expect(client.logLevel).toBe('warn');
      expect(warnMock).toHaveBeenCalledWith(
        'process.env[\'MATTI_LOG\'] was set to "not a log level", expected one of ["off","error","warn","info","debug"]',
      );
    });

    test('client log level overrides env var', async () => {
      const debugMock = jest.fn();
      const logger = {
        debug: debugMock,
        info: jest.fn(),
        warn: jest.fn(),
        error: jest.fn(),
      };

      process.env['MATTI_LOG'] = 'debug';
      const client = new Matti({ logger: logger, logLevel: 'off', apiKey: 'My API Key' });

      await forceAPIResponseForClient(client);
      expect(debugMock).not.toHaveBeenCalled();
    });

    test('no warning logged for invalid env var level + valid client level', async () => {
      const warnMock = jest.fn();
      const logger = {
        debug: jest.fn(),
        info: jest.fn(),
        warn: warnMock,
        error: jest.fn(),
      };

      process.env['MATTI_LOG'] = 'not a log level';
      const client = new Matti({ logger: logger, logLevel: 'debug', apiKey: 'My API Key' });
      expect(client.logLevel).toBe('debug');
      expect(warnMock).not.toHaveBeenCalled();
    });
  });

  describe('defaultQuery', () => {
    test('with null query params given', () => {
      const client = new Matti({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo' },
        apiKey: 'My API Key',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo');
    });

    test('multiple default query params', () => {
      const client = new Matti({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { apiVersion: 'foo', hello: 'world' },
        apiKey: 'My API Key',
      });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/foo?apiVersion=foo&hello=world');
    });

    test('overriding with `undefined`', () => {
      const client = new Matti({
        baseURL: 'http://localhost:5000/',
        defaultQuery: { hello: 'world' },
        apiKey: 'My API Key',
      });
      expect(client.buildURL('/foo', { hello: undefined })).toEqual('http://localhost:5000/foo');
    });
  });

  test('custom fetch', async () => {
    const client = new Matti({
      baseURL: 'http://localhost:5000/',
      apiKey: 'My API Key',
      fetch: (url) => {
        return Promise.resolve(
          new Response(JSON.stringify({ url, custom: true }), {
            headers: { 'Content-Type': 'application/json' },
          }),
        );
      },
    });

    const response = await client.get('/foo');
    expect(response).toEqual({ url: 'http://localhost:5000/foo', custom: true });
  });

  test('explicit global fetch', async () => {
    // make sure the global fetch type is assignable to our Fetch type
    const client = new Matti({
      baseURL: 'http://localhost:5000/',
      apiKey: 'My API Key',
      fetch: defaultFetch,
    });
  });

  test('custom signal', async () => {
    const client = new Matti({
      baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
      apiKey: 'My API Key',
      fetch: (...args) => {
        return new Promise((resolve, reject) =>
          setTimeout(
            () =>
              defaultFetch(...args)
                .then(resolve)
                .catch(reject),
            300,
          ),
        );
      },
    });

    const controller = new AbortController();
    setTimeout(() => controller.abort(), 200);

    const spy = jest.spyOn(client, 'request');

    await expect(client.get('/foo', { signal: controller.signal })).rejects.toThrowError(APIUserAbortError);
    expect(spy).toHaveBeenCalledTimes(1);
  });

  test('normalized method', async () => {
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: string | URL | Request, init: RequestInit = {}): Promise<Response> => {
      capturedRequest = init;
      return new Response(JSON.stringify({}), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Matti({ baseURL: 'http://localhost:5000/', apiKey: 'My API Key', fetch: testFetch });

    await client.patch('/foo');
    expect(capturedRequest?.method).toEqual('PATCH');
  });

  describe('baseUrl', () => {
    test('trailing slash', () => {
      const client = new Matti({ baseURL: 'http://localhost:5000/custom/path/', apiKey: 'My API Key' });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    test('no trailing slash', () => {
      const client = new Matti({ baseURL: 'http://localhost:5000/custom/path', apiKey: 'My API Key' });
      expect(client.buildURL('/foo', null)).toEqual('http://localhost:5000/custom/path/foo');
    });

    afterEach(() => {
      process.env['MATTI_BASE_URL'] = undefined;
    });

    test('explicit option', () => {
      const client = new Matti({ baseURL: 'https://example.com', apiKey: 'My API Key' });
      expect(client.baseURL).toEqual('https://example.com');
    });

    test('env variable', () => {
      process.env['MATTI_BASE_URL'] = 'https://example.com/from_env';
      const client = new Matti({ apiKey: 'My API Key' });
      expect(client.baseURL).toEqual('https://example.com/from_env');
    });

    test('empty env variable', () => {
      process.env['MATTI_BASE_URL'] = ''; // empty
      const client = new Matti({ apiKey: 'My API Key' });
      expect(client.baseURL).toEqual('https://api.mattilda.io/matti_api/v1');
    });

    test('blank env variable', () => {
      process.env['MATTI_BASE_URL'] = '  '; // blank
      const client = new Matti({ apiKey: 'My API Key' });
      expect(client.baseURL).toEqual('https://api.mattilda.io/matti_api/v1');
    });

    test('env variable with environment', () => {
      process.env['MATTI_BASE_URL'] = 'https://example.com/from_env';

      expect(
        () => new Matti({ apiKey: 'My API Key', environment: 'production' }),
      ).toThrowErrorMatchingInlineSnapshot(
        `"Ambiguous URL; The \`baseURL\` option (or MATTI_BASE_URL env var) and the \`environment\` option are given. If you want to use the environment you must pass baseURL: null"`,
      );

      const client = new Matti({ apiKey: 'My API Key', baseURL: null, environment: 'production' });
      expect(client.baseURL).toEqual('https://api.mattilda.io/matti_api/v1');
    });

    test('in request options', () => {
      const client = new Matti({ apiKey: 'My API Key' });
      expect(client.buildURL('/foo', null, 'http://localhost:5000/option')).toEqual(
        'http://localhost:5000/option/foo',
      );
    });

    test('in request options overridden by client options', () => {
      const client = new Matti({ apiKey: 'My API Key', baseURL: 'http://localhost:5000/client' });
      expect(client.buildURL('/foo', null, 'http://localhost:5000/option')).toEqual(
        'http://localhost:5000/client/foo',
      );
    });

    test('in request options overridden by env variable', () => {
      process.env['MATTI_BASE_URL'] = 'http://localhost:5000/env';
      const client = new Matti({ apiKey: 'My API Key' });
      expect(client.buildURL('/foo', null, 'http://localhost:5000/option')).toEqual(
        'http://localhost:5000/env/foo',
      );
    });
  });

  test('maxRetries option is correctly set', () => {
    const client = new Matti({ maxRetries: 4, apiKey: 'My API Key' });
    expect(client.maxRetries).toEqual(4);

    // default
    const client2 = new Matti({ apiKey: 'My API Key' });
    expect(client2.maxRetries).toEqual(2);
  });

  describe('withOptions', () => {
    test('creates a new client with overridden options', async () => {
      const client = new Matti({ baseURL: 'http://localhost:5000/', maxRetries: 3, apiKey: 'My API Key' });

      const newClient = client.withOptions({
        maxRetries: 5,
        baseURL: 'http://localhost:5001/',
      });

      // Verify the new client has updated options
      expect(newClient.maxRetries).toEqual(5);
      expect(newClient.baseURL).toEqual('http://localhost:5001/');

      // Verify the original client is unchanged
      expect(client.maxRetries).toEqual(3);
      expect(client.baseURL).toEqual('http://localhost:5000/');

      // Verify it's a different instance
      expect(newClient).not.toBe(client);
      expect(newClient.constructor).toBe(client.constructor);
    });

    test('inherits options from the parent client', async () => {
      const client = new Matti({
        baseURL: 'http://localhost:5000/',
        defaultHeaders: { 'X-Test-Header': 'test-value' },
        defaultQuery: { 'test-param': 'test-value' },
        apiKey: 'My API Key',
      });

      const newClient = client.withOptions({
        baseURL: 'http://localhost:5001/',
      });

      // Test inherited options remain the same
      expect(newClient.buildURL('/foo', null)).toEqual('http://localhost:5001/foo?test-param=test-value');

      const { req } = await newClient.buildRequest({ path: '/foo', method: 'get' });
      expect(req.headers.get('x-test-header')).toEqual('test-value');
    });

    test('respects runtime property changes when creating new client', () => {
      const client = new Matti({ baseURL: 'http://localhost:5000/', timeout: 1000, apiKey: 'My API Key' });

      // Modify the client properties directly after creation
      client.baseURL = 'http://localhost:6000/';
      client.timeout = 2000;

      // Create a new client with withOptions
      const newClient = client.withOptions({
        maxRetries: 10,
      });

      // Verify the new client uses the updated properties, not the original ones
      expect(newClient.baseURL).toEqual('http://localhost:6000/');
      expect(newClient.timeout).toEqual(2000);
      expect(newClient.maxRetries).toEqual(10);

      // Original client should still have its modified properties
      expect(client.baseURL).toEqual('http://localhost:6000/');
      expect(client.timeout).toEqual(2000);
      expect(client.maxRetries).not.toEqual(10);

      // Verify URL building uses the updated baseURL
      expect(newClient.buildURL('/bar', null)).toEqual('http://localhost:6000/bar');
    });
  });

  test('with environment variable arguments', () => {
    // set options via env var
    process.env['MATTIL_API_KEY'] = 'My API Key';
    const client = new Matti();
    expect(client.apiKey).toBe('My API Key');
  });

  test('with overridden environment variable arguments', () => {
    // set options via env var
    process.env['MATTIL_API_KEY'] = 'another My API Key';
    const client = new Matti({ apiKey: 'My API Key' });
    expect(client.apiKey).toBe('My API Key');
  });
});

describe('request building', () => {
  const client = new Matti({ apiKey: 'My API Key' });

  describe('custom headers', () => {
    test('handles undefined', async () => {
      const { req } = await client.buildRequest({
        path: '/foo',
        method: 'post',
        body: { value: 'hello' },
        headers: { 'X-Foo': 'baz', 'x-foo': 'bar', 'x-Foo': undefined, 'x-baz': 'bam', 'X-Baz': null },
      });
      expect(req.headers.get('x-foo')).toEqual('bar');
      expect(req.headers.get('x-Foo')).toEqual('bar');
      expect(req.headers.get('X-Foo')).toEqual('bar');
      expect(req.headers.get('x-baz')).toEqual(null);
    });
  });
});

describe('default encoder', () => {
  const client = new Matti({ apiKey: 'My API Key' });

  class Serializable {
    toJSON() {
      return { $type: 'Serializable' };
    }
  }
  class Collection<T> {
    #things: T[];
    constructor(things: T[]) {
      this.#things = Array.from(things);
    }
    toJSON() {
      return Array.from(this.#things);
    }
    [Symbol.iterator]() {
      return this.#things[Symbol.iterator];
    }
  }
  for (const jsonValue of [{}, [], { __proto__: null }, new Serializable(), new Collection(['item'])]) {
    test(`serializes ${util.inspect(jsonValue)} as json`, async () => {
      const { req } = await client.buildRequest({
        path: '/foo',
        method: 'post',
        body: jsonValue,
      });
      expect(req.headers).toBeInstanceOf(Headers);
      expect(req.headers.get('content-type')).toEqual('application/json');
      expect(req.body).toBe(JSON.stringify(jsonValue));
    });
  }

  const encoder = new TextEncoder();
  const asyncIterable = (async function* () {
    yield encoder.encode('a\n');
    yield encoder.encode('b\n');
    yield encoder.encode('c\n');
  })();
  for (const streamValue of [
    [encoder.encode('a\nb\nc\n')][Symbol.iterator](),
    new Response('a\nb\nc\n').body,
    asyncIterable,
  ]) {
    test(`converts ${util.inspect(streamValue)} to ReadableStream`, async () => {
      const { req } = await client.buildRequest({
        path: '/foo',
        method: 'post',
        body: streamValue,
      });
      expect(req.headers).toBeInstanceOf(Headers);
      expect(req.headers.get('content-type')).toEqual(null);
      expect(req.body).toBeInstanceOf(ReadableStream);
      expect(await new Response(req.body).text()).toBe('a\nb\nc\n');
    });
  }

  test(`can set content-type for ReadableStream`, async () => {
    const { req } = await client.buildRequest({
      path: '/foo',
      method: 'post',
      body: new Response('a\nb\nc\n').body,
      headers: { 'Content-Type': 'text/plain' },
    });
    expect(req.headers).toBeInstanceOf(Headers);
    expect(req.headers.get('content-type')).toEqual('text/plain');
    expect(req.body).toBeInstanceOf(ReadableStream);
    expect(await new Response(req.body).text()).toBe('a\nb\nc\n');
  });
});

describe('retries', () => {
  test('retry on timeout', async () => {
    let count = 0;
    const testFetch = async (
      url: string | URL | Request,
      { signal }: RequestInit = {},
    ): Promise<Response> => {
      if (count++ === 0) {
        return new Promise(
          (resolve, reject) => signal?.addEventListener('abort', () => reject(new Error('timed out'))),
        );
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Matti({ apiKey: 'My API Key', timeout: 10, fetch: testFetch });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });

  test('retry count header', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: string | URL | Request, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Matti({ apiKey: 'My API Key', fetch: testFetch, maxRetries: 4 });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });

    expect((capturedRequest!.headers as Headers).get('x-stainless-retry-count')).toEqual('2');
    expect(count).toEqual(3);
  });

  test('omit retry count header', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: string | URL | Request, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };
    const client = new Matti({ apiKey: 'My API Key', fetch: testFetch, maxRetries: 4 });

    expect(
      await client.request({
        path: '/foo',
        method: 'get',
        headers: { 'X-Stainless-Retry-Count': null },
      }),
    ).toEqual({ a: 1 });

    expect((capturedRequest!.headers as Headers).has('x-stainless-retry-count')).toBe(false);
  });

  test('omit retry count header by default', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: string | URL | Request, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };
    const client = new Matti({
      apiKey: 'My API Key',
      fetch: testFetch,
      maxRetries: 4,
      defaultHeaders: { 'X-Stainless-Retry-Count': null },
    });

    expect(
      await client.request({
        path: '/foo',
        method: 'get',
      }),
    ).toEqual({ a: 1 });

    expect(capturedRequest!.headers as Headers).not.toHaveProperty('x-stainless-retry-count');
  });

  test('overwrite retry count header', async () => {
    let count = 0;
    let capturedRequest: RequestInit | undefined;
    const testFetch = async (url: string | URL | Request, init: RequestInit = {}): Promise<Response> => {
      count++;
      if (count <= 2) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      capturedRequest = init;
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };
    const client = new Matti({ apiKey: 'My API Key', fetch: testFetch, maxRetries: 4 });

    expect(
      await client.request({
        path: '/foo',
        method: 'get',
        headers: { 'X-Stainless-Retry-Count': '42' },
      }),
    ).toEqual({ a: 1 });

    expect((capturedRequest!.headers as Headers).get('x-stainless-retry-count')).toEqual('42');
  });

  test('retry on 429 with retry-after', async () => {
    let count = 0;
    const testFetch = async (
      url: string | URL | Request,
      { signal }: RequestInit = {},
    ): Promise<Response> => {
      if (count++ === 0) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After': '0.1',
          },
        });
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Matti({ apiKey: 'My API Key', fetch: testFetch });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });

  test('retry on 429 with retry-after-ms', async () => {
    let count = 0;
    const testFetch = async (
      url: string | URL | Request,
      { signal }: RequestInit = {},
    ): Promise<Response> => {
      if (count++ === 0) {
        return new Response(undefined, {
          status: 429,
          headers: {
            'Retry-After-Ms': '10',
          },
        });
      }
      return new Response(JSON.stringify({ a: 1 }), { headers: { 'Content-Type': 'application/json' } });
    };

    const client = new Matti({ apiKey: 'My API Key', fetch: testFetch });

    expect(await client.request({ path: '/foo', method: 'get' })).toEqual({ a: 1 });
    expect(count).toEqual(2);
    expect(
      await client
        .request({ path: '/foo', method: 'get' })
        .asResponse()
        .then((r) => r.text()),
    ).toEqual(JSON.stringify({ a: 1 }));
    expect(count).toEqual(3);
  });
});
