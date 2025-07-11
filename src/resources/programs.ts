// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Programs extends APIResource {
  /**
   * Ofrece la lista de todos los programas académicos disponibles en las escuelas y
   * campus.
   *
   * @example
   * ```ts
   * const program = await client.programs.create({
   *   education_level: 'primary',
   *   end_date: '2023-12-31',
   *   name: 'Administración',
   *   school_level: '1 Grado',
   *   start_date: '2023-07-01',
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  create(params: ProgramCreateParams, options?: RequestOptions): APIPromise<Program> {
    const { campusID, periodID, ...body } = params;
    return this._client.post('/programs', {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Brinda información detallada sobre un programa específico, identificado por su
   * ID.
   *
   * @example
   * ```ts
   * const program = await client.programs.retrieve(
   *   'prm_69dc9120-03cc-4737-99b3-88d018804a29',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  retrieve(programID: string, params: ProgramRetrieveParams, options?: RequestOptions): APIPromise<Program> {
    const { campusID, periodID } = params;
    return this._client.get(path`/programs/${programID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Actualización de datos de programa
   *
   * @example
   * ```ts
   * const program = await client.programs.update(
   *   'prm_69dc9120-03cc-4737-99b3-88d018804a29',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  update(programID: string, params: ProgramUpdateParams, options?: RequestOptions): APIPromise<Program> {
    const { campusID, periodID, ...body } = params;
    return this._client.put(path`/programs/${programID}`, {
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
   * const programs = await client.programs.list({
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  list(params: ProgramListParams, options?: RequestOptions): APIPromise<ProgramListResponse> {
    const { campusID, periodID, ...query } = params;
    return this._client.get('/programs', {
      query,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }
}

export interface Program {
  campus_period_id?: string;

  external_id?: string;

  /**
   * Campo arbitrario de datos de terceros
   */
  metadata?: unknown;

  name?: string;

  programID?: string;
}

export type ProgramListResponse = Array<Program>;

export interface ProgramCreateParams {
  /**
   * Body param:
   */
  education_level: string;

  /**
   * Body param:
   */
  end_date: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  school_level: string;

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
  cct?: string;

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
  rvoe?: string;
}

export interface ProgramRetrieveParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * ID del periodo que se desea trabajar.
   */
  periodID: string;
}

export interface ProgramUpdateParams {
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

  /**
   * Body param:
   */
  name?: string;
}

export interface ProgramListParams {
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

export declare namespace Programs {
  export {
    type Program as Program,
    type ProgramListResponse as ProgramListResponse,
    type ProgramCreateParams as ProgramCreateParams,
    type ProgramRetrieveParams as ProgramRetrieveParams,
    type ProgramUpdateParams as ProgramUpdateParams,
    type ProgramListParams as ProgramListParams,
  };
}
