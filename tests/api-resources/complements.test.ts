// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mattil from 'mattil';

const client = new Mattil({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource complements', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.complements.create({
      amount: 1000,
      end_date: '2023-11-10',
      frecuency: 'recurrent',
      name: 'Curso de natación',
      pay_date: '2023-11-10',
      periodicity: 'monthly',
      program_id: 'prm_69dc9120-03cc-4737-99b3-88d018804a29',
      start_date: '2023-11-10',
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
    const response = await client.complements.create({
      amount: 1000,
      end_date: '2023-11-10',
      frecuency: 'recurrent',
      name: 'Curso de natación',
      pay_date: '2023-11-10',
      periodicity: 'monthly',
      program_id: 'prm_69dc9120-03cc-4737-99b3-88d018804a29',
      start_date: '2023-11-10',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      external_id: 'a2745b9f-64eb-419e-8f18-7913d08d102f',
      metadata: { id_alumno: '123abc' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.complements.retrieve('cpt_b6f577fa-c2a1-4849-be17-7e730c076fb0', {
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
    const response = await client.complements.retrieve('cpt_b6f577fa-c2a1-4849-be17-7e730c076fb0', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.complements.update('cpt_b6f577fa-c2a1-4849-be17-7e730c076fb0', {
      program_id: 'prm_69dc9120-03cc-4737-99b3-88d018804a29',
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
    const response = await client.complements.update('cpt_b6f577fa-c2a1-4849-be17-7e730c076fb0', {
      program_id: 'prm_69dc9120-03cc-4737-99b3-88d018804a29',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      amount: 1000,
      end_date: '2023-11-10',
      external_id: 'a2745b9f-64eb-419e-8f18-7913d08d102f',
      frecuency: 'recurrent',
      metadata: { id_alumno: '123abc' },
      name: 'Curso de natación',
      pay_date: '2023-11-10',
      periodicity: 'monthly',
      start_date: '2023-11-10',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.complements.list({
      program_id: 'program_id',
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
    const response = await client.complements.list({
      program_id: 'program_id',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      q: 'q',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.complements.delete('cpt_b6f577fa-c2a1-4849-be17-7e730c076fb0', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.complements.delete('cpt_b6f577fa-c2a1-4849-be17-7e730c076fb0', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
    });
  });
});
