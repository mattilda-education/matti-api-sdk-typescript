// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'mattil-mcp/filtering';
import { asTextContentResult } from 'mattil-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Mattil from 'mattil';

export const metadata: Metadata = {
  resource: 'campuses',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/campuses',
};

export const tool: Tool = {
  name: 'list_campuses',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nProporciona acceso a la información de todos los campus asociados a las escuelas.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/campus'\n  },\n  $defs: {\n    campus: {\n      type: 'object',\n      properties: {\n        campusID: {\n          type: 'integer',\n          description: 'Identificador del Campus'\n        },\n        example: {\n          type: 'object'\n        },\n        external_id: {\n          type: 'string',\n          description: 'Campo arbitrario de una llave primaria de un sistema externo'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Campo arbitrario de datos de terceros'\n        },\n        name: {\n          type: 'string',\n          description: 'Nombre de campus'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      campusID: {
        type: 'string',
      },
      q: {
        type: 'string',
        description:
          'Parámetro para realizar búsquedas basadas en *key* y *value* de los datos o dentro del metadata usando *metadata.key*=*value*.\nLos criterios de búsqueda disponibles son:\n- name\n- date_from\n- date_to\n- page\n- status\n- external_id\n- metadata\nPuedes proporcionar múltiples criterios separados por espacio. Ejemplo: `external_id=123456 metadata.student_curp=12345`\n',
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
  return asTextContentResult(await maybeFilter(args, await client.campuses.list(body)));
};

export default { metadata, tool, handler };
