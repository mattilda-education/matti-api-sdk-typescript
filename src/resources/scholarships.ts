// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MembershipsAPI from './memberships';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Scholarships extends APIResource {
  /**
   * Ofrece la lista de todos los Becas disponibles en las escuelas y campus.
   *
   * @example
   * ```ts
   * const scholarship = await client.scholarships.create({
   *   amount: 1000,
   *   apply_to_inscriptions: false,
   *   apply_to_memberships: true,
   *   description: 'Beca de 5% por cada hermano.',
   *   name: 'Beca 5/5',
   *   program_id: 'uuid',
   *   type: 'integer',
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  create(params: ScholarshipCreateParams, options?: RequestOptions): APIPromise<Scholarship> {
    const { campusID, periodID, ...body } = params;
    return this._client.post('/scholarships', {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Brinda información detallada sobre un Beca específico, identificado por su ID.
   *
   * @example
   * ```ts
   * const scholarship = await client.scholarships.retrieve(
   *   'scs_349d3bff-cfae-4cc6-9835-e3558a64eb03',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  retrieve(
    scholarshipID: string,
    params: ScholarshipRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Scholarship> {
    const { campusID, periodID } = params;
    return this._client.get(path`/scholarships/${scholarshipID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Actualización de datos de una Beca
   *
   * @example
   * ```ts
   * const scholarship = await client.scholarships.update(
   *   'scs_349d3bff-cfae-4cc6-9835-e3558a64eb03',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  update(
    scholarshipID: string,
    params: ScholarshipUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Scholarship> {
    const { campusID, periodID, ...body } = params;
    return this._client.put(path`/scholarships/${scholarshipID}`, {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Ofrece la lista de todos las Becas disponibles en las escuelas y campus.
   *
   * @example
   * ```ts
   * const scholarships = await client.scholarships.list({
   *   program_id: 'program_id',
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  list(params: ScholarshipListParams, options?: RequestOptions): APIPromise<ScholarshipListResponse> {
    const { campusID, periodID, ...query } = params;
    return this._client.get('/scholarships', {
      query,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Eliminar una Beca
   *
   * @example
   * ```ts
   * const scholarship = await client.scholarships.delete(
   *   'scs_349d3bff-cfae-4cc6-9835-e3558a64eb03',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  delete(
    scholarshipID: string,
    params: ScholarshipDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ScholarshipDeleteResponse> {
    const { campusID, periodID } = params;
    return this._client.delete(path`/scholarships/${scholarshipID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }
}

export interface Scholarship {
  id?: string;

  amount?: number;

  apply_to_inscriptions?: boolean;

  apply_to_memberships?: boolean;

  description?: string;

  external_id?: string;

  /**
   * Campo arbitrario de datos de terceros
   */
  metadata?: unknown;

  name?: string;

  program_id?: string;

  status?: 'active' | 'deleted';

  type?: 'integer' | 'percentage';
}

export interface ScholarshipListResponse {
  data?: Array<Scholarship>;

  items?: MembershipsAPI.Pagination;
}

export interface ScholarshipDeleteResponse {
  /**
   * Beca escolar eliminada
   */
  message?: string;
}

export interface ScholarshipCreateParams {
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
   * Body param:
   */
  description: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  program_id: string;

  /**
   * Body param:
   */
  type: 'integer' | 'percentage';

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

export interface ScholarshipRetrieveParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * ID del periodo que se desea trabajar.
   */
  periodID: string;
}

export interface ScholarshipUpdateParams {
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
  apply_to_inscriptions?: boolean;

  /**
   * Body param:
   */
  apply_to_memberships?: boolean;

  /**
   * Body param:
   */
  description?: string;

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
  program_id?: string;

  /**
   * Body param:
   */
  type?: 'integer' | 'percentage';
}

export interface ScholarshipListParams {
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

export interface ScholarshipDeleteParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * ID del periodo que se desea trabajar.
   */
  periodID: string;
}

export declare namespace Scholarships {
  export {
    type Scholarship as Scholarship,
    type ScholarshipListResponse as ScholarshipListResponse,
    type ScholarshipDeleteResponse as ScholarshipDeleteResponse,
    type ScholarshipCreateParams as ScholarshipCreateParams,
    type ScholarshipRetrieveParams as ScholarshipRetrieveParams,
    type ScholarshipUpdateParams as ScholarshipUpdateParams,
    type ScholarshipListParams as ScholarshipListParams,
    type ScholarshipDeleteParams as ScholarshipDeleteParams,
  };
}
