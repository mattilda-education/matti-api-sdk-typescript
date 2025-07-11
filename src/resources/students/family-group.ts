// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class FamilyGroup extends APIResource {
  /**
   * Listar el grupo familiar de un estudiante
   *
   * @example
   * ```ts
   * const userWithInformations =
   *   await client.students.familyGroup.list(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   );
   * ```
   */
  list(studentID: string, options?: RequestOptions): APIPromise<FamilyGroupListResponse> {
    return this._client.get(path`/students/${studentID}/family_group`, options);
  }

  /**
   * Asociar un usuario al grupo familiar de un estudiante
   *
   * @example
   * ```ts
   * const userWithInformations =
   *   await client.students.familyGroup.add(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       is_principal: true,
   *       user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  add(
    studentID: string,
    body: FamilyGroupAddParams,
    options?: RequestOptions,
  ): APIPromise<FamilyGroupAddResponse> {
    return this._client.post(path`/students/${studentID}/family_group`, { body, ...options });
  }

  /**
   * Desasociar un padre de un estudiante
   *
   * @example
   * ```ts
   * const userWithInformations =
   *   await client.students.familyGroup.remove(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       student_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       reason: 'xxxxx',
   *     },
   *   );
   * ```
   */
  remove(
    parentID: string,
    params: FamilyGroupRemoveParams,
    options?: RequestOptions,
  ): APIPromise<FamilyGroupRemoveResponse> {
    const { student_id, ...body } = params;
    return this._client.delete(path`/students/${student_id}/family_group/${parentID}`, { body, ...options });
  }

  /**
   * Reemplazar un usuario por otro en el grupo familiar de un estudiante
   *
   * @example
   * ```ts
   * const userWithInformations =
   *   await client.students.familyGroup.replace(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       student_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *       old_user_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  replace(
    newUserID: string,
    params: FamilyGroupReplaceParams,
    options?: RequestOptions,
  ): APIPromise<FamilyGroupReplaceResponse> {
    const { student_id, old_user_id } = params;
    return this._client.put(
      path`/students/${student_id}/family_group/${old_user_id}/replace/${newUserID}`,
      options,
    );
  }

  /**
   * Establecer un usuario como principal en el grupo familiar de un estudiante
   *
   * @example
   * ```ts
   * const userWithInformations =
   *   await client.students.familyGroup.setPrincipal(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { student_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e' },
   *   );
   * ```
   */
  setPrincipal(
    parentID: string,
    params: FamilyGroupSetPrincipalParams,
    options?: RequestOptions,
  ): APIPromise<FamilyGroupSetPrincipalResponse> {
    const { student_id } = params;
    return this._client.put(path`/students/${student_id}/family_group/${parentID}/principal`, options);
  }
}

export interface UserWithInformation {
  is_principal?: boolean;

  parent_id?: string;

  reason?: string | null;

  status?: string;

  user?: UserWithInformation.User;
}

export namespace UserWithInformation {
  export interface User {
    id: string;

    email: string;

    full_name: string;

    phone: string;
  }
}

export type FamilyGroupListResponse = Array<UserWithInformation>;

export type FamilyGroupAddResponse = Array<UserWithInformation>;

export type FamilyGroupRemoveResponse = Array<UserWithInformation>;

export type FamilyGroupReplaceResponse = Array<UserWithInformation>;

export type FamilyGroupSetPrincipalResponse = Array<UserWithInformation>;

export interface FamilyGroupAddParams {
  is_principal: boolean;

  user_id: string;
}

export interface FamilyGroupRemoveParams {
  /**
   * Path param:
   */
  student_id: string;

  /**
   * Body param:
   */
  reason: string;
}

export interface FamilyGroupReplaceParams {
  student_id: string;

  old_user_id: string;
}

export interface FamilyGroupSetPrincipalParams {
  student_id: string;
}

export declare namespace FamilyGroup {
  export {
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
