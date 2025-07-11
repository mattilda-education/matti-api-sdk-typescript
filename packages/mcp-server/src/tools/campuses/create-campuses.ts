// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'campuses',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/campuses',
};

export const tool: Tool = {
  name: 'create_campuses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nSe crearan campus nuevos\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/campus',\n  $defs: {\n    campus: {\n      type: 'object',\n      properties: {\n        campusID: {\n          type: 'integer',\n          description: 'Identificador del Campus'\n        },\n        example: {\n          type: 'object'\n        },\n        external_id: {\n          type: 'string',\n          description: 'Campo arbitrario de una llave primaria de un sistema externo'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Campo arbitrario de datos de terceros'\n        },\n        name: {\n          type: 'string',\n          description: 'Nombre de campus'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      address: {
        type: 'string',
        description: 'Dirección de campus',
      },
      name: {
        type: 'string',
        description: 'Nombre de campus',
      },
      time_zone: {
        type: 'string',
        description: 'Zona horaria',
        enum: [
          'America/Mexico_City',
          'America/Cancun',
          'America/Tijuana',
          'America/Hermosillo',
          'America/Matamoros',
          'America/Ciudad_Juarez',
          'America/Bogota',
          'America/Guayaquil',
          'Pacific/Galapagos',
        ],
      },
      zipcode: {
        type: 'string',
        description: 'Este campo indica el código postal asociado a la dirección.',
      },
      campusID: {
        type: 'string',
      },
      external_id: {
        type: 'string',
        description: 'Campo arbitrario de una llave primaria de un sistema externo',
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
  return asTextContentResult(await maybeFilter(args, await client.campuses.create(body)));
};

export default { metadata, tool, handler };
