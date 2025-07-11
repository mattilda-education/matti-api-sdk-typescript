// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Inscriptions extends APIResource {
  /**
   * Ofrece la lista de todos los Inscripción disponibles en las escuelas y campus.
   *
   * @example
   * ```ts
   * const inscription = await client.inscriptions.create({
   *   amount: 1000,
   *   name: 'Administración',
   *   pay_date: '2023-11-10',
   *   program_id: 'prm_48ec2f25-74e1-406a-a42f-4636bcce7877',
   *   status: 'active',
   *   type: 'integer',
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  create(params: InscriptionCreateParams, options?: RequestOptions): APIPromise<Inscription> {
    const { campusID, periodID, ...body } = params;
    return this._client.post('/inscriptions', {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Brinda información detallada sobre una Inscripción específico, identificado por
   * su ID.
   *
   * @example
   * ```ts
   * const inscription = await client.inscriptions.retrieve(
   *   'inc_4dfbd534-0d6c-489e-9557-04dd60dce61d',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  retrieve(
    inscriptionID: string,
    params: InscriptionRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<Inscription> {
    const { campusID, periodID } = params;
    return this._client.get(path`/inscriptions/${inscriptionID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Actualización de datos de una Inscripción
   *
   * @example
   * ```ts
   * const inscription = await client.inscriptions.update(
   *   'inc_4dfbd534-0d6c-489e-9557-04dd60dce61d',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  update(
    inscriptionID: string,
    params: InscriptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Inscription> {
    const { campusID, periodID, ...body } = params;
    return this._client.put(path`/inscriptions/${inscriptionID}`, {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Ofrece la lista de todos las Inscripciones disponibles en las escuelas y campus.
   *
   * @example
   * ```ts
   * const inscriptions = await client.inscriptions.list({
   *   program_id: 'program_id',
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  list(params: InscriptionListParams, options?: RequestOptions): APIPromise<InscriptionListResponse> {
    const { campusID, periodID, ...query } = params;
    return this._client.get('/inscriptions', {
      query,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Eliminar una Inscripción
   *
   * @example
   * ```ts
   * const inscription = await client.inscriptions.delete(
   *   'inc_4dfbd534-0d6c-489e-9557-04dd60dce61d',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  delete(
    inscriptionID: string,
    params: InscriptionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<InscriptionDeleteResponse> {
    const { campusID, periodID } = params;
    return this._client.delete(path`/inscriptions/${inscriptionID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }
}

export interface Inscription {
  id?: string;

  amount?: number;

  external_id?: string;

  /**
   * Campo arbitrario de datos de terceros
   */
  metadata?: unknown;

  name?: string;

  pay_date?: string;

  program_id?: string;
}

export type InscriptionListResponse = Array<Inscription>;

export interface InscriptionDeleteResponse {
  /**
   * Inscripción escolar eliminada
   */
  message?: string;
}

export interface InscriptionCreateParams {
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
  pay_date: string;

  /**
   * Body param: Parametro requerido para consultar las inscripciones de un programa
   */
  program_id: string;

  /**
   * Body param: Estado del registro en la plataforma.
   *
   * - active: Indica que el registro esta 100% funcional y activado.
   * - deleted: Indica que el registro se encuentra eliminado
   */
  status: 'active' | 'deleted';

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

export interface InscriptionRetrieveParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * ID del periodo que se desea trabajar.
   */
  periodID: string;
}

export interface InscriptionUpdateParams {
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
  pay_date?: string;

  /**
   * Body param: Estado del registro en la plataforma.
   *
   * - active: Indica que el registro esta 100% funcional y activado.
   * - deleted: Indica que el registro se encuentra eliminado
   */
  status?: 'active' | 'deleted';

  /**
   * Body param:
   */
  type?: 'integer' | 'percentage';
}

export interface InscriptionListParams {
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

export interface InscriptionDeleteParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * ID del periodo que se desea trabajar.
   */
  periodID: string;
}

export declare namespace Inscriptions {
  export {
    type Inscription as Inscription,
    type InscriptionListResponse as InscriptionListResponse,
    type InscriptionDeleteResponse as InscriptionDeleteResponse,
    type InscriptionCreateParams as InscriptionCreateParams,
    type InscriptionRetrieveParams as InscriptionRetrieveParams,
    type InscriptionUpdateParams as InscriptionUpdateParams,
    type InscriptionListParams as InscriptionListParams,
    type InscriptionDeleteParams as InscriptionDeleteParams,
  };
}
