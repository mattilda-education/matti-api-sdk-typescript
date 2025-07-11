// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Campuses extends APIResource {
  /**
   * Se crearan campus nuevos
   *
   * @example
   * ```ts
   * const campus = await client.campuses.create({
   *   address: 'Reforma 606',
   *   name: 'Campus valle',
   *   time_zone: 'America/Mexico_City',
   *   zipcode: 'zipcode',
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   * });
   * ```
   */
  create(params: CampusCreateParams, options?: RequestOptions): APIPromise<Campus> {
    const { campusID, ...body } = params;
    return this._client.post('/campuses', {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID }, options?.headers]),
    });
  }

  /**
   * Lista de todos los campus relacionados a una escuela, colegio o institución
   *
   * @example
   * ```ts
   * const campus = await client.campuses.retrieve(
   *   '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   { campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec' },
   * );
   * ```
   */
  retrieve(pathCampusID: string, params: CampusRetrieveParams, options?: RequestOptions): APIPromise<Campus> {
    const { campusID: header_campusID } = params;
    return this._client.get(path`/campuses/${pathCampusID}`, {
      ...options,
      headers: buildHeaders([{ campusID: header_campusID }, options?.headers]),
    });
  }

  /**
   * actualización de datos de campus
   *
   * @example
   * ```ts
   * const campuses = await client.campuses.update(
   *   '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   {
   *     name: 'Campus valle',
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   },
   * );
   * ```
   */
  update(
    pathCampusID: string,
    params: CampusUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CampusUpdateResponse> {
    const { campusID: header_campusID, ...body } = params;
    return this._client.put(path`/campuses/${pathCampusID}`, {
      body,
      ...options,
      headers: buildHeaders([{ campusID: header_campusID }, options?.headers]),
    });
  }

  /**
   * Proporciona acceso a la información de todos los campus asociados a las
   * escuelas.
   *
   * @example
   * ```ts
   * const campuses = await client.campuses.list({
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   * });
   * ```
   */
  list(params: CampusListParams, options?: RequestOptions): APIPromise<CampusListResponse> {
    const { campusID, ...query } = params;
    return this._client.get('/campuses', {
      query,
      ...options,
      headers: buildHeaders([{ campusID: campusID }, options?.headers]),
    });
  }
}

export interface Campus {
  /**
   * Identificador del Campus
   */
  campusID?: number;

  example?: unknown;

  /**
   * Campo arbitrario de una llave primaria de un sistema externo
   */
  external_id?: string;

  /**
   * Campo arbitrario de datos de terceros
   */
  metadata?: unknown;

  /**
   * Nombre de campus
   */
  name?: string;
}

export type CampusUpdateResponse = Array<Campus>;

export type CampusListResponse = Array<Campus>;

export interface CampusCreateParams {
  /**
   * Body param: Dirección de campus
   */
  address: string;

  /**
   * Body param: Nombre de campus
   */
  name: string;

  /**
   * Body param: Zona horaria
   */
  time_zone:
    | 'America/Mexico_City'
    | 'America/Cancun'
    | 'America/Tijuana'
    | 'America/Hermosillo'
    | 'America/Matamoros'
    | 'America/Ciudad_Juarez'
    | 'America/Bogota'
    | 'America/Guayaquil'
    | 'Pacific/Galapagos';

  /**
   * Body param: Este campo indica el código postal asociado a la dirección.
   */
  zipcode: string;

  /**
   * Header param: ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * Body param: Campo arbitrario de una llave primaria de un sistema externo
   */
  external_id?: string;

  /**
   * Body param: Campo arbitrario de datos de terceros
   */
  metadata?: unknown;
}

export interface CampusRetrieveParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;
}

export interface CampusUpdateParams {
  /**
   * Body param: Nombre de campus
   */
  name: string;

  /**
   * Header param: ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * Body param: Campo arbitrario de una llave primaria de un sistema externo
   */
  external_id?: string;

  /**
   * Body param: Campo arbitrario de datos de terceros
   */
  metadata?: unknown;
}

export interface CampusListParams {
  /**
   * Header param: ID del Campus que se desea trabajar.
   */
  campusID: string;

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

export declare namespace Campuses {
  export {
    type Campus as Campus,
    type CampusUpdateResponse as CampusUpdateResponse,
    type CampusListResponse as CampusListResponse,
    type CampusCreateParams as CampusCreateParams,
    type CampusRetrieveParams as CampusRetrieveParams,
    type CampusUpdateParams as CampusUpdateParams,
    type CampusListParams as CampusListParams,
  };
}
