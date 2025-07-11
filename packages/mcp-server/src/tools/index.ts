// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Metadata, Endpoint, HandlerFunction } from './types';

export { Metadata, Endpoint, HandlerFunction };

import update_schools from './schools/update-schools';
import list_schools from './schools/list-schools';
import create_campuses from './campuses/create-campuses';
import retrieve_campuses from './campuses/retrieve-campuses';
import update_campuses from './campuses/update-campuses';
import list_campuses from './campuses/list-campuses';
import create_programs from './programs/create-programs';
import retrieve_programs from './programs/retrieve-programs';
import update_programs from './programs/update-programs';
import list_programs from './programs/list-programs';
import create_inscriptions from './inscriptions/create-inscriptions';
import retrieve_inscriptions from './inscriptions/retrieve-inscriptions';
import update_inscriptions from './inscriptions/update-inscriptions';
import list_inscriptions from './inscriptions/list-inscriptions';
import delete_inscriptions from './inscriptions/delete-inscriptions';
import create_memberships from './memberships/create-memberships';
import retrieve_memberships from './memberships/retrieve-memberships';
import update_memberships from './memberships/update-memberships';
import list_memberships from './memberships/list-memberships';
import delete_memberships from './memberships/delete-memberships';
import create_complements from './complements/create-complements';
import retrieve_complements from './complements/retrieve-complements';
import update_complements from './complements/update-complements';
import list_complements from './complements/list-complements';
import delete_complements from './complements/delete-complements';
import create_scholarships from './scholarships/create-scholarships';
import retrieve_scholarships from './scholarships/retrieve-scholarships';
import update_scholarships from './scholarships/update-scholarships';
import list_scholarships from './scholarships/list-scholarships';
import delete_scholarships from './scholarships/delete-scholarships';
import create_discounts from './discounts/create-discounts';
import retrieve_discounts from './discounts/retrieve-discounts';
import update_discounts from './discounts/update-discounts';
import list_discounts from './discounts/list-discounts';
import retrieve_invoices from './invoices/retrieve-invoices';
import list_invoices from './invoices/list-invoices';
import create_payments from './payments/create-payments';
import retrieve_payments from './payments/retrieve-payments';
import list_payments from './payments/list-payments';
import create_ledger from './ledger/create-ledger';
import retrieve_ledger from './ledger/retrieve-ledger';
import update_ledger from './ledger/update-ledger';
import list_ledger from './ledger/list-ledger';
import create_students from './students/create-students';
import retrieve_students from './students/retrieve-students';
import update_students from './students/update-students';
import list_students from './students/list-students';
import delete_students from './students/delete-students';
import list_students_family_group from './students/family-group/list-students-family-group';
import add_students_family_group from './students/family-group/add-students-family-group';
import remove_students_family_group from './students/family-group/remove-students-family-group';
import replace_students_family_group from './students/family-group/replace-students-family-group';
import set_principal_students_family_group from './students/family-group/set-principal-students-family-group';
import create_users from './users/create-users';
import retrieve_users from './users/retrieve-users';
import update_users from './users/update-users';
import list_users from './users/list-users';
import delete_users from './users/delete-users';
import create_passwordless_users from './users/create-passwordless-users';
import create_periods from './periods/create-periods';
import retrieve_periods from './periods/retrieve-periods';
import update_periods from './periods/update-periods';
import list_periods from './periods/list-periods';
import delete_periods from './periods/delete-periods';

export const endpoints: Endpoint[] = [];

function addEndpoint(endpoint: Endpoint) {
  endpoints.push(endpoint);
}

addEndpoint(update_schools);
addEndpoint(list_schools);
addEndpoint(create_campuses);
addEndpoint(retrieve_campuses);
addEndpoint(update_campuses);
addEndpoint(list_campuses);
addEndpoint(create_programs);
addEndpoint(retrieve_programs);
addEndpoint(update_programs);
addEndpoint(list_programs);
addEndpoint(create_inscriptions);
addEndpoint(retrieve_inscriptions);
addEndpoint(update_inscriptions);
addEndpoint(list_inscriptions);
addEndpoint(delete_inscriptions);
addEndpoint(create_memberships);
addEndpoint(retrieve_memberships);
addEndpoint(update_memberships);
addEndpoint(list_memberships);
addEndpoint(delete_memberships);
addEndpoint(create_complements);
addEndpoint(retrieve_complements);
addEndpoint(update_complements);
addEndpoint(list_complements);
addEndpoint(delete_complements);
addEndpoint(create_scholarships);
addEndpoint(retrieve_scholarships);
addEndpoint(update_scholarships);
addEndpoint(list_scholarships);
addEndpoint(delete_scholarships);
addEndpoint(create_discounts);
addEndpoint(retrieve_discounts);
addEndpoint(update_discounts);
addEndpoint(list_discounts);
addEndpoint(retrieve_invoices);
addEndpoint(list_invoices);
addEndpoint(create_payments);
addEndpoint(retrieve_payments);
addEndpoint(list_payments);
addEndpoint(create_ledger);
addEndpoint(retrieve_ledger);
addEndpoint(update_ledger);
addEndpoint(list_ledger);
addEndpoint(create_students);
addEndpoint(retrieve_students);
addEndpoint(update_students);
addEndpoint(list_students);
addEndpoint(delete_students);
addEndpoint(list_students_family_group);
addEndpoint(add_students_family_group);
addEndpoint(remove_students_family_group);
addEndpoint(replace_students_family_group);
addEndpoint(set_principal_students_family_group);
addEndpoint(create_users);
addEndpoint(retrieve_users);
addEndpoint(update_users);
addEndpoint(list_users);
addEndpoint(delete_users);
addEndpoint(create_passwordless_users);
addEndpoint(create_periods);
addEndpoint(retrieve_periods);
addEndpoint(update_periods);
addEndpoint(list_periods);
addEndpoint(delete_periods);

export type Filter = {
  type: 'resource' | 'operation' | 'tag' | 'tool';
  op: 'include' | 'exclude';
  value: string;
};

export function query(filters: Filter[], endpoints: Endpoint[]): Endpoint[] {
  const allExcludes = filters.length > 0 && filters.every((filter) => filter.op === 'exclude');
  const unmatchedFilters = new Set(filters);

  const filtered = endpoints.filter((endpoint: Endpoint) => {
    let included = false || allExcludes;

    for (const filter of filters) {
      if (match(filter, endpoint)) {
        unmatchedFilters.delete(filter);
        included = filter.op === 'include';
      }
    }

    return included;
  });

  // Check if any filters didn't match
  const unmatched = Array.from(unmatchedFilters).filter((f) => f.type === 'tool' || f.type === 'resource');
  if (unmatched.length > 0) {
    throw new Error(
      `The following filters did not match any endpoints: ${unmatched
        .map((f) => `${f.type}=${f.value}`)
        .join(', ')}`,
    );
  }

  return filtered;
}

function match({ type, value }: Filter, endpoint: Endpoint): boolean {
  switch (type) {
    case 'resource': {
      const regexStr = '^' + normalizeResource(value).replace(/\*/g, '.*') + '$';
      const regex = new RegExp(regexStr);
      return regex.test(normalizeResource(endpoint.metadata.resource));
    }
    case 'operation':
      return endpoint.metadata.operation === value;
    case 'tag':
      return endpoint.metadata.tags.includes(value);
    case 'tool':
      return endpoint.tool.name === value;
  }
}

function normalizeResource(resource: string): string {
  return resource.toLowerCase().replace(/[^a-z.*\-_]*/g, '');
}
