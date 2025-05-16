export interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  mobile: string;
}



export const signup = async (
  email: string,
  password: string,
  firstname: string,
  lastname: string,
  mobile: string
): Promise<boolean> => {
  const body = new URLSearchParams({
    email,
    password,
    firstname,
    lastname,
    mobile,
    confirmPassword: password, // match Postman format
  });

  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: body.toString(),
  });
  console.log(response.ok);

  if (response.ok) {
    const user = await response.json();
    localStorage.setItem("currentUser", JSON.stringify(user));
    return true;
  }

  return false;
};


export const login = async (email: string, password: string): Promise<boolean> => {
  const response = await fetch(`/api/user/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json"
    }
  });
  console.log(response.ok);

  if (response.ok) {
    const user = await response.json();
    localStorage.setItem("currentUser", JSON.stringify(user));
    return true;
  }
  return false;
};

export const isAuthenticated = (): boolean => {
  return !!localStorage.getItem("currentUser");
};

export const logout = () => {
  localStorage.removeItem("currentUser");
};
