// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'mattil-mcp/filtering';
import { asTextContentResult } from 'mattil-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Mattil from 'mattil';

export const metadata: Metadata = {
  resource: 'periods',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/periods/{period_ID}',
};

export const tool: Tool = {
  name: 'update_periods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nActualización de datos de un periodo\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/period',\n  $defs: {\n    period: {\n      type: 'object',\n      properties: {\n        campus_id: {\n          type: 'string'\n        },\n        end_date: {\n          type: 'string'\n        },\n        is_default: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        parent_id: {\n          type: 'string'\n        },\n        'start_date\"': {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          enum: [            'active',\n            'inactive',\n            'deleted'\n          ]\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      period_ID: {
        type: 'string',
        description: 'ID del periodo que se desea trabajar.',
      },
      campusID: {
        type: 'string',
      },
      ES: {
        type: 'object',
        properties: {
          end_date: {
            type: 'string',
            format: 'date',
          },
          name: {
            type: 'string',
          },
          start_date: {
            type: 'string',
            format: 'date',
          },
        },
        required: [],
      },
      K12: {
        type: 'object',
        properties: {
          default_plan: {
            type: 'string',
          },
          due_date: {
            type: 'integer',
          },
          end_date: {
            type: 'string',
            format: 'date',
          },
          name: {
            type: 'string',
          },
          paid_plans: {
            type: 'object',
            properties: {
              plan_10_memberships: {
                type: 'boolean',
              },
              plan_11_memberships: {
                type: 'boolean',
              },
              plan_12_memberships: {
                type: 'boolean',
              },
            },
            required: [],
          },
          programs: {
            type: 'object',
            properties: {
              bachelorship: {
                type: 'boolean',
              },
              maternal: {
                type: 'boolean',
              },
              pre_maternal: {
                type: 'boolean',
              },
              pre_primary: {
                type: 'boolean',
              },
              pre_school: {
                type: 'boolean',
              },
              primary: {
                type: 'boolean',
              },
              secondary: {
                type: 'boolean',
              },
            },
            required: [],
          },
          properties: {
            type: 'object',
          },
          start_date: {
            type: 'string',
            format: 'date',
          },
          workday: {
            type: 'boolean',
          },
        },
        required: [],
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

export const handler = async (client: Mattil, args: Record<string, unknown> | undefined) => {
  const { period_ID, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.periods.update(period_ID, body)));
};

export default { metadata, tool, handler };
