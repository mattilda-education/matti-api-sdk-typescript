// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { Metadata, asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'memberships',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/memberships',
};

export const tool: Tool = {
  name: 'create_memberships',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nOfrece la lista de todos los Colegiatura disponibles en las escuelas y campus.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/membership',\n  $defs: {\n    membership: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        amount: {\n          type: 'integer'\n        },\n        external_id: {\n          type: 'string'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Campo arbitrario de datos de terceros'\n        },\n        name: {\n          type: 'string'\n        },\n        pay_dates: {\n          type: 'array',\n          items: {\n            type: 'string',\n            format: 'date'\n          }\n        },\n        payment_plan: {\n          type: 'integer'\n        },\n        periodicity: {\n          type: 'string'\n        },\n        program_id: {\n          type: 'string'\n        },\n        workday: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'integer',
      },
      name: {
        type: 'string',
      },
      pay_dates: {
        type: 'array',
        items: {
          type: 'string',
          format: 'date',
        },
      },
      payment_plan: {
        type: 'integer',
      },
      periodicity: {
        type: 'string',
      },
      program_id: {
        type: 'string',
      },
      workday: {
        type: 'boolean',
      },
      campusID: {
        type: 'string',
      },
      periodID: {
        type: 'string',
        description: 'ID del periodo que se desea trabajar.',
      },
      external_id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description: 'Campo arbitrario de datos de terceros',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: [
      'amount',
      'name',
      'pay_dates',
      'payment_plan',
      'periodicity',
      'program_id',
      'workday',
      'campusID',
      'periodID',
    ],
  },
  annotations: {},
};

export const handler = async (client: Matti, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.memberships.create(body)));
};

export default { metadata, tool, handler };
