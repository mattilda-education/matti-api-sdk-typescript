// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'mattil-mcp/filtering';
import { asTextContentResult } from 'mattil-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Mattil from 'matti';

export const metadata: Metadata = {
  resource: 'schools',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/schools',
};

export const tool: Tool = {
  name: 'update_schools',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSe pueden actualizar los datos de la escuela\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/school'\n  },\n  $defs: {\n    school: {\n      allOf: [        {\n          $ref: '#/$defs/base'\n        }\n      ],\n      title: 'invoices.base'\n    },\n    base: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identificador único del registro'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Fecha y hora de creacion del registro',\n          format: 'date-time'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Fecha y hora de creacion del registro',\n          format: 'date-time'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        description: 'Nombre de la institución o Grupo de Instituciones',
      },
      zipcode: {
        type: 'string',
        description: 'Este campo indica el código postal asociado a la dirección.',
      },
      campusID: {
        type: 'string',
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
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.schools.update(body)));
};

export default { metadata, tool, handler };
