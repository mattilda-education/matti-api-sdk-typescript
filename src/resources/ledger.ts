// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as LedgerAPI from './ledger';
import * as InvoicesAPI from './invoices';
import * as MembershipsAPI from './memberships';
import * as StudentsAPI from './students/students';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Ledger extends APIResource {
  /**
   * Se crearan un concepto nuevos.
   *
   * @example
   * ```ts
   * const ledgers = await client.ledger.create({
   *   primary_concept_type: 'membership',
   *   program_id: 'prm_48ec2f25-74e1-406a-a42f-4636bcce7877',
   *   student_id: '0b313f5a-1023-47e4-9b96-82efa61363be',
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  create(params: LedgerCreateParams, options?: RequestOptions): APIPromise<LedgerCreateResponse> {
    const { campusID, periodID, ...body } = params;
    return this._client.post('/ledger', {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Permite obtener detalles específicos de una entrada en el registro contable,
   * identificada por su ID.
   *
   * @example
   * ```ts
   * const ledgerEntries = await client.ledger.retrieve(
   *   '746d02b2-a682-461d-893c-d1fc0b917633',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  retrieve(
    ledgerID: string,
    params: LedgerRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<LedgerEntries> {
    const { campusID, periodID } = params;
    return this._client.get(path`/ledger/${ledgerID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Actualización de un Concepto
   *
   * @example
   * ```ts
   * const ledgerEntries = await client.ledger.update({
   *   ledger_id: '0b313f5a-1023-47e4-9b96-82efa61363be',
   *   primary_concept_type: 'membership',
   *   program_id: 'prm_48ec2f25-74e1-406a-a42f-4636bcce7877',
   *   student_id: '0b313f5a-1023-47e4-9b96-82efa61363be',
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  update(params: LedgerUpdateParams, options?: RequestOptions): APIPromise<LedgerEntries> {
    const { campusID, periodID, ...body } = params;
    return this._client.put('/ledger', {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Listado de conceptos por Estuadiante
   *
   * @example
   * ```ts
   * const ledgers = await client.ledger.list({
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  list(params: LedgerListParams, options?: RequestOptions): APIPromise<LedgerListResponse> {
    const { campusID, periodID, ...query } = params;
    return this._client.get('/ledger', {
      query,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }
}

export interface LedgerEntries extends InvoicesAPI.Base {
  /**
   * Monto de pago complento
   */
  amount?: number;

  /**
   * Tipo de entrada
   *
   * 1. **membership** es una Colegitura
   * 2. **inscription** es una Inscripcion o Reinscripcion
   * 3. **complement** es un Complemento de pago generico.
   */
  conceptType?: 'membership' | 'inscription' | 'complement';

  /**
   * Fecha de la entrada
   */
  datePeriod?: string;

  /**
   * Detalle del concepto
   */
  description?: string;

  /**
   * Fecha de Expiracion
   */
  dueDate?: string;

  external_id?: string;

  items?: Array<LedgerEntries.Item>;

  /**
   * Campo arbitrario de datos de terceros
   */
  metadata?: unknown;

  /**
   * Monto pendiente de pago complento
   */
  pending_amount?: number;

  /**
   * Tipo de entrada
   *
   * 1. **successful** el concepto ha sido pagado.
   * 2. **pending** el conepto esta pendiente de pago y no ha llegado a su fecha de
   *    vencimiento.
   * 3. **expired** el concepto esta vencido.
   */
  status?: 'pending' | 'expired' | 'successful';

  student?: StudentsAPI.Student;
}

export namespace LedgerEntries {
  export interface Item extends InvoicesAPI.Base {
    /**
     * Monto de pago complento o pendiente de la entrada
     */
    amount?: number;

    /**
     * Fecha de la entrada
     */
    amountType?: 'integer' | 'percentage';

    /**
     * Fecha en que este items se activará
     */
    applyDate?: string;

    /**
     * Tipo de item
     */
    conceptType?: 'membership' | 'inscription' | 'complement' | 'surchage' | 'discount' | 'schoolarship';

    /**
     * Fecha de la entrada
     */
    description?: string;

    /**
     * Fecha de Expiracion de este item cuando se inactivara
     */
    dueDate?: string;

    /**
     * Especifica las opciones válidas para el campo. En este caso, se indican tres
     * posibles valores pending (pendiente), expired (caducado) y successful
     */
    status?: 'pending' | 'expired' | 'successful';
  }
}

export type LedgerCreateResponse = Array<LedgerCreateResponse.LedgerCreateResponseItem>;

export namespace LedgerCreateResponse {
  export interface LedgerCreateResponseItem {
    /**
     * Listado de conceptos
     */
    data?: Array<LedgerAPI.LedgerEntries>;
  }
}

export interface LedgerListResponse extends MembershipsAPI.Pagination {
  /**
   * Listado de conceptos
   */
  data?: Array<LedgerEntries>;
}

export interface LedgerCreateParams {
  /**
   * Body param: Concepto primario
   */
  primary_concept_type: 'membership' | 'inscription' | 'complement';

  /**
   * Body param: Parametro requerido para consultar las inscripciones de un programa
   */
  program_id: string;

  /**
   * Body param: Identificador del estudiante
   */
  student_id: string;

  /**
   * Header param: ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * Header param: ID del periodo que se desea trabajar.
   */
  periodID: string;

  /**
   * Body param: Identificador del descuento
   */
  discount_id?: string;

  /**
   * Body param:
   */
  discount_items?: Array<LedgerCreateParams.DiscountItem>;

  /**
   * Body param:
   */
  external_id?: string;

  /**
   * Body param:
   */
  items?: Array<LedgerCreateParams.Item>;

  /**
   * Body param:
   */
  metadata?: unknown;

  /**
   * Body param: Identificador del concepto primario
   */
  primary_concept_id?: string;

  /**
   * Body param: Identificador de la beca
   */
  scholarship_id?: string;

  /**
   * Body param:
   */
  scholarship_items?: Array<LedgerCreateParams.ScholarshipItem>;
}

export namespace LedgerCreateParams {
  export interface DiscountItem {
    amount: number;

    on_inscription: boolean;

    on_memberships: boolean;

    pay_date: string;

    pay_type: 'integer' | 'percentage';

    external_id?: string;

    metadata?: unknown;
  }

  export interface Item {
    amount: number;

    pay_date: string;

    external_id?: string;

    metadata?: unknown;
  }

  export interface ScholarshipItem {
    amount: number;

    on_inscription: boolean;

    on_memberships: boolean;

    pay_date: string;

    pay_type: 'integer' | 'percentage';

    external_id?: string;

    metadata?: unknown;
  }
}

export interface LedgerRetrieveParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * ID del periodo que se desea trabajar.
   */
  periodID: string;
}

export interface LedgerUpdateParams {
  /**
   * Body param: Identificador del Concepto
   */
  ledger_id: string;

  /**
   * Body param: Concepto primario
   */
  primary_concept_type: 'membership' | 'inscription' | 'complement';

  /**
   * Body param: Parametro requerido para consultar las inscripciones de un programa
   */
  program_id: string;

  /**
   * Body param: Identificador del estudiante
   */
  student_id: string;

  /**
   * Header param: ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * Header param: ID del periodo que se desea trabajar.
   */
  periodID: string;

  /**
   * Body param: Identificador del descuento
   */
  discount_id?: string;

  /**
   * Body param:
   */
  discount_items?: Array<LedgerUpdateParams.DiscountItem>;

  /**
   * Body param:
   */
  external_id?: string;

  /**
   * Body param:
   */
  items?: Array<LedgerUpdateParams.Item>;

  /**
   * Body param:
   */
  metadata?: unknown;

  /**
   * Body param: Identificador del concepto primario
   */
  primary_concept_id?: string;

  /**
   * Body param: Identificador de la beca
   */
  scholarship_id?: string;

  /**
   * Body param:
   */
  scholarship_items?: Array<LedgerUpdateParams.ScholarshipItem>;
}

export namespace LedgerUpdateParams {
  export interface DiscountItem {
    amount: number;

    on_inscription: boolean;

    on_memberships: boolean;

    pay_date: string;

    pay_type: 'integer' | 'percentage';

    external_id?: string;

    metadata?: unknown;
  }

  export interface Item {
    amount: number;

    pay_date: string;

    external_id?: string;

    metadata?: unknown;
  }

  export interface ScholarshipItem {
    amount: number;

    on_inscription: boolean;

    on_memberships: boolean;

    pay_date: string;

    pay_type: 'integer' | 'percentage';

    external_id?: string;

    metadata?: unknown;
  }
}

export interface LedgerListParams {
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

export declare namespace Ledger {
  export {
    type LedgerEntries as LedgerEntries,
    type LedgerCreateResponse as LedgerCreateResponse,
    type LedgerListResponse as LedgerListResponse,
    type LedgerCreateParams as LedgerCreateParams,
    type LedgerRetrieveParams as LedgerRetrieveParams,
    type LedgerUpdateParams as LedgerUpdateParams,
    type LedgerListParams as LedgerListParams,
  };
}
