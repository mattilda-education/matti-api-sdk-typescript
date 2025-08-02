// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { Metadata, asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/users/{userID}',
};

export const tool: Tool = {
  name: 'update_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nActualizar Usuario\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/user'\n  },\n  $defs: {\n    user: {\n      allOf: [        {\n          $ref: '#/$defs/base'\n        }\n      ],\n      title: 'invoices.base'\n    },\n    base: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identificador único del registro'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Fecha y hora de creacion del registro',\n          format: 'date-time'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Fecha y hora de creacion del registro',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      userID: {
        type: 'string',
        description: 'ID del Usuario que se desea trabajar.',
      },
      campusID: {
        type: 'string',
      },
      periodID: {
        type: 'string',
        description: 'ID del periodo que se desea trabajar.',
      },
      address: {
        type: 'string',
        description: 'Dirección del usuario.',
      },
      country_code: {
        type: 'string',
        description: 'Código de país del usuario.',
      },
      document_type: {
        type: 'string',
        description:
          'Tipo de documento según el país - México(CURP, PASSPORT), Colombia(PASSPORT, CC, CE, NIT, TI, NIP, PPT), Ecuador(PASSPORT, RUC, CI).',
        enum: ['CURP', 'CI', 'RUC', 'NIT', 'PASSPORT', 'CC', 'CE', 'NIP', 'TI', 'PPT'],
      },
      email: {
        type: 'string',
        description: 'Correo Electronico para el envio de facturas electronicas.',
      },
      external_id: {
        type: 'string',
        description: 'Campo arbitrario de datos de terceros',
      },
      first_last_name: {
        type: 'string',
        description: 'Apellido paterno de la persona, sea un estudiante o usuario.',
      },
      is_on_boarding: {
        type: 'boolean',
        description: 'Inicio en la plataforma usuario.',
      },
      lang: {
        type: 'string',
        description: 'Idioma del usuario.',
      },
      metadata: {
        type: 'object',
        description: 'Campo arbitrario de datos de terceros',
      },
      name: {
        type: 'string',
        description: 'Nombre(s) de la persona, estudiante o usuario.',
      },
      phone: {
        type: 'string',
        description: 'Teléfono del usuario',
      },
      referred_id: {
        type: 'string',
        description: 'Referido del usuario.',
      },
      second_last_name: {
        type: 'string',
        description: 'Apellido materno de la persona, estudiante o usuario.',
      },
      tin: {
        type: 'string',
        description: 'Identificación del usuario fiscal.',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['userID', 'campusID', 'periodID'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Matti, args: Record<string, unknown> | undefined) => {
  const { userID, jq_filter, ...body } = args as any;
  return asTextContentResult(await maybeFilter(jq_filter, await client.users.update(userID, body)));
};

export default { metadata, tool, handler };
