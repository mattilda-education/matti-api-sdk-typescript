// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'mattil-mcp/filtering';
import { asTextContentResult } from 'mattil-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Mattil from 'matti';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/users',
};

export const tool: Tool = {
  name: 'create_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nCrear Usuario\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/user'\n  },\n  $defs: {\n    user: {\n      allOf: [        {\n          $ref: '#/$defs/base'\n        }\n      ],\n      title: 'invoices.base'\n    },\n    base: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identificador único del registro'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Fecha y hora de creacion del registro',\n          format: 'date-time'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Fecha y hora de creacion del registro',\n          format: 'date-time'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
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
        description: 'Número de teléfono con codigo de pais del usuario.',
      },
      tin: {
        type: 'string',
        description: 'Números de Identificación fiscal.',
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
      second_last_name: {
        type: 'string',
        description: 'Apellido materno de la persona, estudiante o usuario.',
      },
      tax_data: {
        type: 'object',
        properties: {
          cfdi_id: {
            type: 'string',
            description: 'Comprobante fiscal digital',
          },
          city: {
            type: 'string',
            description: 'Nombre de la ciudad del responsable fiscal',
          },
          department_code: {
            type: 'string',
            description: 'Código del departamento de residencia',
          },
          document_type: {
            type: 'string',
            description: 'Este campo indica el tipo de documento',
          },
          email: {
            type: 'string',
            description: 'Email del responsable fiscal',
          },
          municipality_code: {
            type: 'string',
            description: 'Código de la ciudad o municipio',
          },
          name: {
            type: 'string',
            description: 'Nombre del responsable fiscal',
          },
          rfc: {
            type: 'string',
            description: 'Número de identificación del responsable fiscal',
          },
          state: {
            type: 'string',
            description:
              'Este campo indica el estado o entidad federativa en la que se encuentra la dirección.',
          },
          street: {
            type: 'string',
            description: 'Dirección del responsable fiscal',
          },
          suburb: {
            type: 'string',
            description:
              'Este campo indica la colonia o barrio específico dentro de la ciudad donde se encuentra la dirección.',
          },
          tax_regime: {
            type: 'string',
            description: 'Valor el régimen fiscal del responsable',
          },
          zip_code: {
            type: 'string',
            description: 'Código postal del responsable fiscal',
          },
        },
        required: [],
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
  return asTextContentResult(await maybeFilter(args, await client.users.create(body)));
};

export default { metadata, tool, handler };
