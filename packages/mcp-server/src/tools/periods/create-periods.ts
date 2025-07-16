// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { Metadata, asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'periods',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/periods',
};

export const tool: Tool = {
  name: 'create_periods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCrear un nuevo periodo escolar\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/period_create'\n      }\n    },\n    items: {\n      $ref: '#/$defs/pagination'\n    }\n  },\n  required: [],\n  $defs: {\n    period_create: {\n      type: 'object',\n      properties: {\n        ES: {\n          type: 'object',\n          properties: {\n            end_date: {\n              type: 'string',\n              format: 'date'\n            },\n            name: {\n              type: 'string'\n            },\n            start_date: {\n              type: 'string',\n              format: 'date'\n            }\n          },\n          required: []\n        },\n        K12: {\n          type: 'object',\n          properties: {\n            default_plan: {\n              type: 'string'\n            },\n            due_date: {\n              type: 'integer'\n            },\n            end_date: {\n              type: 'string',\n              format: 'date'\n            },\n            name: {\n              type: 'string'\n            },\n            paid_plans: {\n              type: 'object',\n              properties: {\n                plan_10_memberships: {\n                  type: 'boolean'\n                },\n                plan_11_memberships: {\n                  type: 'boolean'\n                },\n                plan_12_memberships: {\n                  type: 'boolean'\n                }\n              },\n              required: []\n            },\n            programs: {\n              type: 'object',\n              properties: {\n                bachelorship: {\n                  type: 'boolean'\n                },\n                maternal: {\n                  type: 'boolean'\n                },\n                pre_maternal: {\n                  type: 'boolean'\n                },\n                pre_primary: {\n                  type: 'boolean'\n                },\n                pre_school: {\n                  type: 'boolean'\n                },\n                primary: {\n                  type: 'boolean'\n                },\n                secondary: {\n                  type: 'boolean'\n                }\n              },\n              required: []\n            },\n            start_date: {\n              type: 'string',\n              format: 'date'\n            },\n            workday: {\n              type: 'boolean'\n            }\n          },\n          required: []\n        }\n      },\n      required: []\n    },\n    pagination: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'integer',\n          description: 'Cantidad de registros por pagina'\n        },\n        page: {\n          type: 'integer',\n          description: 'Pagina actual del total'\n        },\n        total_pages: {\n          type: 'integer',\n          description: 'Total de paginas restantes'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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

export const handler = async (client: Matti, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.periods.create(body)));
};

export default { metadata, tool, handler };
