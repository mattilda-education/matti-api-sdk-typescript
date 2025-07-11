# Schools

Types:

- <code><a href="./src/resources/schools.ts">School</a></code>
- <code><a href="./src/resources/schools.ts">SchoolUpdateResponse</a></code>
- <code><a href="./src/resources/schools.ts">SchoolListResponse</a></code>

Methods:

- <code title="put /schools">client.schools.<a href="./src/resources/schools.ts">update</a>({ ...params }) -> SchoolUpdateResponse</code>
- <code title="get /schools">client.schools.<a href="./src/resources/schools.ts">list</a>() -> SchoolListResponse</code>

# Campuses

Types:

- <code><a href="./src/resources/campuses.ts">Campus</a></code>
- <code><a href="./src/resources/campuses.ts">CampusUpdateResponse</a></code>
- <code><a href="./src/resources/campuses.ts">CampusListResponse</a></code>

Methods:

- <code title="post /campuses">client.campuses.<a href="./src/resources/campuses.ts">create</a>({ ...params }) -> Campus</code>
- <code title="get /campuses/{campus_ID}">client.campuses.<a href="./src/resources/campuses.ts">retrieve</a>(pathCampusID, { ...params }) -> Campus</code>
- <code title="put /campuses/{campus_ID}">client.campuses.<a href="./src/resources/campuses.ts">update</a>(pathCampusID, { ...params }) -> CampusUpdateResponse</code>
- <code title="get /campuses">client.campuses.<a href="./src/resources/campuses.ts">list</a>({ ...params }) -> CampusListResponse</code>

# Programs

Types:

- <code><a href="./src/resources/programs.ts">Program</a></code>
- <code><a href="./src/resources/programs.ts">ProgramListResponse</a></code>

Methods:

- <code title="post /programs">client.programs.<a href="./src/resources/programs.ts">create</a>({ ...params }) -> Program</code>
- <code title="get /programs/{programID}">client.programs.<a href="./src/resources/programs.ts">retrieve</a>(programID, { ...params }) -> Program</code>
- <code title="put /programs/{programID}">client.programs.<a href="./src/resources/programs.ts">update</a>(programID, { ...params }) -> Program</code>
- <code title="get /programs">client.programs.<a href="./src/resources/programs.ts">list</a>({ ...params }) -> ProgramListResponse</code>

# Inscriptions

Types:

- <code><a href="./src/resources/inscriptions.ts">Inscription</a></code>
- <code><a href="./src/resources/inscriptions.ts">InscriptionListResponse</a></code>
- <code><a href="./src/resources/inscriptions.ts">InscriptionDeleteResponse</a></code>

Methods:

- <code title="post /inscriptions">client.inscriptions.<a href="./src/resources/inscriptions.ts">create</a>({ ...params }) -> Inscription</code>
- <code title="get /inscriptions/{inscriptionID}">client.inscriptions.<a href="./src/resources/inscriptions.ts">retrieve</a>(inscriptionID, { ...params }) -> Inscription</code>
- <code title="put /inscriptions/{inscriptionID}">client.inscriptions.<a href="./src/resources/inscriptions.ts">update</a>(inscriptionID, { ...params }) -> Inscription</code>
- <code title="get /inscriptions">client.inscriptions.<a href="./src/resources/inscriptions.ts">list</a>({ ...params }) -> InscriptionListResponse</code>
- <code title="delete /inscriptions/{inscriptionID}">client.inscriptions.<a href="./src/resources/inscriptions.ts">delete</a>(inscriptionID, { ...params }) -> InscriptionDeleteResponse</code>

# Memberships

Types:

- <code><a href="./src/resources/memberships.ts">Membership</a></code>
- <code><a href="./src/resources/memberships.ts">Pagination</a></code>
- <code><a href="./src/resources/memberships.ts">MembershipListResponse</a></code>
- <code><a href="./src/resources/memberships.ts">MembershipDeleteResponse</a></code>

Methods:

- <code title="post /memberships">client.memberships.<a href="./src/resources/memberships.ts">create</a>({ ...params }) -> Membership</code>
- <code title="get /memberships/{membershipID}">client.memberships.<a href="./src/resources/memberships.ts">retrieve</a>(membershipID, { ...params }) -> Membership</code>
- <code title="put /memberships/{membershipID}">client.memberships.<a href="./src/resources/memberships.ts">update</a>(membershipID, { ...params }) -> Membership</code>
- <code title="get /memberships">client.memberships.<a href="./src/resources/memberships.ts">list</a>({ ...params }) -> MembershipListResponse</code>
- <code title="delete /memberships/{membershipID}">client.memberships.<a href="./src/resources/memberships.ts">delete</a>(membershipID, { ...params }) -> MembershipDeleteResponse</code>

# Complements

Types:

- <code><a href="./src/resources/complements.ts">Complement</a></code>
- <code><a href="./src/resources/complements.ts">ComplementListResponse</a></code>
- <code><a href="./src/resources/complements.ts">ComplementDeleteResponse</a></code>

Methods:

- <code title="post /complements">client.complements.<a href="./src/resources/complements.ts">create</a>({ ...params }) -> Complement</code>
- <code title="get /complements/{complementID}">client.complements.<a href="./src/resources/complements.ts">retrieve</a>(complementID, { ...params }) -> Complement</code>
- <code title="put /complements/{complementID}">client.complements.<a href="./src/resources/complements.ts">update</a>(complementID, { ...params }) -> Complement</code>
- <code title="get /complements">client.complements.<a href="./src/resources/complements.ts">list</a>({ ...params }) -> ComplementListResponse</code>
- <code title="delete /complements/{complementID}">client.complements.<a href="./src/resources/complements.ts">delete</a>(complementID, { ...params }) -> ComplementDeleteResponse</code>

# Scholarships

Types:

- <code><a href="./src/resources/scholarships.ts">Scholarship</a></code>
- <code><a href="./src/resources/scholarships.ts">ScholarshipListResponse</a></code>
- <code><a href="./src/resources/scholarships.ts">ScholarshipDeleteResponse</a></code>

Methods:

- <code title="post /scholarships">client.scholarships.<a href="./src/resources/scholarships.ts">create</a>({ ...params }) -> Scholarship</code>
- <code title="get /scholarships/{scholarshipID}">client.scholarships.<a href="./src/resources/scholarships.ts">retrieve</a>(scholarshipID, { ...params }) -> Scholarship</code>
- <code title="put /scholarships/{scholarshipID}">client.scholarships.<a href="./src/resources/scholarships.ts">update</a>(scholarshipID, { ...params }) -> Scholarship</code>
- <code title="get /scholarships">client.scholarships.<a href="./src/resources/scholarships.ts">list</a>({ ...params }) -> ScholarshipListResponse</code>
- <code title="delete /scholarships/{scholarshipID}">client.scholarships.<a href="./src/resources/scholarships.ts">delete</a>(scholarshipID, { ...params }) -> ScholarshipDeleteResponse</code>

# Discounts

Types:

- <code><a href="./src/resources/discounts.ts">Discount</a></code>
- <code><a href="./src/resources/discounts.ts">DiscountListResponse</a></code>

Methods:

- <code title="post /discounts">client.discounts.<a href="./src/resources/discounts.ts">create</a>({ ...params }) -> Discount</code>
- <code title="get /discounts/{discountID}">client.discounts.<a href="./src/resources/discounts.ts">retrieve</a>(discountID, { ...params }) -> Discount</code>
- <code title="put /discounts/{discountID}">client.discounts.<a href="./src/resources/discounts.ts">update</a>(discountID, { ...params }) -> Discount</code>
- <code title="get /discounts">client.discounts.<a href="./src/resources/discounts.ts">list</a>({ ...params }) -> DiscountListResponse</code>

# Invoices

Types:

- <code><a href="./src/resources/invoices.ts">Base</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceEntry</a></code>
- <code><a href="./src/resources/invoices.ts">InvoiceListResponse</a></code>

Methods:

- <code title="get /invoices/{invoiceID}">client.invoices.<a href="./src/resources/invoices.ts">retrieve</a>(invoiceID, { ...params }) -> InvoiceEntry</code>
- <code title="get /invoices">client.invoices.<a href="./src/resources/invoices.ts">list</a>({ ...params }) -> InvoiceListResponse</code>

# Payments

Types:

- <code><a href="./src/resources/payments.ts">PaymentEntry</a></code>
- <code><a href="./src/resources/payments.ts">PaymentListResponse</a></code>

Methods:

- <code title="post /payments">client.payments.<a href="./src/resources/payments.ts">create</a>({ ...params }) -> PaymentEntry</code>
- <code title="get /payments/{paymentID}">client.payments.<a href="./src/resources/payments.ts">retrieve</a>(paymentID, { ...params }) -> PaymentEntry</code>
- <code title="get /payments">client.payments.<a href="./src/resources/payments.ts">list</a>({ ...params }) -> PaymentListResponse</code>

# Ledger

Types:

- <code><a href="./src/resources/ledger.ts">LedgerEntries</a></code>
- <code><a href="./src/resources/ledger.ts">LedgerCreateResponse</a></code>
- <code><a href="./src/resources/ledger.ts">LedgerListResponse</a></code>

Methods:

- <code title="post /ledger">client.ledger.<a href="./src/resources/ledger.ts">create</a>({ ...params }) -> LedgerCreateResponse</code>
- <code title="get /ledger/{ledgerID}">client.ledger.<a href="./src/resources/ledger.ts">retrieve</a>(ledgerID, { ...params }) -> LedgerEntries</code>
- <code title="put /ledger">client.ledger.<a href="./src/resources/ledger.ts">update</a>({ ...params }) -> LedgerEntries</code>
- <code title="get /ledger">client.ledger.<a href="./src/resources/ledger.ts">list</a>({ ...params }) -> LedgerListResponse</code>

# Students

Types:

- <code><a href="./src/resources/students/students.ts">Persons</a></code>
- <code><a href="./src/resources/students/students.ts">Student</a></code>
- <code><a href="./src/resources/students/students.ts">StudentCreateResponse</a></code>
- <code><a href="./src/resources/students/students.ts">StudentRetrieveResponse</a></code>
- <code><a href="./src/resources/students/students.ts">StudentListResponse</a></code>
- <code><a href="./src/resources/students/students.ts">StudentDeleteResponse</a></code>

Methods:

- <code title="post /students">client.students.<a href="./src/resources/students/students.ts">create</a>({ ...params }) -> StudentCreateResponse</code>
- <code title="get /students/{studentID}">client.students.<a href="./src/resources/students/students.ts">retrieve</a>(studentID, { ...params }) -> StudentRetrieveResponse</code>
- <code title="put /students/{studentID}">client.students.<a href="./src/resources/students/students.ts">update</a>(studentID, { ...params }) -> Student</code>
- <code title="get /students">client.students.<a href="./src/resources/students/students.ts">list</a>({ ...params }) -> StudentListResponse</code>
- <code title="delete /students/{studentID}">client.students.<a href="./src/resources/students/students.ts">delete</a>(studentID, { ...params }) -> StudentDeleteResponse</code>

## FamilyGroup

Types:

- <code><a href="./src/resources/students/family-group.ts">UserWithInformation</a></code>
- <code><a href="./src/resources/students/family-group.ts">FamilyGroupListResponse</a></code>
- <code><a href="./src/resources/students/family-group.ts">FamilyGroupAddResponse</a></code>
- <code><a href="./src/resources/students/family-group.ts">FamilyGroupRemoveResponse</a></code>
- <code><a href="./src/resources/students/family-group.ts">FamilyGroupReplaceResponse</a></code>
- <code><a href="./src/resources/students/family-group.ts">FamilyGroupSetPrincipalResponse</a></code>

Methods:

- <code title="get /students/{student_id}/family_group">client.students.familyGroup.<a href="./src/resources/students/family-group.ts">list</a>(studentID) -> FamilyGroupListResponse</code>
- <code title="post /students/{student_id}/family_group">client.students.familyGroup.<a href="./src/resources/students/family-group.ts">add</a>(studentID, { ...params }) -> FamilyGroupAddResponse</code>
- <code title="delete /students/{student_id}/family_group/{parent_id}">client.students.familyGroup.<a href="./src/resources/students/family-group.ts">remove</a>(parentID, { ...params }) -> FamilyGroupRemoveResponse</code>
- <code title="put /students/{student_id}/family_group/{old_user_id}/replace/{new_user_id}">client.students.familyGroup.<a href="./src/resources/students/family-group.ts">replace</a>(newUserID, { ...params }) -> FamilyGroupReplaceResponse</code>
- <code title="put /students/{student_id}/family_group/{parent_id}/principal">client.students.familyGroup.<a href="./src/resources/students/family-group.ts">setPrincipal</a>(parentID, { ...params }) -> FamilyGroupSetPrincipalResponse</code>

# Users

Types:

- <code><a href="./src/resources/users.ts">User</a></code>
- <code><a href="./src/resources/users.ts">UserCreateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserRetrieveResponse</a></code>
- <code><a href="./src/resources/users.ts">UserUpdateResponse</a></code>
- <code><a href="./src/resources/users.ts">UserListResponse</a></code>
- <code><a href="./src/resources/users.ts">UserDeleteResponse</a></code>
- <code><a href="./src/resources/users.ts">UserCreatePasswordlessResponse</a></code>

Methods:

- <code title="post /users">client.users.<a href="./src/resources/users.ts">create</a>({ ...params }) -> UserCreateResponse</code>
- <code title="get /users/{userID}">client.users.<a href="./src/resources/users.ts">retrieve</a>(userID, { ...params }) -> UserRetrieveResponse</code>
- <code title="put /users/{userID}">client.users.<a href="./src/resources/users.ts">update</a>(userID, { ...params }) -> UserUpdateResponse</code>
- <code title="get /users">client.users.<a href="./src/resources/users.ts">list</a>({ ...params }) -> UserListResponse</code>
- <code title="delete /users/{userID}">client.users.<a href="./src/resources/users.ts">delete</a>(userID, { ...params }) -> UserDeleteResponse</code>
- <code title="get /users/passwordless/{userID}">client.users.<a href="./src/resources/users.ts">createPasswordless</a>(userID, { ...params }) -> UserCreatePasswordlessResponse</code>

# Periods

Types:

- <code><a href="./src/resources/periods.ts">Period</a></code>
- <code><a href="./src/resources/periods.ts">PeriodCreate</a></code>
- <code><a href="./src/resources/periods.ts">PeriodCreateResponse</a></code>
- <code><a href="./src/resources/periods.ts">PeriodDeleteResponse</a></code>

Methods:

- <code title="post /periods">client.periods.<a href="./src/resources/periods.ts">create</a>({ ...params }) -> PeriodCreateResponse</code>
- <code title="get /periods/{period_ID}">client.periods.<a href="./src/resources/periods.ts">retrieve</a>(periodID, { ...params }) -> Period</code>
- <code title="put /periods/{period_ID}">client.periods.<a href="./src/resources/periods.ts">update</a>(periodID, { ...params }) -> Period</code>
- <code title="get /periods">client.periods.<a href="./src/resources/periods.ts">list</a>({ ...params }) -> Period</code>
- <code title="delete /periods/{period_ID}">client.periods.<a href="./src/resources/periods.ts">delete</a>(periodID, { ...params }) -> PeriodDeleteResponse</code>
