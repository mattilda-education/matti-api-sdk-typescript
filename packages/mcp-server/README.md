# Mattil TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Building

Because it's not published yet, clone the repo and build it:

```sh
git clone git@github.com:stainless-sdks/mattil-typescript.git
cd mattil-typescript
./scripts/bootstrap
./scripts/build
```

### Running

```sh
# set env vars as needed
export MATTIL_API_KEY="My API Key"
export MATTIL_ENVIRONMENT="production"
node ./packages/mcp-server/dist/index.js
```

> [!NOTE]
> Once this package is [published to npm](https://www.stainless.com/docs/guides/publish), this will become: `npx -y mattil-mcp`

### Via MCP Client

[Build the project](#building) as mentioned above.

There is a partial list of existing clients at [modelcontextprotocol.io](https://modelcontextprotocol.io/clients). If you already
have a client, consult their documentation to install the MCP server.

For clients with a configuration JSON, it might look something like this:

```json
{
  "mcpServers": {
    "mattil_api": {
      "command": "node",
      "args": ["/path/to/local/mattil-typescript/packages/mcp-server", "--client=claude", "--tools=dynamic"],
      "env": {
        "MATTIL_API_KEY": "My API Key",
        "MATTIL_ENVIRONMENT": "production"
      }
    }
  }
}
```

## Exposing endpoints to your MCP Client

There are two ways to expose endpoints as tools in the MCP server:

1. Exposing one tool per endpoint, and filtering as necessary
2. Exposing a set of tools to dynamically discover and invoke endpoints from the API

### Filtering endpoints and tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

### Dynamic tools

If you specify `--tools=dynamic` to the MCP server, instead of exposing one tool per endpoint in the API, it will
expose the following tools:

1. `list_api_endpoints` - Discovers available endpoints, with optional filtering by search query
2. `get_api_endpoint_schema` - Gets detailed schema information for a specific endpoint
3. `invoke_api_endpoint` - Executes any endpoint with the appropriate parameters

This allows you to have the full set of API endpoints available to your MCP Client, while not requiring that all
of their schemas be loaded into context at once. Instead, the LLM will automatically use these tools together to
search for, look up, and invoke endpoints dynamically. However, due to the indirect nature of the schemas, it
can struggle to provide the correct properties a bit more than when tools are imported explicitly. Therefore,
you can opt-in to explicit tools, the dynamic tools, or both.

See more information with `--help`.

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

### Specifying the MCP Client

Different clients have varying abilities to handle arbitrary tools and schemas.

You can specify the client you are using with the `--client` argument, and the MCP server will automatically
serve tools and schemas that are more compatible with that client.

- `--client=<type>`: Set all capabilities based on a known MCP client

  - Valid values: `openai-agents`, `claude`, `claude-code`, `cursor`
  - Example: `--client=cursor`

Additionally, if you have a client not on the above list, or the client has gotten better
over time, you can manually enable or disable certain capabilities:

- `--capability=<name>`: Specify individual client capabilities
  - Available capabilities:
    - `top-level-unions`: Enable support for top-level unions in tool schemas
    - `valid-json`: Enable JSON string parsing for arguments
    - `refs`: Enable support for $ref pointers in schemas
    - `unions`: Enable support for union types (anyOf) in schemas
    - `formats`: Enable support for format validations in schemas (e.g. date-time, email)
    - `tool-name-length=N`: Set maximum tool name length to N characters
  - Example: `--capability=top-level-unions --capability=tool-name-length=40`
  - Example: `--capability=top-level-unions,tool-name-length=40`

### Examples

1. Filter for read operations on cards:

```bash
--resource=cards --operation=read
```

2. Exclude specific tools while including others:

```bash
--resource=cards --no-tool=create_cards
```

3. Configure for Cursor client with custom max tool name length:

```bash
--client=cursor --capability=tool-name-length=40
```

4. Complex filtering with multiple criteria:

```bash
--resource=cards,accounts --operation=read --tag=kyc --no-tool=create_cards
```

## Importing the tools and server individually

```js
// Import the server, generated endpoints, or the init function
import { server, endpoints, init } from "mattil-mcp/server";

// import a specific tool
import updateSchools from "mattil-mcp/tools/schools/update-schools";

// initialize the server and all endpoints
init({ server, endpoints });

// manually start server
const transport = new StdioServerTransport();
await server.connect(transport);

// or initialize your own server with specific tools
const myServer = new McpServer(...);

// define your own endpoint
const myCustomEndpoint = {
  tool: {
    name: 'my_custom_tool',
    description: 'My custom tool',
    inputSchema: zodToJsonSchema(z.object({ a_property: z.string() })),
  },
  handler: async (client: client, args: any) => {
    return { myResponse: 'Hello world!' };
  })
};

// initialize the server with your custom endpoints
init({ server: myServer, endpoints: [updateSchools, myCustomEndpoint] });
```

## Available Tools

The following tools are available in this MCP server.

### Resource `schools`:

- `update_schools` (`write`): Se pueden actualizar los datos de la escuela
- `list_schools` (`read`): Este endpoint permite obtener la lista de todas las escuelas registradas en el sistema.

### Resource `campuses`:

- `create_campuses` (`write`): Se crearan campus nuevos
- `retrieve_campuses` (`read`): Lista de todos los campus relacionados a una escuela, colegio o institución
- `update_campuses` (`write`): actualización de datos de campus
- `list_campuses` (`read`): Proporciona acceso a la información de todos los campus asociados a las escuelas.

### Resource `programs`:

- `create_programs` (`write`): Ofrece la lista de todos los programas académicos disponibles en las escuelas y campus.
- `retrieve_programs` (`read`): Brinda información detallada sobre un programa específico, identificado por su ID.
- `update_programs` (`write`): Actualización de datos de programa
- `list_programs` (`read`): Ofrece la lista de todos los programas académicos disponibles en las escuelas y campus.

### Resource `inscriptions`:

- `create_inscriptions` (`write`): Ofrece la lista de todos los Inscripción disponibles en las escuelas y campus.
- `retrieve_inscriptions` (`read`): Brinda información detallada sobre una Inscripción específico, identificado por su ID.
- `update_inscriptions` (`write`): Actualización de datos de una Inscripción
- `list_inscriptions` (`read`): Ofrece la lista de todos las Inscripciones disponibles en las escuelas y campus.
- `delete_inscriptions` (`write`): Eliminar una Inscripción

### Resource `memberships`:

- `create_memberships` (`write`): Ofrece la lista de todos los Colegiatura disponibles en las escuelas y campus.
- `retrieve_memberships` (`read`): Brinda información detallada sobre un Colegiatura específico, identificado por su ID.
- `update_memberships` (`write`): Actualización de datos de una Colegiatura
- `list_memberships` (`read`): Ofrece la lista de todos las Colegiaturas disponibles en las escuelas y campus.
- `delete_memberships` (`write`): Eliminar una Colegiatura

### Resource `complements`:

- `create_complements` (`write`): Ofrece la lista de todos los complementos académicos disponibles en las escuelas y campus.
- `retrieve_complements` (`read`): Brinda información detallada sobre un complemento específico, identificado por su ID.
- `update_complements` (`write`): Actualización de datos de un Complemento
- `list_complements` (`read`): Ofrece la lista de todos los programas académicos disponibles en las escuelas y campus.
- `delete_complements` (`write`): Elimina un Complemento

### Resource `scholarships`:

- `create_scholarships` (`write`): Ofrece la lista de todos los Becas disponibles en las escuelas y campus.
- `retrieve_scholarships` (`read`): Brinda información detallada sobre un Beca específico, identificado por su ID.
- `update_scholarships` (`write`): Actualización de datos de una Beca
- `list_scholarships` (`read`): Ofrece la lista de todos las Becas disponibles en las escuelas y campus.
- `delete_scholarships` (`write`): Eliminar una Beca

### Resource `discounts`:

- `create_discounts` (`write`): Ofrece la lista de todos los Descuento disponibles en las escuelas y campus.
- `retrieve_discounts` (`read`): Brinda información detallada sobre un Descuento específico, identificado por su ID.
- `update_discounts` (`write`): Actualización de datos de una Descuento
- `list_discounts` (`read`): Ofrece la lista de todos las Descuentos disponibles en las escuelas y campus.

### Resource `invoices`:

- `retrieve_invoices` (`read`): Proporciona detalles específicos de una factura en particular, identificada por su ID.
- `list_invoices` (`read`): Permite acceder a la lista de todas las facturas generadas en el sistema.

### Resource `payments`:

- `create_payments` (`write`): Reportar un pago
- `retrieve_payments` (`read`): Se listan obtienen los datos del programa.
- `list_payments` (`read`): Ofrece acceso a la lista de todos los pagos realizados.

### Resource `ledger`:

- `create_ledger` (`write`): Se crearan un concepto nuevos.
- `retrieve_ledger` (`read`): Permite obtener detalles específicos de una entrada en el registro contable, identificada por su ID.
- `update_ledger` (`write`): Actualización de un Concepto
- `list_ledger` (`read`): Listado de conceptos por Estuadiante

### Resource `students`:

- `create_students` (`write`): Registrar un nuevo estudiante bajo el campus.
- `retrieve_students` (`read`): Proporciona información detallada sobre un estudiante específico, identificado por su ID.
- `update_students` (`write`): Actualizar estudiante y programa escolar
- `list_students` (`read`): Ofrece la lista de todos los estudiantes registrados en el sistema.
- `delete_students` (`write`): Eliminar un Estudiante

### Resource `students.family_group`:

- `list_students_family_group` (`read`): Listar el grupo familiar de un estudiante
- `add_students_family_group` (`write`): Asociar un usuario al grupo familiar de un estudiante
- `remove_students_family_group` (`write`): Desasociar un padre de un estudiante
- `replace_students_family_group` (`write`): Reemplazar un usuario por otro en el grupo familiar de un estudiante
- `set_principal_students_family_group` (`write`): Establecer un usuario como principal en el grupo familiar de un estudiante

### Resource `users`:

- `create_users` (`write`): Crear Usuario
- `retrieve_users` (`read`): Brinda información detallada sobre un usuario específico, identificado por su ID.
- `update_users` (`write`): Actualizar Usuario
- `list_users` (`read`): Permite acceder a la lista de todos los usuarios registrados en el sistema.
- `delete_users` (`write`): Borrar Usuario
- `create_passwordless_users` (`read`): Permite crear un acceso sin contraseña.

### Resource `periods`:

- `create_periods` (`write`): Crear un nuevo periodo escolar
- `retrieve_periods` (`read`): Brinda información detallada sobre un periodo específico, identificado por su ID.
- `update_periods` (`write`): Actualización de datos de un periodo
- `list_periods` (`read`): Obtener una lista de periodos escolares
- `delete_periods` (`write`): Eliminar un Periodo
