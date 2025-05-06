export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }
  
  interface StoredUsers {
    [email: string]: User;
  }
  
  export const signup = (email: string, password: string, firstName: string, lastName: string): boolean => {
    const users: StoredUsers = JSON.parse(localStorage.getItem("users") || "{}");
    
    if (users[email]) {
      return false;
    }
    
    users[email] = { firstName, lastName, email, password };
    localStorage.setItem("users", JSON.stringify(users));
    return true;
  };
  
  export const login = (email: string, password: string): boolean => {
    const users: StoredUsers = JSON.parse(localStorage.getItem("users") || "{}");
    const user = users[email];
    
    if (user && user.password === password) {
      localStorage.setItem("authToken", "fake-jwt-token");
      localStorage.setItem("currentUser", JSON.stringify(user));
      return true;
    }
    return false;
  };
  
  export const isAuthenticated = (): boolean => {
    return !!localStorage.getItem("authToken");
  };
  
  export const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("currentUser");
  };
  