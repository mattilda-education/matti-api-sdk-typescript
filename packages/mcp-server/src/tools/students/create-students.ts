// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'students',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/students',
};

export const tool: Tool = {
  name: 'create_students',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nRegistrar un nuevo estudiante bajo el campus.\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/student'\n  },\n  $defs: {\n    student: {\n      allOf: [        {\n          $ref: '#/$defs/base'\n        }\n      ],\n      title: 'invoices.base'\n    },\n    base: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identificador único del registro'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Fecha y hora de creacion del registro',\n          format: 'date-time'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Fecha y hora de creacion del registro',\n          format: 'date-time'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      first_last_name: {
        type: 'string',
        description: 'Apellido paterno de la persona, sea un estudiante o usuario.',
      },
      name: {
        type: 'string',
        description: 'Nombre(s) de la persona, estudiante o usuario.',
      },
      parent_id: {
        type: 'string',
        description: 'ID del Usuario que se desea relacionar al Estudiante.',
      },
      programID: {
        type: 'string',
        description: 'ID del Programa al que se va a relacionar.',
      },
      tin: {
        type: 'string',
        description: 'Números de identificación del estudiante.',
      },
      campusID: {
        type: 'string',
      },
      periodID: {
        type: 'string',
        description: 'ID del periodo que se desea trabajar.',
      },
      complementID: {
        type: 'string',
        description: 'ID del Complemento al que se va a relacionar.',
      },
      discountID: {
        type: 'string',
        description: 'ID del Descuento al que se va a relacionar.',
      },
      document_type: {
        type: 'string',
        description:
          'Tipo de documento según el país - México(CURP, PASSPORT), Colombia(PASSPORT, CC, CE, NIT, TI, NIP, PPT), Ecuador(PASSPORT, RUC, CI).',
        enum: ['CURP', 'CI', 'RUC', 'NIT', 'PASSPORT', 'CC', 'CE', 'NIP', 'TI', 'PPT'],
      },
      enrollment: {
        type: 'string',
        description:
          'Codigo o numero de la inscripción o matriculación del estudiante en el centro educativo.',
      },
      external_id: {
        type: 'string',
        description: 'Campo arbitrario de datos de terceros',
      },
      grade: {
        type: 'string',
        description: 'Grado que cursa el estudiante.',
      },
      group: {
        type: 'string',
        description: 'Grupo que del estudiante.',
      },
      inscriptionID: {
        type: 'string',
        description: 'ID del Inscripcion al que se va a relacionar.',
      },
      membershipID: {
        type: 'string',
        description: 'ID del Colegiatura al que se va a relacionar.',
      },
      metadata: {
        type: 'object',
        description: 'Campo arbitrario de datos de terceros',
      },
      preloaded: {
        type: 'boolean',
        description: 'Precarga de alumnos',
      },
      scholarshipID: {
        type: 'string',
        description: 'ID del Beca al que se va a relacionar.',
      },
      second_last_name: {
        type: 'string',
        description: 'Apellido materno de la persona, estudiante o usuario.',
      },
      surchargeID: {
        type: 'string',
        description: 'ID del Recargo al que se va a relacionar.',
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
  return asTextContentResult(await maybeFilter(args, await client.students.create(body)));
};

export default { metadata, tool, handler };
