// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'inscriptions',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/inscriptions/{inscriptionID}',
};

export const tool: Tool = {
  name: 'retrieve_inscriptions',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nBrinda información detallada sobre una Inscripción específico, identificado por su ID.\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/inscription',\n  $defs: {\n    inscription: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        amount: {\n          type: 'integer'\n        },\n        external_id: {\n          type: 'string'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Campo arbitrario de datos de terceros'\n        },\n        name: {\n          type: 'string'\n        },\n        pay_date: {\n          type: 'string',\n          format: 'date'\n        },\n        program_id: {\n          type: 'string'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
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
  const { inscriptionID, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(args, await client.inscriptions.retrieve(inscriptionID, body)),
  );
};

export default { metadata, tool, handler };
