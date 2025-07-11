// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'mattil-mcp/filtering';
import { asTextContentResult } from 'mattil-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Mattil from 'mattil';

export const metadata: Metadata = {
  resource: 'students',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/students/{studentID}',
};

export const tool: Tool = {
  name: 'update_students',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nActualizar estudiante y programa escolar\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/student',\n  $defs: {\n    student: {\n      allOf: [        {\n          $ref: '#/$defs/base'\n        }\n      ],\n      title: 'invoices.base'\n    },\n    base: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identificador único del registro'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Fecha y hora de creacion del registro',\n          format: 'date-time'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Fecha y hora de creacion del registro',\n          format: 'date-time'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    anyOf: [
      {
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
          document_type: {
            type: 'string',
            description:
              'Tipo de documento según el país - México(CURP, PASSPORT), Colombia(PASSPORT, CC, CE, NIT, TI, NIP, PPT), Ecuador(PASSPORT, RUC, CI).',
            enum: ['CURP', 'CI', 'RUC', 'NIT', 'PASSPORT', 'CC', 'CE', 'NIP', 'TI', 'PPT'],
          },
          first_last_name: {
            type: 'string',
            description: 'Primer apellido del estudiante',
          },
          grade: {
            type: 'string',
            description: 'Grado al que pertenece el alumno',
          },
          group: {
            type: 'string',
            description: 'Grupo al que pertenece el alumno',
          },
          name: {
            type: 'string',
            description: 'Nombre del estudiante',
          },
          second_last_name: {
            type: 'string',
            description: 'Segundo apellido del estudiante (opcional)',
          },
          tin: {
            type: 'string',
            description: 'Números de identificación fiscal',
          },
        },
      },
      {
        type: 'object',
        properties: {
          studentID: {
            type: 'string',
            description: 'ID del programa que se desea trabajar.',
          },
          body: {
            type: 'object',
          },
          campusID: {
            type: 'string',
          },
          periodID: {
            type: 'string',
            description: 'ID del periodo que se desea trabajar.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          studentID: {
            type: 'string',
            description: 'ID del programa que se desea trabajar.',
          },
          body: {
            type: 'object',
          },
          campusID: {
            type: 'string',
          },
          periodID: {
            type: 'string',
            description: 'ID del periodo que se desea trabajar.',
          },
        },
      },
      {
        type: 'object',
        properties: {
          studentID: {
            type: 'string',
            description: 'ID del programa que se desea trabajar.',
          },
          body: {
            type: 'object',
          },
          campusID: {
            type: 'string',
          },
          periodID: {
            type: 'string',
            description: 'ID del periodo que se desea trabajar.',
          },
        },
      },
    ],
    properties: {
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
  const { studentID, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.students.update(studentID, body)));
};

export default { metadata, tool, handler };
