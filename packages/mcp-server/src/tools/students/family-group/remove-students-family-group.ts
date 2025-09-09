// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { maybeFilter } from 'matti-mcp/filtering';
import { Metadata, asTextContentResult } from 'matti-mcp/tools/types';

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import Matti from 'matti';

export const metadata: Metadata = {
  resource: 'students.family_group',
  operation: 'write',
  tags: [],
  httpMethod: 'delete',
  httpPath: '/students/{student_id}/family_group/{parent_id}',
};

export const tool: Tool = {
  name: 'remove_students_family_group',
  description:
    "When using this tool, always use the `jq_filter` parameter to reduce the response size and improve performance.\n\nOnly omit if you're sure you don't need the data.\n\nDesasociar un padre de un estudiante\n\n# Response Schema\n```json\n{\n  type: 'array',\n  items: {\n    $ref: '#/$defs/user_with_information'\n  },\n  $defs: {\n    user_with_information: {\n      type: 'object',\n      properties: {\n        is_principal: {\n          type: 'boolean'\n        },\n        parent_id: {\n          type: 'string'\n        },\n        reason: {\n          type: 'string'\n        },\n        status: {\n          type: 'string'\n        },\n        user: {\n          type: 'object',\n          properties: {\n            id: {\n              type: 'string'\n            },\n            email: {\n              type: 'string'\n            },\n            full_name: {\n              type: 'string'\n            },\n            phone: {\n              type: 'string'\n            }\n          },\n          required: [            'id',\n            'email',\n            'full_name',\n            'phone'\n          ]\n        }\n      }\n    }\n  }\n}\n```",
  inputSchema: {
    type: 'object',
    properties: {
      student_id: {
        type: 'string',
      },
      parent_id: {
        type: 'string',
      },
      reason: {
        type: 'string',
      },
      jq_filter: {
        type: 'string',
        title: 'jq Filter',
        description:
          'A jq filter to apply to the response to include certain fields. Consult the output schema in the tool description to see the fields that are available.\n\nFor example: to include only the `name` field in every object of a results array, you can provide ".results[].name".\n\nFor more information, see the [jq documentation](https://jqlang.org/manual/).',
      },
    },
    required: ['student_id', 'parent_id', 'reason'],
  },
  annotations: {
    idempotentHint: true,
  },
};

export const handler = async (client: Matti, args: Record<string, unknown> | undefined) => {
  const { parent_id, jq_filter, ...body } = args as any;
  return asTextContentResult(
    await maybeFilter(jq_filter, await client.students.familyGroup.remove(parent_id, body)),
  );
};

export default { metadata, tool, handler };
