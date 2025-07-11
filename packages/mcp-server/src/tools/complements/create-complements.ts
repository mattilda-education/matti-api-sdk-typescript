// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'complements',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/complements',
};

export const tool: Tool = {
  name: 'create_complements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nOfrece la lista de todos los complementos académicos disponibles en las escuelas y campus.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/complement',\n  $defs: {\n    complement: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        amount: {\n          type: 'integer'\n        },\n        end_date: {\n          type: 'string'\n        },\n        external_id: {\n          type: 'string'\n        },\n        frecuency: {\n          type: 'string',\n          enum: [            'unique',\n            'recurrent'\n          ]\n        },\n        items: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              pay_date: {\n                type: 'string'\n              }\n            },\n            required: []\n          }\n        },\n        metadata: {\n          type: 'object',\n          description: 'Campo arbitrario de datos de terceros'\n        },\n        name: {\n          type: 'string'\n        },\n        periodicity: {\n          type: 'string',\n          enum: [            'weekly',\n            'monthly',\n            'bimonthly',\n            'quarterly',\n            'semiannual',\n            'annual'\n          ]\n        },\n        program_id: {\n          type: 'string'\n        },\n        start_date: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'integer',
      },
      end_date: {
        type: 'string',
      },
      frecuency: {
        type: 'string',
        enum: ['unique', 'recurrent'],
      },
      name: {
        type: 'string',
      },
      pay_date: {
        type: 'string',
      },
      periodicity: {
        type: 'string',
        enum: ['weekly', 'monthly', 'bimonthly', 'quarterly', 'semiannual', 'annual'],
      },
      program_id: {
        type: 'string',
      },
      start_date: {
        type: 'string',
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
  },
};

export const handler = async (client: Matti, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.complements.create(body)));
};

export default { metadata, tool, handler };
