// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'periods',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/periods/{period_ID}',
};

export const tool: Tool = {
  name: 'delete_periods',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nEliminar un Periodo\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    message: {\n      type: 'string',\n      description: 'Periodo escolar eliminado'\n    }\n  },\n  required: []\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      period_ID: {
        type: 'string',
        description: 'ID del periodo que se desea trabajar.',
      },
      campusID: {
        type: 'string',
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
  const { period_ID, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.periods.delete(period_ID, body)));
};

export default { metadata, tool, handler };
