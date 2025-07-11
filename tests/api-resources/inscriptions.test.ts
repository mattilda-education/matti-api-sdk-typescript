// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mattil from 'matti';

const client = new Mattil({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource inscriptions', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.inscriptions.create({
      amount: 1000,
      name: 'Administración',
      pay_date: '2023-11-10',
      program_id: 'prm_48ec2f25-74e1-406a-a42f-4636bcce7877',
      status: 'active',
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
    const response = await client.inscriptions.create({
      amount: 1000,
      name: 'Administración',
      pay_date: '2023-11-10',
      program_id: 'prm_48ec2f25-74e1-406a-a42f-4636bcce7877',
      status: 'active',
      type: 'integer',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      external_id: '2a09691a-a473-46de-b0a7-45269007c59c',
      metadata: { id_alumno: '123abc' },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.inscriptions.retrieve('inc_4dfbd534-0d6c-489e-9557-04dd60dce61d', {
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
    const response = await client.inscriptions.retrieve('inc_4dfbd534-0d6c-489e-9557-04dd60dce61d', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.inscriptions.update('inc_4dfbd534-0d6c-489e-9557-04dd60dce61d', {
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
    const response = await client.inscriptions.update('inc_4dfbd534-0d6c-489e-9557-04dd60dce61d', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      amount: 1000,
      external_id: '2a09691a-a473-46de-b0a7-45269007c59c',
      metadata: { id_alumno: '123abc' },
      name: 'Administración',
      pay_date: '2023-11-10',
      status: 'active',
      type: 'integer',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.inscriptions.list({
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
    const response = await client.inscriptions.list({
      program_id: 'program_id',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      q: 'q',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.inscriptions.delete('inc_4dfbd534-0d6c-489e-9557-04dd60dce61d', {
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
    const response = await client.inscriptions.delete('inc_4dfbd534-0d6c-489e-9557-04dd60dce61d', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
    });
  });
});
