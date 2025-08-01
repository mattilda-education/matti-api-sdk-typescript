// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { Metadata, asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'discounts',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/discounts',
};

export const tool: Tool = {
  name: 'create_discounts',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nOfrece la lista de todos los Descuento disponibles en las escuelas y campus.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/discount',\n  $defs: {\n    discount: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        apply_to_inscriptions: {\n          type: 'boolean'\n        },\n        apply_to_memberships: {\n          type: 'boolean'\n        },\n        external_id: {\n          type: 'string'\n        },\n        items: {\n          type: 'array',\n          items: {\n            type: 'object',\n            properties: {\n              amount: {\n                type: 'integer'\n              },\n              from_day: {\n                type: 'integer',\n                description: 'Hasta el día 30'\n              },\n              from_month: {\n                type: 'integer',\n                description: 'Hasta el mes 4'\n              },\n              max_date: {\n                type: 'integer',\n                description: 'Cuántos días se puede aplicar el Descuento'\n              },\n              not_apply_with_scholarship: {\n                type: 'boolean'\n              },\n              to_day: {\n                type: 'integer',\n                description: 'Después del primer día'\n              },\n              to_month: {\n                type: 'integer',\n                description: 'Después del primer mes'\n              },\n              type: {\n                type: 'string',\n                enum: [                  'integer',\n                  'percentage'\n                ]\n              }\n            }\n          }\n        },\n        metadata: {\n          type: 'object',\n          description: 'Campo arbitrario de datos de terceros'\n        },\n        name: {\n          type: 'string'\n        },\n        program_id: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          enum: [            'active',\n            'deleted'\n          ]\n        },\n        workday: {\n          type: 'boolean'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'integer',
      },
      apply_to_inscriptions: {
        type: 'boolean',
      },
      apply_to_memberships: {
        type: 'boolean',
      },
      max_date: {
        type: 'integer',
        description: 'Cuantos dias se puede aplicar el Descuento',
      },
      name: {
        type: 'string',
      },
      not_apply_with_scholarship: {
        type: 'boolean',
      },
      program_id: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['integer', 'percentage'],
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
      from_day: {
        type: 'integer',
        description: 'Hasta el dia 30',
      },
      from_month: {
        type: 'integer',
        description: 'Hasta el mes 4',
      },
      metadata: {
        type: 'object',
        description: 'Campo arbitrario de datos de terceros',
      },
      to_day: {
        type: 'integer',
        description: 'Despues del primer dia',
      },
      to_month: {
        type: 'integer',
        description: 'Despues del primer mes',
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
      'apply_to_inscriptions',
      'apply_to_memberships',
      'max_date',
      'name',
      'not_apply_with_scholarship',
      'program_id',
      'type',
      'workday',
      'campusID',
      'periodID',
    ],
  },
  annotations: {},
};

export const handler = async (client: Matti, args: Record<string, unknown> | undefined) => {
  const { jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.discounts.create(body)));
};

export default { metadata, tool, handler };
