// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { Metadata, asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'scholarships',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/scholarships',
};

export const tool: Tool = {
  name: 'list_scholarships',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nOfrece la lista de todos las Becas disponibles en las escuelas y campus.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    data: {\n      type: 'array',\n      items: {\n        $ref: '#/$defs/scholarship'\n      }\n    },\n    items: {\n      $ref: '#/$defs/pagination'\n    }\n  },\n  $defs: {\n    scholarship: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string'\n        },\n        amount: {\n          type: 'integer'\n        },\n        apply_to_inscriptions: {\n          type: 'boolean'\n        },\n        apply_to_memberships: {\n          type: 'boolean'\n        },\n        description: {\n          type: 'string'\n        },\n        external_id: {\n          type: 'string'\n        },\n        metadata: {\n          type: 'object',\n          description: 'Campo arbitrario de datos de terceros'\n        },\n        name: {\n          type: 'string'\n        },\n        program_id: {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          enum: [            'active',\n            'deleted'\n          ]\n        },\n        type: {\n          type: 'string',\n          enum: [            'integer',\n            'percentage'\n          ]\n        }\n      }\n    },\n    pagination: {\n      type: 'object',\n      properties: {\n        items: {\n          type: 'integer',\n          description: 'Cantidad de registros por pagina'\n        },\n        page: {\n          type: 'integer',\n          description: 'Pagina actual del total'\n        },\n        total_pages: {\n          type: 'integer',\n          description: 'Total de paginas restantes'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      program_id: {
        type: 'string',
        description: 'Parametro requerido para consultar las inscripciones de un programa',
      },
      campusID: {
        type: 'string',
      },
      periodID: {
        type: 'string',
        description: 'ID del periodo que se desea trabajar.',
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
    required: ['program_id', 'campusID', 'periodID'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Matti, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.scholarships.list(body)));
};

export default { metadata, tool, handler };
