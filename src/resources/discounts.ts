// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MembershipsAPI from './memberships';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Discounts extends APIResource {
  /**
   * Ofrece la lista de todos los Descuento disponibles en las escuelas y campus.
   *
   * @example
   * ```ts
   * const discount = await client.discounts.create({
   *   amount: 1000,
   *   apply_to_inscriptions: false,
   *   apply_to_memberships: true,
   *   max_date: 1000,
   *   name: 'Pronto Pago 5% quinto dia',
   *   not_apply_with_scholarship: false,
   *   program_id: 'prm_e6e39d8b-3edc-44d9-8283-28c2a3c8d59c',
   *   type: 'integer',
   *   workday: true,
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  create(params: DiscountCreateParams, options?: RequestOptions): APIPromise<Discount> {
    const { campusID, periodID, ...body } = params;
    return this._client.post('/discounts', {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Brinda información detallada sobre un Descuento específico, identificado por su
   * ID.
   *
   * @example
   * ```ts
   * const discount = await client.discounts.retrieve(
   *   'dsc_84f57a6d-c5b0-4150-bc32-0c26e520e2bd',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  retrieve(
    discountID: string,
    params: DiscountRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Discount> {
    const { campusID, periodID } = params;
    return this._client.get(path`/discounts/${discountID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Actualización de datos de una Descuento
   *
   * @example
   * ```ts
   * const discount = await client.discounts.update(
   *   'dsc_84f57a6d-c5b0-4150-bc32-0c26e520e2bd',
   *   {
   *     amount: 1000,
   *     apply_to_inscriptions: false,
   *     apply_to_memberships: true,
   *     max_date: 1000,
   *     name: 'Pronto Pago 5% quinto dia',
   *     not_apply_with_scholarship: false,
   *     type: 'integer',
   *     workday: true,
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  update(discountID: string, params: DiscountUpdateParams, options?: RequestOptions): APIPromise<Discount> {
    const { campusID, periodID, ...body } = params;
    return this._client.put(path`/discounts/${discountID}`, {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Ofrece la lista de todos las Descuentos disponibles en las escuelas y campus.
   *
   * @example
   * ```ts
   * const discounts = await client.discounts.list({
   *   program_id: 'program_id',
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  list(params: DiscountListParams, options?: RequestOptions): APIPromise<DiscountListResponse> {
    const { campusID, periodID, ...query } = params;
    return this._client.get('/discounts', {
      query,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }
}

export interface Discount {
  id?: string;

  apply_to_inscriptions?: boolean;

  apply_to_memberships?: boolean;

  external_id?: string;

  items?: Array<Discount.Item>;

  /**
   * Campo arbitrario de datos de terceros
   */
  metadata?: unknown;

  name?: string;

  program_id?: string;

  status?: 'active' | 'deleted';

  workday?: boolean;
}

export namespace Discount {
  export interface Item {
    amount?: number;

    /**
     * Hasta el día 30
     */
    from_day?: number;

    /**
     * Hasta el mes 4
     */
    from_month?: number;

    /**
     * Cuántos días se puede aplicar el Descuento
     */
    max_date?: number;

    not_apply_with_scholarship?: boolean;

    /**
     * Después del primer día
     */
    to_day?: number;

    /**
     * Después del primer mes
     */
    to_month?: number;

    type?: 'integer' | 'percentage';
  }
}

export interface DiscountListResponse {
  data?: Array<Discount>;

  items?: MembershipsAPI.Pagination;
}

export interface DiscountCreateParams {
  /**
   * Body param:
   */
  amount: number;

  /**
   * Body param:
   */
  apply_to_inscriptions: boolean;

  /**
   * Body param:
   */
  apply_to_memberships: boolean;

  /**
   * Body param: Cuantos dias se puede aplicar el Descuento
   */
  max_date: number;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  not_apply_with_scholarship: boolean;

  /**
   * Body param:
   */
  program_id: string;

  /**
   * Body param:
   */
  type: 'integer' | 'percentage';

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
   * Body param: Hasta el dia 30
   */
  from_day?: number;

  /**
   * Body param: Hasta el mes 4
   */
  from_month?: number;

  /**
   * Body param: Campo arbitrario de datos de terceros
   */
  metadata?: unknown;

  /**
   * Body param: Despues del primer dia
   */
  to_day?: number;

  /**
   * Body param: Despues del primer mes
   */
  to_month?: number;
}

export interface DiscountRetrieveParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * ID del periodo que se desea trabajar.
   */
  periodID: string;
}

export interface DiscountUpdateParams {
  /**
   * Body param:
   */
  amount: number;

  /**
   * Body param:
   */
  apply_to_inscriptions: boolean;

  /**
   * Body param:
   */
  apply_to_memberships: boolean;

  /**
   * Body param: Cuantos dias se puede aplicar el Descuento
   */
  max_date: number;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  not_apply_with_scholarship: boolean;

  /**
   * Body param:
   */
  type: 'integer' | 'percentage';

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
   * Body param: Hasta el dia 30
   */
  from_day?: number;

  /**
   * Body param: Hasta el mes 4
   */
  from_month?: number;

  /**
   * Body param: Campo arbitrario de datos de terceros
   */
  metadata?: unknown;

  /**
   * Body param: Despues del primer dia
   */
  to_day?: number;

  /**
   * Body param: Despues del primer mes
   */
  to_month?: number;
}

export interface DiscountListParams {
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

export declare namespace Discounts {
  export {
    type Discount as Discount,
    type DiscountListResponse as DiscountListResponse,
    type DiscountCreateParams as DiscountCreateParams,
    type DiscountRetrieveParams as DiscountRetrieveParams,
    type DiscountUpdateParams as DiscountUpdateParams,
    type DiscountListParams as DiscountListParams,
  };
}
