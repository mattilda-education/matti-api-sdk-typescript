// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Matti from 'matti';

const client = new Matti({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource schools', () => {
  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.schools.update({
      name: 'ULA',
      zipcode: 'zipcode',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.schools.update({
      name: 'ULA',
      zipcode: 'zipcode',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
    });
  });

  // Prism tests are disabled
  test.skip('list', async () => {
    const responsePromise = client.schools.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });
});
