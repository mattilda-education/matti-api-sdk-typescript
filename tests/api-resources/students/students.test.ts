// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Matti from 'matti';

const client = new Matti({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource students', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.students.create({
      first_last_name: 'Martinez',
      name: 'Omar',
      parent_id: '580e8747-bd50-4d80-8727-9d263c0dc72b',
      programID: 'prm_62d63d88-4d74-44f2-b017-b46b90d3347b',
      tin: 'PEGJ850315HJCRRN07',
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
    const response = await client.students.create({
      first_last_name: 'Martinez',
      name: 'Omar',
      parent_id: '580e8747-bd50-4d80-8727-9d263c0dc72b',
      programID: 'prm_62d63d88-4d74-44f2-b017-b46b90d3347b',
      tin: 'PEGJ850315HJCRRN07',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      complementID: 'cpt_dd4c1f06-eb92-4347-943e-516032c1d406',
      discountID: 'dsc_84f57a6d-c5b0-4150-bc32-0c26e520e2bd',
      document_type: 'CURP',
      enrollment: 'enrollment',
      external_id: '123abc',
      grade: 'grade',
      group: 'A',
      inscriptionID: 'inc_ad5b6ac3-b00b-43e1-a2fa-8e5e255b7e23',
      membershipID: 'mbs_4811e525-c590-45f7-96fa-e178a5a3ef3e',
      metadata: { id_alumno: '123abc' },
      preloaded: false,
      scholarshipID: 'scs_963137ef-d13e-4fe0-8dfc-e17edfd6402a',
      second_last_name: 'Jimenez',
      surchargeID: 'scg_ec851514-b3b2-4de0-a8cf-4109c1bbcea0',
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.students.retrieve('bf2629c9-450f-4cd9-a52b-634abbf3c8f0', {
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
    const response = await client.students.retrieve('bf2629c9-450f-4cd9-a52b-634abbf3c8f0', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.students.update('bf2629c9-450f-4cd9-a52b-634abbf3c8f0', {
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
    const response = await client.students.update('bf2629c9-450f-4cd9-a52b-634abbf3c8f0', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      document_type: 'CURP',
      first_last_name: 'Morales',
      grade: 'grade',
      group: 'A',
      name: 'Luis',
      second_last_name: 'Castillo',
      tin: 'MOPG770904HNERRF01',
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.students.list({
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
    const response = await client.students.list({
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      q: 'q',
    });
  });

  // Prism tests are disabled
  test.skip('delete: only required params', async () => {
    const responsePromise = client.students.delete('bf2629c9-450f-4cd9-a52b-634abbf3c8f0', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.students.delete('bf2629c9-450f-4cd9-a52b-634abbf3c8f0', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      date_from: '2019-12-27',
    });
  });
});
