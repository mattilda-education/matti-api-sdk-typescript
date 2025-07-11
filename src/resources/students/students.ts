// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as InvoicesAPI from '../invoices';
import * as MembershipsAPI from '../memberships';
import * as FamilyGroupAPI from './family-group';
import {
  FamilyGroup,
  FamilyGroupAddParams,
  FamilyGroupAddResponse,
  FamilyGroupListResponse,
  FamilyGroupRemoveParams,
  FamilyGroupRemoveResponse,
  FamilyGroupReplaceParams,
  FamilyGroupReplaceResponse,
  FamilyGroupSetPrincipalParams,
  FamilyGroupSetPrincipalResponse,
  UserWithInformation,
} from './family-group';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Students extends APIResource {
  familyGroup: FamilyGroupAPI.FamilyGroup = new FamilyGroupAPI.FamilyGroup(this._client);

  /**
   * Registrar un nuevo estudiante bajo el campus.
   *
   * @example
   * ```ts
   * const students = await client.students.create({
   *   first_last_name: 'Martinez',
   *   name: 'Omar',
   *   parent_id: '580e8747-bd50-4d80-8727-9d263c0dc72b',
   *   programID: 'prm_62d63d88-4d74-44f2-b017-b46b90d3347b',
   *   tin: 'PEGJ850315HJCRRN07',
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  create(params: StudentCreateParams, options?: RequestOptions): APIPromise<StudentCreateResponse> {
    const { campusID, periodID, ...body } = params;
    return this._client.post('/students', {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Proporciona información detallada sobre un estudiante específico, identificado
   * por su ID.
   *
   * @example
   * ```ts
   * const students = await client.students.retrieve(
   *   'bf2629c9-450f-4cd9-a52b-634abbf3c8f0',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  retrieve(
    studentID: string,
    params: StudentRetrieveParams,
    options?: RequestOptions,
  ): APIPromise<StudentRetrieveResponse> {
    const { campusID, periodID } = params;
    return this._client.get(path`/students/${studentID}`, {
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Actualizar estudiante y programa escolar
   *
   * @example
   * ```ts
   * const student = await client.students.update(
   *   'bf2629c9-450f-4cd9-a52b-634abbf3c8f0',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  update(studentID: string, params: StudentUpdateParams, options?: RequestOptions): APIPromise<Student> {
    const { campusID, periodID, ...body } = params;
    return this._client.put(path`/students/${studentID}`, {
      body,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Ofrece la lista de todos los estudiantes registrados en el sistema.
   *
   * @example
   * ```ts
   * const students = await client.students.list({
   *   campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *   periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   * });
   * ```
   */
  list(params: StudentListParams, options?: RequestOptions): APIPromise<StudentListResponse> {
    const { campusID, periodID, ...query } = params;
    return this._client.get('/students', {
      query,
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }

  /**
   * Eliminar un Estudiante
   *
   * @example
   * ```ts
   * const student = await client.students.delete(
   *   'bf2629c9-450f-4cd9-a52b-634abbf3c8f0',
   *   {
   *     campusID: '15bf5964-ba9c-4773-8479-6dbce10079ec',
   *     periodID: '40335da4-85fe-4b98-9083-3502847dbe40',
   *   },
   * );
   * ```
   */
  delete(
    studentID: string,
    params: StudentDeleteParams,
    options?: RequestOptions,
  ): APIPromise<StudentDeleteResponse> {
    const { campusID, periodID, date_from } = params;
    return this._client.delete(path`/students/${studentID}`, {
      query: { date_from },
      ...options,
      headers: buildHeaders([{ campusID: campusID, periodID: periodID }, options?.headers]),
    });
  }
}

export interface Persons extends InvoicesAPI.Base {
  /**
   * Apellido paterno de la persona, sea un estudiante o usuario.
   */
  first_last_name?: string;

  /**
   * Nombre completo de la persona, estudiante o usuario.
   */
  full_name?: string;

  /**
   * Nombre(s) de la persona, estudiante o usuario.
   */
  name?: string;

  /**
   * Apellido materno de la persona, estudiante o usuario.
   */
  second_last_name?: string;

  /**
   * Estado del registro en la plataforma.
   *
   * - active: Indica que el registro esta 100% funcional y activado.
   * - inactive: Indica que el registro no esta funcional.
   */
  status?: 'active' | 'inactive';

  /**
   * Tipo de registro para estudiante o usuario.
   */
  type?: 'student' | 'user';
}

export interface Student extends InvoicesAPI.Base {
  concepts?: Array<Student.Concept>;

  /**
   * Tipo de documento.
   */
  document_type?: string;

  /**
   * Codigo o numero de la inscripción o matriculación del estudiante en el centro
   * educativo.
   */
  enrollment?: string;

  /**
   * Campo arbitrario de datos de terceros
   */
  external_id?: string;

  /**
   * Grado al que pertenece el alumno
   */
  grade?: string;

  /**
   * Grupo al que pertenece el alumno
   */
  group?: string;

  /**
   * Campo arbitrario de datos de terceros
   */
  metadata?: unknown;

  /**
   * Identificador del periodo en el que esta inscripto el estudiante
   */
  period_id?: string;

  /**
   * Números de identificación del estudiante.
   */
  tin?: string;
}

export namespace Student {
  export interface Concept {
    schema?: Concept.Schema;
  }

  export namespace Concept {
    export interface Schema {
      id?: string;

      name?: string;

      type?: 'membership' | 'inscription' | 'complement' | 'scholarship' | 'discount' | 'surcharge';
    }
  }
}

export type StudentCreateResponse = Array<Student>;

export type StudentRetrieveResponse = Array<Student>;

export interface StudentListResponse {
  data?: Array<Student>;

  items?: MembershipsAPI.Pagination;
}

export interface StudentDeleteResponse {
  /**
   * Identificador del campus
   */
  campus_id?: string;

  /**
   * Lista de conceptos eliminados
   */
  deleted_invoices?: unknown;

  /**
   * Identificador del estudiante
   */
  student_id?: string;
}

export interface StudentCreateParams {
  /**
   * Body param: Apellido paterno de la persona, sea un estudiante o usuario.
   */
  first_last_name: string;

  /**
   * Body param: Nombre(s) de la persona, estudiante o usuario.
   */
  name: string;

  /**
   * Body param: ID del Usuario que se desea relacionar al Estudiante.
   */
  parent_id: string;

  /**
   * Body param: ID del Programa al que se va a relacionar.
   */
  programID: string;

  /**
   * Body param: Números de identificación del estudiante.
   */
  tin: string;

  /**
   * Header param: ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * Header param: ID del periodo que se desea trabajar.
   */
  periodID: string;

  /**
   * Body param: ID del Complemento al que se va a relacionar.
   */
  complementID?: string;

  /**
   * Body param: ID del Descuento al que se va a relacionar.
   */
  discountID?: string;

  /**
   * Body param: Tipo de documento según el país - México(CURP, PASSPORT),
   * Colombia(PASSPORT, CC, CE, NIT, TI, NIP, PPT), Ecuador(PASSPORT, RUC, CI).
   */
  document_type?: 'CURP' | 'CI' | 'RUC' | 'NIT' | 'PASSPORT' | 'CC' | 'CE' | 'NIP' | 'TI' | 'PPT';

  /**
   * Body param: Codigo o numero de la inscripción o matriculación del estudiante en
   * el centro educativo.
   */
  enrollment?: string;

  /**
   * Body param: Campo arbitrario de datos de terceros
   */
  external_id?: string;

  /**
   * Body param: Grado que cursa el estudiante.
   */
  grade?: string;

  /**
   * Body param: Grupo que del estudiante.
   */
  group?: string;

  /**
   * Body param: ID del Inscripcion al que se va a relacionar.
   */
  inscriptionID?: string;

  /**
   * Body param: ID del Colegiatura al que se va a relacionar.
   */
  membershipID?: string;

  /**
   * Body param: Campo arbitrario de datos de terceros
   */
  metadata?: unknown;

  /**
   * Body param: Precarga de alumnos
   */
  preloaded?: boolean;

  /**
   * Body param: ID del Beca al que se va a relacionar.
   */
  scholarshipID?: string;

  /**
   * Body param: Apellido materno de la persona, estudiante o usuario.
   */
  second_last_name?: string;

  /**
   * Body param: ID del Recargo al que se va a relacionar.
   */
  surchargeID?: string;
}

export interface StudentRetrieveParams {
  /**
   * ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * ID del periodo que se desea trabajar.
   */
  periodID: string;
}

export type StudentUpdateParams =
  | StudentUpdateParams.StudentFullNameUpdate
  | StudentUpdateParams.Variant1
  | StudentUpdateParams.Variant2
  | StudentUpdateParams.Variant3;

export declare namespace StudentUpdateParams {
  export interface StudentFullNameUpdate {
    /**
     * Header param: ID del Campus que se desea trabajar.
     */
    campusID: string;

    /**
     * Header param: ID del periodo que se desea trabajar.
     */
    periodID: string;

    /**
     * Body param: Tipo de documento según el país - México(CURP, PASSPORT),
     * Colombia(PASSPORT, CC, CE, NIT, TI, NIP, PPT), Ecuador(PASSPORT, RUC, CI).
     */
    document_type?: 'CURP' | 'CI' | 'RUC' | 'NIT' | 'PASSPORT' | 'CC' | 'CE' | 'NIP' | 'TI' | 'PPT';

    /**
     * Body param: Primer apellido del estudiante
     */
    first_last_name?: string;

    /**
     * Body param: Grado al que pertenece el alumno
     */
    grade?: string;

    /**
     * Body param: Grupo al que pertenece el alumno
     */
    group?: string;

    /**
     * Body param: Nombre del estudiante
     */
    name?: string;

    /**
     * Body param: Segundo apellido del estudiante (opcional)
     */
    second_last_name?: string;

    /**
     * Body param: Números de identificación fiscal
     */
    tin?: string;
  }

  export interface Variant1 {
    /**
     * Body param:
     */
    body: unknown;

    /**
     * Header param: ID del Campus que se desea trabajar.
     */
    campusID: string;

    /**
     * Header param: ID del periodo que se desea trabajar.
     */
    periodID: string;
  }

  export interface Variant2 {
    /**
     * Body param:
     */
    body: unknown;

    /**
     * Header param: ID del Campus que se desea trabajar.
     */
    campusID: string;

    /**
     * Header param: ID del periodo que se desea trabajar.
     */
    periodID: string;
  }

  export interface Variant3 {
    /**
     * Body param:
     */
    body: unknown;

    /**
     * Header param: ID del Campus que se desea trabajar.
     */
    campusID: string;

    /**
     * Header param: ID del periodo que se desea trabajar.
     */
    periodID: string;
  }
}

export interface StudentListParams {
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

export interface StudentDeleteParams {
  /**
   * Header param: ID del Campus que se desea trabajar.
   */
  campusID: string;

  /**
   * Header param: ID del periodo que se desea trabajar.
   */
  periodID: string;

  /**
   * Query param: Fecha desde la cual se dará de baja
   */
  date_from?: string;
}

Students.FamilyGroup = FamilyGroup;

export declare namespace Students {
  export {
    type Persons as Persons,
    type Student as Student,
    type StudentCreateResponse as StudentCreateResponse,
    type StudentRetrieveResponse as StudentRetrieveResponse,
    type StudentListResponse as StudentListResponse,
    type StudentDeleteResponse as StudentDeleteResponse,
    type StudentCreateParams as StudentCreateParams,
    type StudentRetrieveParams as StudentRetrieveParams,
    type StudentUpdateParams as StudentUpdateParams,
    type StudentListParams as StudentListParams,
    type StudentDeleteParams as StudentDeleteParams,
  };

  export {
    FamilyGroup as FamilyGroup,
    type UserWithInformation as UserWithInformation,
    type FamilyGroupListResponse as FamilyGroupListResponse,
    type FamilyGroupAddResponse as FamilyGroupAddResponse,
    type FamilyGroupRemoveResponse as FamilyGroupRemoveResponse,
    type FamilyGroupReplaceResponse as FamilyGroupReplaceResponse,
    type FamilyGroupSetPrincipalResponse as FamilyGroupSetPrincipalResponse,
    type FamilyGroupAddParams as FamilyGroupAddParams,
    type FamilyGroupRemoveParams as FamilyGroupRemoveParams,
    type FamilyGroupReplaceParams as FamilyGroupReplaceParams,
    type FamilyGroupSetPrincipalParams as FamilyGroupSetPrincipalParams,
  };
}
