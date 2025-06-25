// Mocks for branch add API responses
export const branchSuccessResponse = {
  status: 201,
  body: {
    id: 123,
    name: 'Gulberg Branch',
    code: '102',
    phone: '3123456789',
    email: 'gulberg@deaftawk.com',
    group: 'DeafTawk PK',
  },
};

export const branchFailResponse = {
  status: 400,
  body: { message: 'Branch already exists' },
};

export const branchApiMockResponse = {
  status: 201,
  body: {
    branch_id: 123,
    branch_name: 'Gulberg Branch',
    branch_code: '102',
    hours_used: 0,
    date_created: '2025-06-24T12:41:50.461162Z',
    company_profile: 97,
    group: 'DeafTawk PK',
    status: 2,
    last_invited: '2025-06-24T12:41:50.461188Z',
    rating: 0,
    temp_user_id: 5391,
    user_id: null,
    phone_number: '3123456789',
    email: 'gulberg@deaftawk.com',
    requested_deletion: false,
  },
};
