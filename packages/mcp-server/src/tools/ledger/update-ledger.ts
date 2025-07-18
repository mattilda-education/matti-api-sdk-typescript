// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { Metadata, asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'ledger',
  operation: 'write',
  tags: [],
  httpMethod: 'put',
  httpPath: '/ledger',
};

export const tool: Tool = {
  name: 'update_ledger',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nActualización de un Concepto\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/ledger_entries',\n  $defs: {\n    ledger_entries: {\n      allOf: [        {\n          $ref: '#/$defs/base'\n        }\n      ],\n      title: 'invoices.base'\n    },\n    base: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identificador único del registro'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Fecha y hora de creacion del registro',\n          format: 'date-time'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Fecha y hora de creacion del registro',\n          format: 'date-time'\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      ledger_id: {
        type: 'string',
        description: 'Identificador del Concepto',
      },
      primary_concept_type: {
        type: 'string',
        description: 'Concepto primario',
        enum: ['membership', 'inscription', 'complement'],
      },
      program_id: {
        type: 'string',
        description: 'Parametro requerido para consultar las inscripciones de un programa',
      },
      student_id: {
        type: 'string',
        description: 'Identificador del estudiante',
      },
      campusID: {
        type: 'string',
      },
      periodID: {
        type: 'string',
        description: 'ID del periodo que se desea trabajar.',
      },
      discount_id: {
        type: 'string',
        description: 'Identificador del descuento',
      },
      discount_items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            amount: {
              type: 'number',
            },
            on_inscription: {
              type: 'boolean',
            },
            on_memberships: {
              type: 'boolean',
            },
            pay_date: {
              type: 'string',
            },
            pay_type: {
              type: 'string',
              enum: ['integer', 'percentage'],
            },
            external_id: {
              type: 'string',
            },
            metadata: {
              type: 'object',
            },
          },
          required: ['amount', 'on_inscription', 'on_memberships', 'pay_date', 'pay_type'],
        },
      },
      external_id: {
        type: 'string',
      },
      items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            amount: {
              type: 'number',
            },
            pay_date: {
              type: 'string',
            },
            external_id: {
              type: 'string',
            },
            metadata: {
              type: 'object',
            },
          },
          required: ['amount', 'pay_date'],
        },
      },
      metadata: {
        type: 'object',
      },
      primary_concept_id: {
        type: 'string',
        description: 'Identificador del concepto primario',
      },
      scholarship_id: {
        type: 'string',
        description: 'Identificador de la beca',
      },
      scholarship_items: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            amount: {
              type: 'number',
            },
            on_inscription: {
              type: 'boolean',
            },
            on_memberships: {
              type: 'boolean',
            },
            pay_date: {
              type: 'string',
            },
            pay_type: {
              type: 'string',
              enum: ['integer', 'percentage'],
            },
            external_id: {
              type: 'string',
            },
            metadata: {
              type: 'object',
            },
          },
          required: ['amount', 'on_inscription', 'on_memberships', 'pay_date', 'pay_type'],
        },
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['ledger_id', 'primary_concept_type', 'program_id', 'student_id', 'campusID', 'periodID'],
  },
};

export const handler = async (client: Matti, args: Record<string, unknown> | undefined) => {
  const body = args as any;
  return asTextContentResult(await maybeFilter(args, await client.ledger.update(body)));
};

export default { metadata, tool, handler };
