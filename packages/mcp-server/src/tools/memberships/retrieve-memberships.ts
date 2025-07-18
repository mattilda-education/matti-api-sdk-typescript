// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { Metadata, asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'memberships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/memberships/{membershipID}',
};

export const tool: Tool = {
  name: 'retrieve_memberships',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nBrinda información detallada sobre un Colegiatura específico, identificado por su ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/membership',\n  $defs: {\n    membership: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        amount: {\n          type: 'integer'\n        },\n        external_id: {\n          type: 'string'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Campo arbitrario de datos de terceros'\n        },\n        name: {\n          type: 'string'\n        },\n        pay_dates: {\n          type: 'array',\n          items: {\n            type: 'string',\n            format: 'date'\n          }\n        },\n        payment_plan: {\n          type: 'integer'\n        },\n        periodicity: {\n          type: 'string'\n        },\n        program_id: {\n          type: 'string'\n        },\n        workday: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      membershipID: {
        type: 'string',
        description: 'ID de la colegiatura que se desea trabajar.',
      },
      campusID: {
        type: 'string',
      },
      periodID: {
        type: 'string',
        description: 'ID del periodo que se desea trabajar.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['membershipID', 'campusID', 'periodID'],
  },
};

export const handler = async (client: Matti, args: Record<string, unknown> | undefined) => {
  const { membershipID, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.memberships.retrieve(membershipID, body)));
};

export default { metadata, tool, handler };
