// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Matti from 'matti';

const client = new Matti({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource programs', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.programs.create({
      education_level: 'primary',
      end_date: '2023-12-31',
      name: 'Administración',
      school_level: '1 Grado',
      start_date: '2023-07-01',
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
  test.skip('create: required and optional params', async () => {
    const response = await client.programs.create({
      education_level: 'primary',
      end_date: '2023-12-31',
      name: 'Administración',
      school_level: '1 Grado',
      start_date: '2023-07-01',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      cct: 'ABC12345',
      external_id: '123abc',
      metadata: { id_alumno: '123abc' },
      rvoe: 'ABC12345',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.programs.retrieve('prm_69dc9120-03cc-4737-99b3-88d018804a29', {
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
    const response = await client.programs.retrieve('prm_69dc9120-03cc-4737-99b3-88d018804a29', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.programs.update('prm_69dc9120-03cc-4737-99b3-88d018804a29', {
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
  test.skip('update: required and optional params', async () => {
    const response = await client.programs.update('prm_69dc9120-03cc-4737-99b3-88d018804a29', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      external_id: 'Campo arbitrario de datos de terceros',
      metadata: { id_alumno: '123abc' },
      name: 'Administración',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.programs.list({
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
    const response = await client.programs.list({
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      q: 'q',
    });
  });
});
