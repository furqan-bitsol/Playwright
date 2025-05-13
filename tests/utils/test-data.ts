// Centralized test data for Playwright E2E tests

export const testRoutes = {
  login: '/login',
  dashboard: '/', // Update if dashboard route changes
  signup: '/signup',
  forgotPassword: '/forgot-password',
  // Add more named routes as needed
};

export const testUsers = {
  valid: {
    email: 'fatima.shahzad@bitsol.tech',
    password: 'Abc1234@',
  },
  invalid: {
    email: 'fatima.shahzad@bitsol.tech',
    password: 'WrongPassword',
  },
  forgotPassword: {
    valid: 'testuser@example.com',
    unregistered: 'notregistered@example.com',
    invalidFormat: 'invalidemail.com',
    empty: '',
  },
};

export const newUser = {
  name: 'test user',
  email: 'testUser1@example.com',
  password: 'SecurePass123',
};
