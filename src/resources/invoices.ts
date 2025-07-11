// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import * as MembershipsAPI from './memberships';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Invoices extends APIResource {
  /**
   * Proporciona detalles específicos de una factura en particular, identificada por
   * su ID.
   *
   * @example
   * ```ts
   * const invoiceEntry = await client.invoices.retrieve(
   *   '9c7f3d05-253c-4cec-a3e9-8e1565de63ca',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  retrieve(
    invoiceID: string,
    params: InvoiceRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<InvoiceEntry> {
    const { campusID, periodID } = params;
    return this._client.get(path`/invoices/${invoiceID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Permite acceder a la lista de todas las facturas generadas en el sistema.
   *
   * @example
   * ```ts
   * const invoices = await client.invoices.list({
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  list(params: InvoiceListParams, options?: RequestOptions): APIPromise<InvoiceListResponse> {
    const { campusID, periodID, ...query } = params;
    return this._client.get('/invoices', {
      query,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }
}

export interface Base {
  /**
   * Identificador único del registro
   */
  id?: string;

  /**
   * Fecha y hora de creacion del registro
   */
  created_at?: string;

  /**
   * Fecha y hora de creacion del registro
   */
  updated_at?: string;
}

export interface InvoiceEntry extends Base {
  /**
   * Monto de pago
   */
  amount?: number;

  /**
   * Fecha de la emicion
   */
  emittedDate?: string;

  /**
   * Tipo de entrada, Colegitura, Inscripcion, Complemento
   */
  invoiceType?: 'invoice' | 'payment';

  /**
   * Identificador del Ledger
   */
  ledgerId?: string;

  /**
   * Identificador del pago
   */
  payment_id?: string;

  /**
   * Estado de emicion de la factura
   */
  status?: 'error' | 'pending' | 'successful';

  /**
   * Url para descarga en formato PDF
   */
  urlPdf?: string;

  /**
   * Url para descarga en formato XML
   */
  urlXml?: string;
}

export interface InvoiceListResponse extends MembershipsAPI.Pagination {
  /**
   * Listado de facturas
   */
  data?: Array<InvoiceEntry>;
}

export interface InvoiceRetrieveParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * ID del periodo que se desea trabajar.
   */
  periodID: string;
}

export interface InvoiceListParams {
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

export declare namespace Invoices {
  export {
    type Base as Base,
    type InvoiceEntry as InvoiceEntry,
    type InvoiceListResponse as InvoiceListResponse,
    type InvoiceRetrieveParams as InvoiceRetrieveParams,
    type InvoiceListParams as InvoiceListParams,
  };
}
