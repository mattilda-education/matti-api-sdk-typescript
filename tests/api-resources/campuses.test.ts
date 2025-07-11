// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mattil from 'mattil';

const client = new Mattil({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource campuses', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.campuses.create({
      address: 'Reforma 606',
      name: 'Campus valle',
      time_zone: 'America/Mexico_City',
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

  // skipped: tests are disabled for the time being
  test.skip('create: required and optional params', async () => {
    const response = await client.campuses.create({
      address: 'Reforma 606',
      name: 'Campus valle',
      time_zone: 'America/Mexico_City',
      zipcode: 'zipcode',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      external_id: '8ad95d03-7ae3-4446-82e0-fe8bbb22d5d3',
      metadata: { id_alumno: '123abc' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.campuses.retrieve('15bf5964-ba9c-4773-8479-6dbce10079ec', {
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

  // skipped: tests are disabled for the time being
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.campuses.retrieve('15bf5964-ba9c-4773-8479-6dbce10079ec', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.campuses.update('15bf5964-ba9c-4773-8479-6dbce10079ec', {
      name: 'Campus valle',
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

  // skipped: tests are disabled for the time being
  test.skip('update: required and optional params', async () => {
    const response = await client.campuses.update('15bf5964-ba9c-4773-8479-6dbce10079ec', {
      name: 'Campus valle',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      external_id: '8ad95d03-7ae3-4446-82e0-fe8bbb22d5d3',
      metadata: { id_alumno: '123abc' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.campuses.list({ campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec' });
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
    const response = await client.campuses.list({ campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec', q: 'q' });
  });
});
