// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { Metadata, asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'periods',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/periods',
};

export const tool: Tool = {
  name: 'list_periods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nObtener una lista de periodos escolares\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/period',\n  $defs: {\n    period: {\n      type: 'object',\n      properties: {\n        campus_id: {\n          type: 'string'\n        },\n        end_date: {\n          type: 'string'\n        },\n        is_default: {\n          type: 'boolean'\n        },\n        name: {\n          type: 'string'\n        },\n        parent_id: {\n          type: 'string'\n        },\n        'start_date\"': {\n          type: 'string'\n        },\n        status: {\n          type: 'string',\n          enum: [            'active',\n            'inactive',\n            'deleted'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
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
    required: ['campusID'],
  },
  annotations: {
    readOnlyHint: true,
  },
};

export const handler = async (client: Matti, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.periods.list(body)));
};

export default { metadata, tool, handler };
