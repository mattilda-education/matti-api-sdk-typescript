// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Matti from 'matti';

const client = new Matti({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource scholarships', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.scholarships.create({
      amount: 1000,
      apply_to_inscriptions: false,
      apply_to_memberships: true,
      description: 'Beca de 5% por cada hermano.',
      name: 'Beca 5/5',
      program_id: 'uuid',
      type: 'integer',
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
    const response = await client.scholarships.create({
      amount: 1000,
      apply_to_inscriptions: false,
      apply_to_memberships: true,
      description: 'Beca de 5% por cada hermano.',
      name: 'Beca 5/5',
      program_id: 'uuid',
      type: 'integer',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      external_id: '123abc',
      metadata: { id_alumno: '123abc' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.scholarships.retrieve('scs_349d3bff-cfae-4cc6-9835-e3558a64eb03', {
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
    const response = await client.scholarships.retrieve('scs_349d3bff-cfae-4cc6-9835-e3558a64eb03', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.scholarships.update('scs_349d3bff-cfae-4cc6-9835-e3558a64eb03', {
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
    const response = await client.scholarships.update('scs_349d3bff-cfae-4cc6-9835-e3558a64eb03', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      amount: 1000,
      apply_to_inscriptions: false,
      apply_to_memberships: true,
      description: 'Beca de 5% por cada hermano.',
      external_id: '123abc',
      metadata: { id_alumno: '123abc' },
      name: 'Beca 5/5',
      program_id: 'prm_1dd999cc-2985-40ee-bb97-0e629320f9b0',
      type: 'integer',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.scholarships.list({
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
    const response = await client.scholarships.list({
      program_id: 'program_id',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      q: 'q',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.scholarships.delete('scs_349d3bff-cfae-4cc6-9835-e3558a64eb03', {
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
    const response = await client.scholarships.delete('scs_349d3bff-cfae-4cc6-9835-e3558a64eb03', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
    });
  });
});
