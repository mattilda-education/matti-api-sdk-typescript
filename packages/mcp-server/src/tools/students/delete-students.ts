// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { Metadata, asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'students',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/students/{studentID}',
};

export const tool: Tool = {
  name: 'delete_students',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEliminar un Estudiante\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    campus_id: {\n      type: 'string',\n      description: 'Identificador del campus'\n    },\n    deleted_invoices: {\n      type: 'object',\n      description: 'Lista de conceptos eliminados'\n    },\n    student_id: {\n      type: 'string',\n      description: 'Identificador del estudiante'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      studentID: {
        type: 'string',
        description: 'ID del programa que se desea trabajar.',
      },
      campusID: {
        type: 'string',
      },
      periodID: {
        type: 'string',
        description: 'ID del periodo que se desea trabajar.',
      },
      date_from: {
        type: 'string',
        description: 'Fecha desde la cual se dará de baja',
        format: 'date',
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
  const { studentID, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.students.delete(studentID, body)));
};

export default { metadata, tool, handler };
