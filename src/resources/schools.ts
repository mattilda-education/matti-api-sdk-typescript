// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as InvoicesAPI from './invoices';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';

export class Schools extends APIResource {
  /**
   * Se pueden actualizar los datos de la escuela
   *
   * @example
   * ```ts
   * const schools = await client.schools.update({
   *   name: 'ULA',
   *   zipcode: 'zipcode',
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   * });
   * ```
   */
  update(params: SchoolUpdateParams, options?: RequestOptions): APIPromise<SchoolUpdateResponse> {
    const { campusID, ...body } = params;
    return this._client.put('/schools', {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID }, options?.headers]),
    });
  }

  /**
   * Este endpoint permite obtener la lista de todas las escuelas registradas en el
   * sistema.
   *
   * @example
   * ```ts
   * const schools = await client.schools.list();
   * ```
   */
  list(options?: RequestOptions): APIPromise<SchoolListResponse> {
    return this._client.get('/schools', options);
  }
}

export interface School extends InvoicesAPI.Base {
  /**
   * Este campo indica la dirección física o postal completa de la ubicación.
   */
  address?: string;

  /**
   * Este campo indica la ciudad o localidad dentro del municipio en el que se
   * encuentra la dirección.
   */
  city?: string;

  /**
   * Este campo indica el país en el que se encuentra la dirección.
   */
  country?: string;

  /**
   * Este campo indica el municipio dentro del estado en el que se encuentra la
   * dirección.
   */
  municipality?: string;

  /**
   * Nombre de la institución o Grupo de Instituciones
   */
  name?: string;

  /**
   * Este campo indica el estado o entidad federativa en la que se encuentra la
   * dirección.
   */
  state?: string;

  status?: 'active' | 'deleted';

  /**
   * Este campo indica la colonia o barrio específico dentro de la ciudad donde se
   * encuentra la dirección.
   */
  suburb?: string;

  /**
   * Este campo indica el código postal asociado a la dirección.
   */
  zipcode?: string;
}

export type SchoolUpdateResponse = Array<School>;

export type SchoolListResponse = Array<School>;

export interface SchoolUpdateParams {
  /**
   * Body param: Nombre de la institución o Grupo de Instituciones
   */
  name: string;

  /**
   * Body param: Este campo indica el código postal asociado a la dirección.
   */
  zipcode: string;

  /**
   * Header param: ID del Campus que se desea trabajar.
   */
  campusID: string;
}

export declare namespace Schools {
  export {
    type School as School,
    type SchoolUpdateResponse as SchoolUpdateResponse,
    type SchoolListResponse as SchoolListResponse,
    type SchoolUpdateParams as SchoolUpdateParams,
  };
}
