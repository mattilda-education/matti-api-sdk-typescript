// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { Metadata, asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'inscriptions',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/inscriptions/{inscriptionID}',
};

export const tool: Tool = {
  name: 'update_inscriptions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nActualización de datos de una Inscripción\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/inscription',\n  $defs: {\n    inscription: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        amount: {\n          type: 'integer'\n        },\n        external_id: {\n          type: 'string'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Campo arbitrario de datos de terceros'\n        },\n        name: {\n          type: 'string'\n        },\n        pay_date: {\n          type: 'string',\n          format: 'date'\n        },\n        program_id: {\n          type: 'string'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      inscriptionID: {
        type: 'string',
        description: 'ID de la inscripcion que se desea trabajar.',
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
      pay_date: {
        type: 'string',
      },
      status: {
        type: 'string',
        description:
          'Estado del registro en la plataforma.\n- active: Indica que el registro esta 100% funcional y activado.\n- deleted: Indica que el registro se encuentra eliminado',
        enum: ['active', 'deleted'],
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
    required: ['inscriptionID', 'campusID', 'periodID'],
  },
};

export const handler = async (client: Matti, args: Record<string, unknown> | undefined) => {
  const { inscriptionID, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.inscriptions.update(inscriptionID, body)));
};

export default { metadata, tool, handler };
