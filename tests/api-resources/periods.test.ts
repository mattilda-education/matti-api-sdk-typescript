// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Mattil from 'mattil';

const client = new Mattil({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource periods', () => {
  // skipped: tests are disabled for the time being
  test.skip('create: only required params', async () => {
    const responsePromise = client.periods.create({ campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec' });
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
    const response = await client.periods.create({
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      ES: { end_date: '2024-12-09', name: 'ES Academic Year 2024', start_date: '2024-12-09' },
      K12: {
        default_plan: 'Basic Plan',
        due_date: 30,
        end_date: '2024-12-09',
        name: 'K12 Academic Year 2024-2025',
        paid_plans: { plan_10_memberships: false, plan_11_memberships: true, plan_12_memberships: false },
        programs: {
          bachelorship: false,
          maternal: false,
          pre_maternal: false,
          pre_primary: false,
          pre_school: false,
          primary: true,
          secondary: false,
        },
        start_date: '2024-12-09',
        workday: true,
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('retrieve: only required params', async () => {
    const responsePromise = client.periods.retrieve('40335da4-85fe-4b98-9083-3502847dbe40', {
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
    const response = await client.periods.retrieve('40335da4-85fe-4b98-9083-3502847dbe40', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('update: only required params', async () => {
    const responsePromise = client.periods.update('40335da4-85fe-4b98-9083-3502847dbe40', {
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
    const response = await client.periods.update('40335da4-85fe-4b98-9083-3502847dbe40', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
      ES: { end_date: '2024-12-09', name: 'ES Academic Year 2024', start_date: '2024-12-09' },
      K12: {
        default_plan: 'Basic Plan',
        due_date: 30,
        end_date: '2024-12-09',
        name: 'K12 Academic Year 2024-2025',
        paid_plans: { plan_10_memberships: false, plan_11_memberships: true, plan_12_memberships: false },
        programs: {
          bachelorship: false,
          maternal: false,
          pre_maternal: false,
          pre_primary: false,
          pre_school: false,
          primary: true,
          secondary: false,
        },
        properties: {},
        start_date: '2024-12-09',
        workday: true,
      },
    });
  });

  // skipped: tests are disabled for the time being
  test.skip('list: only required params', async () => {
    const responsePromise = client.periods.list({ campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec' });
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
    const response = await client.periods.list({ campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec', q: 'q' });
  });

  // skipped: tests are disabled for the time being
  test.skip('delete: only required params', async () => {
    const responsePromise = client.periods.delete('40335da4-85fe-4b98-9083-3502847dbe40', {
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
  test.skip('delete: required and optional params', async () => {
    const response = await client.periods.delete('40335da4-85fe-4b98-9083-3502847dbe40', {
      campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
    });
  });
});
