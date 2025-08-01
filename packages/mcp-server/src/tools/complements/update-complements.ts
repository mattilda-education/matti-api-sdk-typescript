// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { Metadata, asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'complements',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/complements/{complementID}',
};

export const tool: Tool = {
  name: 'update_complements',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nActualización de datos de un Complemento\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/complement',\n  $defs: {\n    complement: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        amount: {\n          type: 'integer'\n        },\n        end_date: {\n          type: 'string'\n        },\n        external_id: {\n          type: 'string'\n        },\n        frecuency: {\n          type: 'string',\n          enum: [            'unique',\n            'recurrent'\n          ]\n        },\n        items: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              pay_date: {\n                type: 'string'\n              }\n            }\n          }\n        },\n        metadata: {\n          type: 'object',\n          description: 'Campo arbitrario de datos de terceros'\n        },\n        name: {\n          type: 'string'\n        },\n        periodicity: {\n          type: 'string',\n          enum: [            'weekly',\n            'monthly',\n            'bimonthly',\n            'quarterly',\n            'semiannual',\n            'annual'\n          ]\n        },\n        program_id: {\n          type: 'string'\n        },\n        start_date: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      complementID: {
        type: 'string',
        description: 'ID del complemento que se desea trabajar.',
      },
      program_id: {
        type: 'string',
      },
      campusID: {
        type: 'string',
      },
      periodID: {
        type: 'string',
        description: 'ID del periodo que se desea trabajar.',
      },
      amount: {
        type: 'integer',
      },
      end_date: {
        type: 'string',
      },
      external_id: {
        type: 'string',
      },
      frecuency: {
        type: 'string',
        enum: ['unique', 'recurrent'],
      },
      metadata: {
        type: 'object',
        description: 'Campo arbitrario de datos de terceros',
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
      start_date: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['complementID', 'program_id', 'campusID', 'periodID'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Matti, args: Record<string, unknown> | undefined) => {
  const { complementID, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.complements.update(complementID, body)),
  );
};

export default { metadata, tool, handler };
