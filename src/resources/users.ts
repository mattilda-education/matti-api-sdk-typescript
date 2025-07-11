// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as InvoicesAPI from './invoices';
import * as MembershipsAPI from './memberships';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Users extends APIResource {
  /**
   * Crear Usuario
   *
   * @example
   * ```ts
   * const users = await client.users.create({
   *   email: 'omar.martinez@mattilda.io',
   *   external_id: '123abc',
   *   first_last_name: 'Martinez',
   *   metadata: { id_alumno: '123abc' },
   *   name: 'Omar',
   *   phone: 'phone',
   *   tin: 'MAJO900607HDFRMM09',
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  create(params: UserCreateParams, options?: RequestOptions): APIPromise<UserCreateResponse> {
    const { campusID, periodID, ...body } = params;
    return this._client.post('/users', {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Brinda información detallada sobre un usuario específico, identificado por su
   * ID.
   *
   * @example
   * ```ts
   * const users = await client.users.retrieve(
   *   '2a584234-5839-4a3a-a5be-01a736e0503e',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  retrieve(
    userID: string,
    params: UserRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<UserRetrieveResponse> {
    const { campusID, periodID } = params;
    return this._client.get(path`/users/${userID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Actualizar Usuario
   *
   * @example
   * ```ts
   * const users = await client.users.update(
   *   '2a584234-5839-4a3a-a5be-01a736e0503e',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  update(userID: string, params: UserUpdateParams, options?: RequestOptions): APIPromise<UserUpdateResponse> {
    const { campusID, periodID, ...body } = params;
    return this._client.put(path`/users/${userID}`, {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Permite acceder a la lista de todos los usuarios registrados en el sistema.
   *
   * @example
   * ```ts
   * const users = await client.users.list({
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  list(params: UserListParams, options?: RequestOptions): APIPromise<UserListResponse> {
    const { campusID, periodID, ...query } = params;
    return this._client.get('/users', {
      query,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Borrar Usuario
   *
   * @example
   * ```ts
   * const user = await client.users.delete(
   *   '2a584234-5839-4a3a-a5be-01a736e0503e',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  delete(userID: string, params: UserDeleteParams, options?: RequestOptions): APIPromise<UserDeleteResponse> {
    const { campusID, periodID } = params;
    return this._client.delete(path`/users/${userID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Permite crear un acceso sin contraseña.
   *
   * @example
   * ```ts
   * const response = await client.users.createPasswordless(
   *   '2a584234-5839-4a3a-a5be-01a736e0503e',
   *   { campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec' },
   * );
   * ```
   */
  createPasswordless(
    userID: string,
    params: UserCreatePasswordlessParams,
    options?: RequestOptions,
  ): APIPromise<UserCreatePasswordlessResponse> {
    const { campusID } = params;
    return this._client.get(path`/users/passwordless/${userID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID }, options?.headers]),
    });
  }
}

export interface User extends InvoicesAPI.Base {
  /**
   * Tipo de documento.
   */
  document_type?: string;

  /**
   * Correo Electronico para el envio de facturas electronicas.
   */
  email?: string;

  /**
   * Campo arbitrario de datos de terceros
   */
  external_id?: string;

  /**
   * Indicador si el usuario esta en el proceso de registro en la plataforma.
   */
  is_on_boarding?: boolean;

  /**
   * Fecha y hora del ultimo ingreso del usuario a la plataforma.
   */
  last_login?: string;

  /**
   * Campo arbitrario de datos de terceros
   */
  metadata?: unknown;

  /**
   * Número de teléfono con codigo de pais del usuario.
   */
  phone?: string;

  /**
   * Números de Identificación fiscal.
   */
  tin?: string;

  /**
   * Identificador único que se utiliza para identificar y distinguir a un usuario
   * registrado en esa plataforma.
   */
  username?: string;
}

export type UserCreateResponse = Array<User>;

export type UserRetrieveResponse = Array<User>;

export type UserUpdateResponse = Array<User>;

export interface UserListResponse {
  data?: Array<User>;

  items?: MembershipsAPI.Pagination;
}

export interface UserDeleteResponse {
  /**
   * Usuario eliminado
   */
  message?: string;
}

export interface UserCreatePasswordlessResponse {
  /**
   * Link de acceso sin contraseña
   */
  link?: string;
}

export interface UserCreateParams {
  /**
   * Body param: Correo Electronico para el envio de facturas electronicas.
   */
  email: string;

  /**
   * Body param: Campo arbitrario de datos de terceros
   */
  external_id: string;

  /**
   * Body param: Apellido paterno de la persona, sea un estudiante o usuario.
   */
  first_last_name: string;

  /**
   * Body param: Campo arbitrario de datos de terceros
   */
  metadata: unknown;

  /**
   * Body param: Nombre(s) de la persona, estudiante o usuario.
   */
  name: string;

  /**
   * Body param: Número de teléfono con codigo de pais del usuario.
   */
  phone: string;

  /**
   * Body param: Números de Identificación fiscal.
   */
  tin: string;

  /**
   * Header param: ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * Header param: ID del periodo que se desea trabajar.
   */
  periodID: string;

  /**
   * Body param: Tipo de documento según el país - México(CURP, PASSPORT),
   * Colombia(PASSPORT, CC, CE, NIT, TI, NIP, PPT), Ecuador(PASSPORT, RUC, CI).
   */
  document_type?: 'CURP' | 'CI' | 'RUC' | 'NIT' | 'PASSPORT' | 'CC' | 'CE' | 'NIP' | 'TI' | 'PPT';

  /**
   * Body param: Apellido materno de la persona, estudiante o usuario.
   */
  second_last_name?: string;

  /**
   * Body param:
   */
  tax_data?: UserCreateParams.TaxData;
}

export namespace UserCreateParams {
  export interface TaxData {
    /**
     * Comprobante fiscal digital
     */
    cfdi_id?: string;

    /**
     * Nombre de la ciudad del responsable fiscal
     */
    city?: string;

    /**
     * Código del departamento de residencia
     */
    department_code?: string;

    /**
     * Este campo indica el tipo de documento
     */
    document_type?: string;

    /**
     * Email del responsable fiscal
     */
    email?: string;

    /**
     * Código de la ciudad o municipio
     */
    municipality_code?: string;

    /**
     * Nombre del responsable fiscal
     */
    name?: string;

    /**
     * Número de identificación del responsable fiscal
     */
    rfc?: string;

    /**
     * Este campo indica el estado o entidad federativa en la que se encuentra la
     * dirección.
     */
    state?: string;

    /**
     * Dirección del responsable fiscal
     */
    street?: string;

    /**
     * Este campo indica la colonia o barrio específico dentro de la ciudad donde se
     * encuentra la dirección.
     */
    suburb?: string;

    /**
     * Valor el régimen fiscal del responsable
     */
    tax_regime?: string;

    /**
     * Código postal del responsable fiscal
     */
    zip_code?: string;
  }
}

export interface UserRetrieveParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * ID del periodo que se desea trabajar.
   */
  periodID: string;
}

export interface UserUpdateParams {
  /**
   * Header param: ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * Header param: ID del periodo que se desea trabajar.
   */
  periodID: string;

  /**
   * Body param: Dirección del usuario.
   */
  address?: string;

  /**
   * Body param: Código de país del usuario.
   */
  country_code?: string;

  /**
   * Body param: Tipo de documento según el país - México(CURP, PASSPORT),
   * Colombia(PASSPORT, CC, CE, NIT, TI, NIP, PPT), Ecuador(PASSPORT, RUC, CI).
   */
  document_type?: 'CURP' | 'CI' | 'RUC' | 'NIT' | 'PASSPORT' | 'CC' | 'CE' | 'NIP' | 'TI' | 'PPT';

  /**
   * Body param: Correo Electronico para el envio de facturas electronicas.
   */
  email?: string;

  /**
   * Body param: Campo arbitrario de datos de terceros
   */
  external_id?: string;

  /**
   * Body param: Apellido paterno de la persona, sea un estudiante o usuario.
   */
  first_last_name?: string;

  /**
   * Body param: Inicio en la plataforma usuario.
   */
  is_on_boarding?: boolean;

  /**
   * Body param: Idioma del usuario.
   */
  lang?: string;

  /**
   * Body param: Campo arbitrario de datos de terceros
   */
  metadata?: unknown;

  /**
   * Body param: Nombre(s) de la persona, estudiante o usuario.
   */
  name?: string;

  /**
   * Body param: Teléfono del usuario
   */
  phone?: string;

  /**
   * Body param: Referido del usuario.
   */
  referred_id?: string;

  /**
   * Body param: Apellido materno de la persona, estudiante o usuario.
   */
  second_last_name?: string;

  /**
   * Body param: Identificación del usuario fiscal.
   */
  tin?: string;
}

export interface UserListParams {
  /**
   * Header param: ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * Header param: ID del periodo que se desea trabajar.
   */
  periodID: string;

  /**
   * Query param: Parámetro para realizar búsquedas basadas en _key_ y _value_ de los
   * datos o dentro del metadata usando _metadata.key_=_value_. Los criterios de
   * búsqueda disponibles son:
   *
   * - name
   * - date_from
   * - date_to
   * - page
   * - status
   * - external_id
   * - metadata Puedes proporcionar múltiples criterios separados por espacio.
   *   Ejemplo: `external_id=123456 metadata.student_curp=12345`
   */
  q?: string;
}

export interface UserDeleteParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * ID del periodo que se desea trabajar.
   */
  periodID: string;
}

export interface UserCreatePasswordlessParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;
}

export declare namespace Users {
  export {
    type User as User,
    type UserCreateResponse as UserCreateResponse,
    type UserRetrieveResponse as UserRetrieveResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserListResponse as UserListResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserCreatePasswordlessResponse as UserCreatePasswordlessResponse,
    type UserCreateParams as UserCreateParams,
    type UserRetrieveParams as UserRetrieveParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserCreatePasswordlessParams as UserCreatePasswordlessParams,
  };
}
