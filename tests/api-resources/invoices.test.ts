// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mattil from 'matti';

const client = new Mattil({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource invoices', () => {
  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.invoices.retrieve('9c7f3d05-253c-4cec-a3e9-8e1565de63ca', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.invoices.retrieve('9c7f3d05-253c-4cec-a3e9-8e1565de63ca', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.invoices.list({
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('list: required and optional params', async () => {
    const response = await client.invoices.list({
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      q: 'q',
    });
  });
});
