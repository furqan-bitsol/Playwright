// signup.mock.ts
// Mock data for signup test cases
export const validUser = {
  name: 'Jane Doe',
  email: 'fuqidoe@example.com',
  password: 'SecurePass123',
};

export const duplicateUser = {
  name: 'Jane Doe',
  email: 'janedoe@example.com', // Already registered
  password: 'SecurePass123',
};

export const emptyUser = {
  name: '',
  email: '',
  password: '',
};
