// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Matti from 'matti';

const client = new Matti({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource familyGroup', () => {
  // skipped: tests are disabled for the time being
  test.skip('list', async () => {
    const responsePromise = client.students.familyGroup.list('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: tests are disabled for the time being
  test.skip('add: only required params', async () => {
    const responsePromise = client.students.familyGroup.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      is_principal: true,
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('add: required and optional params', async () => {
    const response = await client.students.familyGroup.add('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      is_principal: true,
      user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('remove: only required params', async () => {
    const responsePromise = client.students.familyGroup.remove('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      student_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      reason: 'xxxxx',
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
  test.skip('remove: required and optional params', async () => {
    const response = await client.students.familyGroup.remove('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      student_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      reason: 'xxxxx',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('replace: only required params', async () => {
    const responsePromise = client.students.familyGroup.replace('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      student_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      old_user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('replace: required and optional params', async () => {
    const response = await client.students.familyGroup.replace('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      student_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
      old_user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('setPrincipal: only required params', async () => {
    const responsePromise = client.students.familyGroup.setPrincipal('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      student_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
  test.skip('setPrincipal: required and optional params', async () => {
    const response = await client.students.familyGroup.setPrincipal('182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e', {
      student_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
    });
  });
});
