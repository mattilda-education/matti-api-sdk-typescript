// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Matti from 'matti';

const client = new Matti({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource discounts', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.discounts.create({
      amount: 1000,
      apply_to_inscriptions: false,
      apply_to_memberships: true,
      max_date: 1000,
      name: 'Pronto Pago 5% quinto dia',
      not_apply_with_scholarship: false,
      program_id: 'prm_e6e39d8b-3edc-44d9-8283-28c2a3c8d59c',
      type: 'integer',
      workday: true,
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

  // Prism tests are disabled
  test.skip('create: required and optional params', async () => {
    const response = await client.discounts.create({
      amount: 1000,
      apply_to_inscriptions: false,
      apply_to_memberships: true,
      max_date: 1000,
      name: 'Pronto Pago 5% quinto dia',
      not_apply_with_scholarship: false,
      program_id: 'prm_e6e39d8b-3edc-44d9-8283-28c2a3c8d59c',
      type: 'integer',
      workday: true,
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      external_id: '1bbb7696-1836-4e87-b97e-58f9b4820566',
      from_day: 30,
      from_month: 4,
      metadata: { id_alumno: '123abc' },
      to_day: 1,
      to_month: 1,
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.discounts.retrieve('dsc_84f57a6d-c5b0-4150-bc32-0c26e520e2bd', {
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

  // Prism tests are disabled
  test.skip('retrieve: required and optional params', async () => {
    const response = await client.discounts.retrieve('dsc_84f57a6d-c5b0-4150-bc32-0c26e520e2bd', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.discounts.update('dsc_84f57a6d-c5b0-4150-bc32-0c26e520e2bd', {
      amount: 1000,
      apply_to_inscriptions: false,
      apply_to_memberships: true,
      max_date: 1000,
      name: 'Pronto Pago 5% quinto dia',
      not_apply_with_scholarship: false,
      type: 'integer',
      workday: true,
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

  // Prism tests are disabled
  test.skip('update: required and optional params', async () => {
    const response = await client.discounts.update('dsc_84f57a6d-c5b0-4150-bc32-0c26e520e2bd', {
      amount: 1000,
      apply_to_inscriptions: false,
      apply_to_memberships: true,
      max_date: 1000,
      name: 'Pronto Pago 5% quinto dia',
      not_apply_with_scholarship: false,
      type: 'integer',
      workday: true,
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      external_id: '1bbb7696-1836-4e87-b97e-58f9b4820566',
      from_day: 30,
      from_month: 4,
      metadata: { id_alumno: '123abc' },
      to_day: 1,
      to_month: 1,
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.discounts.list({
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

  // Prism tests are disabled
  test.skip('list: required and optional params', async () => {
    const response = await client.discounts.list({
      program_id: 'program_id',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      q: 'q',
    });
  });
});
