// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'scholarships',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/scholarships/{scholarshipID}',
};

export const tool: Tool = {
  name: 'update_scholarships',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nActualización de datos de una Beca\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/scholarship',\n  $defs: {\n    scholarship: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        amount: {\n          type: 'integer'\n        },\n        apply_to_inscriptions: {\n          type: 'boolean'\n        },\n        apply_to_memberships: {\n          type: 'boolean'\n        },\n        description: {\n          type: 'string'\n        },\n        external_id: {\n          type: 'string'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Campo arbitrario de datos de terceros'\n        },\n        name: {\n          type: 'string'\n        },\n        program_id: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          enum: [            'active',\n            'deleted'\n          ]\n        },\n        type: {\n          type: 'string',\n          enum: [            'integer',\n            'percentage'\n          ]\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      scholarshipID: {
        type: 'string',
        description: 'ID de la beca que se desea trabajar.',
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
      apply_to_inscriptions: {
        type: 'boolean',
      },
      apply_to_memberships: {
        type: 'boolean',
      },
      description: {
        type: 'string',
      },
      external_id: {
        type: 'string',
      },
      metadata: {
        type: 'object',
        description: 'Campo arbitrario de datos de terceros',
      },
      name: {
        type: 'string',
      },
      program_id: {
        type: 'string',
      },
      type: {
        type: 'string',
        enum: ['integer', 'percentage'],
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
  const { scholarshipID, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.scholarships.update(scholarshipID, body)));
};

export default { metadata, tool, handler };
