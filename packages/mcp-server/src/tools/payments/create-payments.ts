// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { Metadata, asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'payments',
  operation: 'write',
  tags: [],
  httpMethod: 'post',
  httpPath: '/payments',
};

export const tool: Tool = {
  name: 'create_payments',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nReportar un pago\n\n# Response Schema\n```json\n{\n  $ref: '#/$defs/payment_entry',\n  $defs: {\n    payment_entry: {\n      allOf: [        {\n          $ref: '#/$defs/base'\n        }\n      ],\n      title: 'invoices.base'\n    },\n    base: {\n      type: 'object',\n      properties: {\n        id: {\n          type: 'string',\n          description: 'Identificador único del registro'\n        },\n        created_at: {\n          type: 'string',\n          description: 'Fecha y hora de creacion del registro',\n          format: 'date-time'\n        },\n        updated_at: {\n          type: 'string',\n          description: 'Fecha y hora de creacion del registro',\n          format: 'date-time'\n        }\n      },\n      required: []\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      amount: {
        type: 'number',
        description: 'Monto de pago complento o pendiente de la entrada',
      },
      invoiceEmitted: {
        type: 'boolean',
        description: 'Si desea generar factura.',
      },
      ledger_id: {
        type: 'string',
        description: 'Id del invoice que desea registrar el pago',
      },
      method: {
        type: 'string',
        description: 'Tipo de entrada, Colegitura, Inscripcion, Complemento',
        enum: ['debit card', 'credit card', 'transfer', 'cash'],
      },
      paymentDate: {
        type: 'string',
        description: 'Fecha de recepcion del pago',
        format: 'date',
      },
      ticketReference: {
        type: 'string',
        description: 'Identificador del metodo de pago.',
      },
      campusID: {
        type: 'string',
      },
      periodID: {
        type: 'string',
        description: 'ID del periodo que se desea trabajar.',
      },
      external_id: {
        type: 'string',
        description: 'Campo arbitrario de datos de terceros',
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
  return asTextContentResult(await maybeFilter(args, await client.payments.create(body)));
};

export default { metadata, tool, handler };
