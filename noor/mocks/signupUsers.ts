// Mock data for signup test cases
// Valid registration info
export const validUser = {
  name: 'Jane Doe',
  email: 'jane_doe_12@example.com',
  password: 'SecurePass123',
  confirmPassword: 'SecurePass123',
};

// Already registered user (for duplicate email test)
export const existingUser = {
  name: 'Jane Doe',
  email: 'janedoe@example.com',
  password: 'SecurePass123',
  confirmPassword: 'SecurePass123',
};
