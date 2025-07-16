// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { Metadata, asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'users',
  operation: 'read',
  tags: [],
  httpMethod: 'get',
  httpPath: '/users/passwordless/{userID}',
};

export const tool: Tool = {
  name: 'create_passwordless_users',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nPermite crear un acceso sin contraseña.\n\n# Response Schema\n```json\n{\n  type: 'object',\n  properties: {\n    link: {\n      type: 'string',\n      description: 'Link de acceso sin contraseña'\n    }\n  },\n  required: []\n}\n```",
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
  const { userID, ...body } = args as any;
  return asTextContentResult(await maybeFilter(args, await client.users.createPasswordless(userID, body)));
};

export default { metadata, tool, handler };
