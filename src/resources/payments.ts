// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as PaymentsAPI from './payments';
import * as InvoicesAPI from './invoices';
import * as MembershipsAPI from './memberships';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Payments extends APIResource {
  /**
   * Reportar un pago
   *
   * @example
   * ```ts
   * const paymentEntry = await client.payments.create({
   *   amount: 100.2,
   *   invoiceEmitted: false,
   *   ledger_id: '82b41d8a-e238-4d4a-8ee1-b0e37d37aab7',
   *   method: 'cash',
   *   paymentDate: '2024-01-20',
   *   ticketReference: 'pi_123456789',
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  create(params: PaymentCreateParams, options?: RequestOptions): APIPromise<PaymentEntry> {
    const { campusID, periodID, ...body } = params;
    return this._client.post('/payments', {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Se listan obtienen los datos del programa.
   *
   * @example
   * ```ts
   * const paymentEntry = await client.payments.retrieve(
   *   'fc159d85-a404-4445-9161-4b3bf352b314',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  retrieve(
    paymentID: string,
    params: PaymentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<PaymentEntry> {
    const { campusID, periodID } = params;
    return this._client.get(path`/payments/${paymentID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Ofrece acceso a la lista de todos los pagos realizados.
   *
   * @example
   * ```ts
   * const payments = await client.payments.list({
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  list(params: PaymentListParams, options?: RequestOptions): APIPromise<PaymentListResponse> {
    const { campusID, periodID, ...query } = params;
    return this._client.get('/payments', {
      query,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }
}

export interface PaymentEntry extends InvoicesAPI.Base {
  /**
   * Monto de pago complento o pendiente de la entrada
   */
  amount?: number;

  /**
   * Campo arbitrario de datos de terceros
   */
  external_id?: string;

  /**
   * Campo arbitrario de datos de terceros
   */
  metadata?: unknown;

  /**
   * Tipo de entrada, Colegitura, Inscripcion, Complemento
   */
  method?: 'debit card' | 'credit card' | 'transfer' | 'cash';

  /**
   * Fecha de recepcion del pago
   */
  paymentDate?: string;

  /**
   * Estado del pago
   */
  status?: 'pending' | 'waiting' | 'successful' | 'cancelled' | 'failed' | 'holding';

  /**
   * Identificador del metodo de pago.
   */
  ticketReference?: string;
}

export interface PaymentListResponse {
  items?: PaymentListResponse.Items;
}

export namespace PaymentListResponse {
  export interface Items extends MembershipsAPI.Pagination {
    /**
     * Listado de pagos
     */
    data?: Array<PaymentsAPI.PaymentEntry>;
  }
}

export interface PaymentCreateParams {
  /**
   * Body param: Monto de pago complento o pendiente de la entrada
   */
  amount: number;

  /**
   * Body param: Si desea generar factura.
   */
  invoiceEmitted: boolean;

  /**
   * Body param: Id del invoice que desea registrar el pago
   */
  ledger_id: string;

  /**
   * Body param: Tipo de entrada, Colegitura, Inscripcion, Complemento
   */
  method: 'debit card' | 'credit card' | 'transfer' | 'cash';

  /**
   * Body param: Fecha de recepcion del pago
   */
  paymentDate: string;

  /**
   * Body param: Identificador del metodo de pago.
   */
  ticketReference: string;

  /**
   * Header param: ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * Header param: ID del periodo que se desea trabajar.
   */
  periodID: string;

  /**
   * Body param: Campo arbitrario de datos de terceros
   */
  external_id?: string;

  /**
   * Body param: Campo arbitrario de datos de terceros
   */
  metadata?: unknown;
}

export interface PaymentRetrieveParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * ID del periodo que se desea trabajar.
   */
  periodID: string;
}

export interface PaymentListParams {
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

export declare namespace Payments {
  export {
    type PaymentEntry as PaymentEntry,
    type PaymentListResponse as PaymentListResponse,
    type PaymentCreateParams as PaymentCreateParams,
    type PaymentRetrieveParams as PaymentRetrieveParams,
    type PaymentListParams as PaymentListParams,
  };
}
