// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MembershipsAPI from './memberships';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Periods extends APIResource {
  /**
   * Crear un nuevo periodo escolar
   *
   * @example
   * ```ts
   * const period = await client.periods.create({
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   * });
   * ```
   */
  create(params: PeriodCreateParams, options?: RequestOptions): APIPromise<PeriodCreateResponse> {
    const { campusID, ...body } = params;
    return this._client.post('/periods', {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID }, options?.headers]),
    });
  }

  /**
   * Brinda información detallada sobre un periodo específico, identificado por su
   * ID.
   *
   * @example
   * ```ts
   * const period = await client.periods.retrieve(
   *   '40335da4-85fe-4b98-9083-3502847dbe40',
   *   { campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec' },
   * );
   * ```
   */
  retrieve(periodID: string, params: PeriodRetrieveParams, options?: RequestOptions): APIPromise<Period> {
    const { campusID } = params;
    return this._client.get(path`/periods/${periodID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID }, options?.headers]),
    });
  }

  /**
   * Actualización de datos de un periodo
   *
   * @example
   * ```ts
   * const period = await client.periods.update(
   *   '40335da4-85fe-4b98-9083-3502847dbe40',
   *   { campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec' },
   * );
   * ```
   */
  update(periodID: string, params: PeriodUpdateParams, options?: RequestOptions): APIPromise<Period> {
    const { campusID, ...body } = params;
    return this._client.put(path`/periods/${periodID}`, {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID }, options?.headers]),
    });
  }

  /**
   * Obtener una lista de periodos escolares
   *
   * @example
   * ```ts
   * const period = await client.periods.list({
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   * });
   * ```
   */
  list(params: PeriodListParams, options?: RequestOptions): APIPromise<Period> {
    const { campusID, ...query } = params;
    return this._client.get('/periods', {
      query,
      ...options,
      headers: buildHeaders([{ campusID: campusID }, options?.headers]),
    });
  }

  /**
   * Eliminar un Periodo
   *
   * @example
   * ```ts
   * const period = await client.periods.delete(
   *   '40335da4-85fe-4b98-9083-3502847dbe40',
   *   { campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec' },
   * );
   * ```
   */
  delete(
    periodID: string,
    params: PeriodDeleteParams,
    options?: RequestOptions,
  ): APIPromise<PeriodDeleteResponse> {
    const { campusID } = params;
    return this._client.delete(path`/periods/${periodID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID }, options?.headers]),
    });
  }
}

export interface Period {
  campus_id?: string;

  end_date?: string;

  is_default?: boolean;

  name?: string;

  parent_id?: string;

  'start_date"'?: string;

  status?: 'active' | 'inactive' | 'deleted';
}

export interface PeriodCreate {
  ES?: PeriodCreate.Es;

  K12?: PeriodCreate.K12;
}

export namespace PeriodCreate {
  export interface Es {
    end_date?: string;

    name?: string;

    start_date?: string;
  }

  export interface K12 {
    default_plan?: string;

    due_date?: number;

    end_date?: string;

    name?: string;

    paid_plans?: K12.PaidPlans;

    programs?: K12.Programs;

    start_date?: string;

    workday?: boolean;
  }

  export namespace K12 {
    export interface PaidPlans {
      plan_10_memberships?: boolean;

      plan_11_memberships?: boolean;

      plan_12_memberships?: boolean;
    }

    export interface Programs {
      bachelorship?: boolean;

      maternal?: boolean;

      pre_maternal?: boolean;

      pre_primary?: boolean;

      pre_school?: boolean;

      primary?: boolean;

      secondary?: boolean;
    }
  }
}

export interface PeriodCreateResponse {
  data?: Array<PeriodCreate>;

  items?: MembershipsAPI.Pagination;
}

export interface PeriodDeleteResponse {
  /**
   * Periodo escolar eliminado
   */
  message?: string;
}

export interface PeriodCreateParams {
  /**
   * Header param: ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * Body param:
   */
  ES?: PeriodCreateParams.Es;

  /**
   * Body param:
   */
  K12?: PeriodCreateParams.K12;
}

export namespace PeriodCreateParams {
  export interface Es {
    end_date?: string;

    name?: string;

    start_date?: string;
  }

  export interface K12 {
    default_plan?: string;

    due_date?: number;

    end_date?: string;

    name?: string;

    paid_plans?: K12.PaidPlans;

    programs?: K12.Programs;

    start_date?: string;

    workday?: boolean;
  }

  export namespace K12 {
    export interface PaidPlans {
      plan_10_memberships?: boolean;

      plan_11_memberships?: boolean;

      plan_12_memberships?: boolean;
    }

    export interface Programs {
      bachelorship?: boolean;

      maternal?: boolean;

      pre_maternal?: boolean;

      pre_primary?: boolean;

      pre_school?: boolean;

      primary?: boolean;

      secondary?: boolean;
    }
  }
}

export interface PeriodRetrieveParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;
}

export interface PeriodUpdateParams {
  /**
   * Header param: ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * Body param:
   */
  ES?: PeriodUpdateParams.Es;

  /**
   * Body param:
   */
  K12?: PeriodUpdateParams.K12;
}

export namespace PeriodUpdateParams {
  export interface Es {
    end_date?: string;

    name?: string;

    start_date?: string;
  }

  export interface K12 {
    default_plan?: string;

    due_date?: number;

    end_date?: string;

    name?: string;

    paid_plans?: K12.PaidPlans;

    programs?: K12.Programs;

    properties?: unknown;

    start_date?: string;

    workday?: boolean;
  }

  export namespace K12 {
    export interface PaidPlans {
      plan_10_memberships?: boolean;

      plan_11_memberships?: boolean;

      plan_12_memberships?: boolean;
    }

    export interface Programs {
      bachelorship?: boolean;

      maternal?: boolean;

      pre_maternal?: boolean;

      pre_primary?: boolean;

      pre_school?: boolean;

      primary?: boolean;

      secondary?: boolean;
    }
  }
}

export interface PeriodListParams {
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

export interface PeriodDeleteParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;
}

export declare namespace Periods {
  export {
    type Period as Period,
    type PeriodCreate as PeriodCreate,
    type PeriodCreateResponse as PeriodCreateResponse,
    type PeriodDeleteResponse as PeriodDeleteResponse,
    type PeriodCreateParams as PeriodCreateParams,
    type PeriodRetrieveParams as PeriodRetrieveParams,
    type PeriodUpdateParams as PeriodUpdateParams,
    type PeriodListParams as PeriodListParams,
    type PeriodDeleteParams as PeriodDeleteParams,
  };
}
