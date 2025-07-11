// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Memberships extends APIResource {
  /**
   * Ofrece la lista de todos los Colegiatura disponibles en las escuelas y campus.
   *
   * @example
   * ```ts
   * const membership = await client.memberships.create({
   *   amount: 1000,
   *   name: 'Administración',
   *   pay_dates: ['2023-11-10'],
   *   payment_plan: 10,
   *   periodicity: 'monthly',
   *   program_id: 'prm_48ec2f25-74e1-406a-a42f-4636bcce7877',
   *   workday: false,
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  create(params: MembershipCreateParams, options?: RequestOptions): APIPromise<Membership> {
    const { campusID, periodID, ...body } = params;
    return this._client.post('/memberships', {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Brinda información detallada sobre un Colegiatura específico, identificado por
   * su ID.
   *
   * @example
   * ```ts
   * const membership = await client.memberships.retrieve(
   *   'mbs_4811e525-c590-45f7-96fa-e178a5a3ef3e',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  retrieve(
    membershipID: string,
    params: MembershipRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Membership> {
    const { campusID, periodID } = params;
    return this._client.get(path`/memberships/${membershipID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Actualización de datos de una Colegiatura
   *
   * @example
   * ```ts
   * const membership = await client.memberships.update(
   *   'mbs_4811e525-c590-45f7-96fa-e178a5a3ef3e',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  update(
    membershipID: string,
    params: MembershipUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Membership> {
    const { campusID, periodID, ...body } = params;
    return this._client.put(path`/memberships/${membershipID}`, {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Ofrece la lista de todos las Colegiaturas disponibles en las escuelas y campus.
   *
   * @example
   * ```ts
   * const memberships = await client.memberships.list({
   *   program_id: 'program_id',
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  list(params: MembershipListParams, options?: RequestOptions): APIPromise<MembershipListResponse> {
    const { campusID, periodID, ...query } = params;
    return this._client.get('/memberships', {
      query,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Eliminar una Colegiatura
   *
   * @example
   * ```ts
   * const membership = await client.memberships.delete(
   *   'mbs_4811e525-c590-45f7-96fa-e178a5a3ef3e',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  delete(
    membershipID: string,
    params: MembershipDeleteParams,
    options?: RequestOptions,
  ): APIPromise<MembershipDeleteResponse> {
    const { campusID, periodID } = params;
    return this._client.delete(path`/memberships/${membershipID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }
}

export interface Membership {
  id?: string;

  amount?: number;

  external_id?: string;

  /**
   * Campo arbitrario de datos de terceros
   */
  metadata?: unknown;

  name?: string;

  pay_dates?: Array<string>;

  payment_plan?: number;

  periodicity?: string;

  program_id?: string;

  workday?: boolean;
}

export interface Pagination {
  /**
   * Cantidad de registros por pagina
   */
  items?: number;

  /**
   * Pagina actual del total
   */
  page?: number;

  /**
   * Total de paginas restantes
   */
  total_pages?: number;
}

export interface MembershipListResponse {
  data?: Array<Membership>;

  items?: Pagination;
}

export interface MembershipDeleteResponse {
  /**
   * Colegiatura escolar eliminada
   */
  message?: string;
}

export interface MembershipCreateParams {
  /**
   * Body param:
   */
  amount: number;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  pay_dates: Array<string>;

  /**
   * Body param:
   */
  payment_plan: number;

  /**
   * Body param:
   */
  periodicity: string;

  /**
   * Body param:
   */
  program_id: string;

  /**
   * Body param:
   */
  workday: boolean;

  /**
   * Header param: ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * Header param: ID del periodo que se desea trabajar.
   */
  periodID: string;

  /**
   * Body param:
   */
  external_id?: string;

  /**
   * Body param: Campo arbitrario de datos de terceros
   */
  metadata?: unknown;
}

export interface MembershipRetrieveParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * ID del periodo que se desea trabajar.
   */
  periodID: string;
}

export interface MembershipUpdateParams {
  /**
   * Header param: ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * Header param: ID del periodo que se desea trabajar.
   */
  periodID: string;

  /**
   * Body param:
   */
  amount?: number;

  /**
   * Body param:
   */
  external_id?: string;

  /**
   * Body param: Campo arbitrario de datos de terceros
   */
  metadata?: unknown;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  pay_dates?: Array<string>;

  /**
   * Body param:
   */
  payment_plan?: number;

  /**
   * Body param:
   */
  periodicity?: string;

  /**
   * Body param:
   */
  program_id?: string;

  /**
   * Body param:
   */
  workday?: boolean;
}

export interface MembershipListParams {
  /**
   * Query param: Parametro requerido para consultar las inscripciones de un programa
   */
  program_id: string;

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

export interface MembershipDeleteParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * ID del periodo que se desea trabajar.
   */
  periodID: string;
}

export declare namespace Memberships {
  export {
    type Membership as Membership,
    type Pagination as Pagination,
    type MembershipListResponse as MembershipListResponse,
    type MembershipDeleteResponse as MembershipDeleteResponse,
    type MembershipCreateParams as MembershipCreateParams,
    type MembershipRetrieveParams as MembershipRetrieveParams,
    type MembershipUpdateParams as MembershipUpdateParams,
    type MembershipListParams as MembershipListParams,
    type MembershipDeleteParams as MembershipDeleteParams,
  };
}
