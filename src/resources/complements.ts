// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MembershipsAPI from './memberships';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Complements extends APIResource {
  /**
   * Ofrece la lista de todos los complementos académicos disponibles en las escuelas
   * y campus.
   *
   * @example
   * ```ts
   * const complement = await client.complements.create({
   *   amount: 1000,
   *   end_date: '2023-11-10',
   *   frecuency: 'recurrent',
   *   name: 'Curso de natación',
   *   pay_date: '2023-11-10',
   *   periodicity: 'monthly',
   *   program_id: 'prm_69dc9120-03cc-4737-99b3-88d018804a29',
   *   start_date: '2023-11-10',
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  create(params: ComplementCreateParams, options?: RequestOptions): APIPromise<Complement> {
    const { campusID, periodID, ...body } = params;
    return this._client.post('/complements', {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Brinda información detallada sobre un complemento específico, identificado por
   * su ID.
   *
   * @example
   * ```ts
   * const complement = await client.complements.retrieve(
   *   'cpt_b6f577fa-c2a1-4849-be17-7e730c076fb0',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  retrieve(
    complementID: string,
    params: ComplementRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Complement> {
    const { campusID, periodID } = params;
    return this._client.get(path`/complements/${complementID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Actualización de datos de un Complemento
   *
   * @example
   * ```ts
   * const complement = await client.complements.update(
   *   'cpt_b6f577fa-c2a1-4849-be17-7e730c076fb0',
   *   {
   *     program_id: 'prm_69dc9120-03cc-4737-99b3-88d018804a29',
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  update(
    complementID: string,
    params: ComplementUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Complement> {
    const { campusID, periodID, ...body } = params;
    return this._client.put(path`/complements/${complementID}`, {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Ofrece la lista de todos los programas académicos disponibles en las escuelas y
   * campus.
   *
   * @example
   * ```ts
   * const complements = await client.complements.list({
   *   program_id: 'program_id',
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  list(params: ComplementListParams, options?: RequestOptions): APIPromise<ComplementListResponse> {
    const { campusID, periodID, ...query } = params;
    return this._client.get('/complements', {
      query,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Elimina un Complemento
   *
   * @example
   * ```ts
   * const complement = await client.complements.delete(
   *   'cpt_b6f577fa-c2a1-4849-be17-7e730c076fb0',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  delete(
    complementID: string,
    params: ComplementDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ComplementDeleteResponse> {
    const { campusID, periodID } = params;
    return this._client.delete(path`/complements/${complementID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }
}

export interface Complement {
  id?: string;

  amount?: number;

  end_date?: string;

  external_id?: string;

  frecuency?: 'unique' | 'recurrent';

  items?: Array<Complement.Item>;

  /**
   * Campo arbitrario de datos de terceros
   */
  metadata?: unknown;

  name?: string;

  periodicity?: 'weekly' | 'monthly' | 'bimonthly' | 'quarterly' | 'semiannual' | 'annual';

  program_id?: string;

  start_date?: string;
}

export namespace Complement {
  export interface Item {
    pay_date?: string;
  }
}

export interface ComplementListResponse {
  data?: Array<Complement>;

  items?: MembershipsAPI.Pagination;
}

export interface ComplementDeleteResponse {
  /**
   * Complemento escolar eliminado
   */
  message?: string;
}

export interface ComplementCreateParams {
  /**
   * Body param:
   */
  amount: number;

  /**
   * Body param:
   */
  end_date: string;

  /**
   * Body param:
   */
  frecuency: 'unique' | 'recurrent';

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  pay_date: string;

  /**
   * Body param:
   */
  periodicity: 'weekly' | 'monthly' | 'bimonthly' | 'quarterly' | 'semiannual' | 'annual';

  /**
   * Body param:
   */
  program_id: string;

  /**
   * Body param:
   */
  start_date: string;

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

export interface ComplementRetrieveParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * ID del periodo que se desea trabajar.
   */
  periodID: string;
}

export interface ComplementUpdateParams {
  /**
   * Body param:
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
   * Body param:
   */
  amount?: number;

  /**
   * Body param:
   */
  end_date?: string;

  /**
   * Body param:
   */
  external_id?: string;

  /**
   * Body param:
   */
  frecuency?: 'unique' | 'recurrent';

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
  pay_date?: string;

  /**
   * Body param:
   */
  periodicity?: 'weekly' | 'monthly' | 'bimonthly' | 'quarterly' | 'semiannual' | 'annual';

  /**
   * Body param:
   */
  start_date?: string;
}

export interface ComplementListParams {
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

export interface ComplementDeleteParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * ID del periodo que se desea trabajar.
   */
  periodID: string;
}

export declare namespace Complements {
  export {
    type Complement as Complement,
    type ComplementListResponse as ComplementListResponse,
    type ComplementDeleteResponse as ComplementDeleteResponse,
    type ComplementCreateParams as ComplementCreateParams,
    type ComplementRetrieveParams as ComplementRetrieveParams,
    type ComplementUpdateParams as ComplementUpdateParams,
    type ComplementListParams as ComplementListParams,
    type ComplementDeleteParams as ComplementDeleteParams,
  };
}
