
export const register = async (email: string, password: string) => {
  
  return { user: { id: 1, email }, token: 'mock_token' };
};

export const login = async (email: string, password: string) => {
  
  return 'mock_token';
};