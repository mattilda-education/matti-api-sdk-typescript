// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mattil from 'mattil';

const client = new Mattil({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource users', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.users.create({
      email: 'omar.martinez@mattilda.io',
      external_id: '123abc',
      first_last_name: 'Martinez',
      metadata: { id_alumno: '123abc' },
      name: 'Omar',
      phone: 'phone',
      tin: 'MAJO900607HDFRMM09',
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
    const response = await client.users.create({
      email: 'omar.martinez@mattilda.io',
      external_id: '123abc',
      first_last_name: 'Martinez',
      metadata: { id_alumno: '123abc' },
      name: 'Omar',
      phone: 'phone',
      tin: 'MAJO900607HDFRMM09',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      document_type: 'CURP',
      second_last_name: 'Jimenez',
      tax_data: {
        cfdi_id: 'D10',
        city: 'Ciudad de México',
        department_code: 'department_code',
        document_type: 'CURP',
        email: 'pedro@correo.com',
        municipality_code: 'municipality_code',
        name: 'Pedro Morales Quintero',
        rfc: 'JCWH510302XN4',
        state: 'Distrito federal',
        street: 'Calle 1 # 12-12',
        suburb: 'Ciudadela 2',
        tax_regime: '612',
        zip_code: '01041',
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.users.retrieve('2a584234-5839-4a3a-a5be-01a736e0503e', {
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
    const response = await client.users.retrieve('2a584234-5839-4a3a-a5be-01a736e0503e', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.users.update('2a584234-5839-4a3a-a5be-01a736e0503e', {
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
    const response = await client.users.update('2a584234-5839-4a3a-a5be-01a736e0503e', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      address: 'address',
      country_code: 'country_code',
      document_type: 'CURP',
      email: 'omar.martinez@mattilda.io',
      external_id: '123abc',
      first_last_name: 'Martinez',
      is_on_boarding: true,
      lang: 'lang',
      metadata: { id_alumno: '123abc' },
      name: 'Omar',
      phone: 'phone',
      referred_id: 'referred_id',
      second_last_name: 'Jimenez',
      tin: 'PEGJ850315HJCRRN07',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.users.list({
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
    const response = await client.users.list({
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      q: 'q',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.users.delete('2a584234-5839-4a3a-a5be-01a736e0503e', {
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
    const response = await client.users.delete('2a584234-5839-4a3a-a5be-01a736e0503e', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('createPasswordless: only required params', async () => {
    const responsePromise = client.users.createPasswordless('2a584234-5839-4a3a-a5be-01a736e0503e', {
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
  test.skip('createPasswordless: required and optional params', async () => {
    const response = await client.users.createPasswordless('2a584234-5839-4a3a-a5be-01a736e0503e', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
    });
  });
});
