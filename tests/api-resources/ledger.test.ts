// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Matti from 'matti';

const client = new Matti({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource ledger', () => {
  // Prism tests are disabled
  test.skip('create: only required params', async () => {
    const responsePromise = client.ledger.create({
      primary_concept_type: 'membership',
      program_id: 'prm_48ec2f25-74e1-406a-a42f-4636bcce7877',
      student_id: '0b313f5a-1023-47e4-9b96-82efa61363be',
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
    const response = await client.ledger.create({
      primary_concept_type: 'membership',
      program_id: 'prm_48ec2f25-74e1-406a-a42f-4636bcce7877',
      student_id: '0b313f5a-1023-47e4-9b96-82efa61363be',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      discount_id: '0b313f5a-1023-47e4-9b96-82efa61363be',
      discount_items: [
        {
          amount: 10,
          on_inscription: true,
          on_memberships: false,
          pay_date: '2023-11-10',
          pay_type: 'integer',
          external_id: '2a09691a-a473-46de-b0a7-45269007c59c',
          metadata: { id_alumno: '123abc' },
        },
      ],
      external_id: '2a09691a-a473-46de-b0a7-45269007c59c',
      items: [
        {
          amount: 10,
          pay_date: '2023-11-10',
          external_id: '2a09691a-a473-46de-b0a7-45269007c59c',
          metadata: { id_alumno: '123abc' },
        },
      ],
      metadata: { id_alumno: '123abc' },
      primary_concept_id: '0b313f5a-1023-47e4-9b96-82efa61363be',
      scholarship_id: '0b313f5a-1023-47e4-9b96-82efa61363be',
      scholarship_items: [
        {
          amount: 10,
          on_inscription: true,
          on_memberships: false,
          pay_date: '2023-11-10',
          pay_type: 'integer',
          external_id: '2a09691a-a473-46de-b0a7-45269007c59c',
          metadata: { id_alumno: '123abc' },
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.ledger.retrieve('746d02b2-a682-461d-893c-d1fc0b917633', {
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
    const response = await client.ledger.retrieve('746d02b2-a682-461d-893c-d1fc0b917633', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
    });
  });

  // Prism tests are disabled
  test.skip('update: only required params', async () => {
    const responsePromise = client.ledger.update({
      ledger_id: '0b313f5a-1023-47e4-9b96-82efa61363be',
      primary_concept_type: 'membership',
      program_id: 'prm_48ec2f25-74e1-406a-a42f-4636bcce7877',
      student_id: '0b313f5a-1023-47e4-9b96-82efa61363be',
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
    const response = await client.ledger.update({
      ledger_id: '0b313f5a-1023-47e4-9b96-82efa61363be',
      primary_concept_type: 'membership',
      program_id: 'prm_48ec2f25-74e1-406a-a42f-4636bcce7877',
      student_id: '0b313f5a-1023-47e4-9b96-82efa61363be',
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      discount_id: '0b313f5a-1023-47e4-9b96-82efa61363be',
      discount_items: [
        {
          amount: 10,
          on_inscription: true,
          on_memberships: false,
          pay_date: '2023-11-10',
          pay_type: 'integer',
          external_id: '2a09691a-a473-46de-b0a7-45269007c59c',
          metadata: { id_alumno: '123abc' },
        },
      ],
      external_id: '2a09691a-a473-46de-b0a7-45269007c59c',
      items: [
        {
          amount: 10,
          pay_date: '2023-11-10',
          external_id: '2a09691a-a473-46de-b0a7-45269007c59c',
          metadata: { id_alumno: '123abc' },
        },
      ],
      metadata: { id_alumno: '123abc' },
      primary_concept_id: '0b313f5a-1023-47e4-9b96-82efa61363be',
      scholarship_id: '0b313f5a-1023-47e4-9b96-82efa61363be',
      scholarship_items: [
        {
          amount: 10,
          on_inscription: true,
          on_memberships: false,
          pay_date: '2023-11-10',
          pay_type: 'integer',
          external_id: '2a09691a-a473-46de-b0a7-45269007c59c',
          metadata: { id_alumno: '123abc' },
        },
      ],
    });
  });

  // Prism tests are disabled
  test.skip('list: only required params', async () => {
    const responsePromise = client.ledger.list({
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
    const response = await client.ledger.list({
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
      q: 'q',
    });
  });
});
