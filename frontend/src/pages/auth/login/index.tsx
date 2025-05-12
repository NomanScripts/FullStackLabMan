import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "../../../components/ui/alert";
import { Checkbox } from "../../../components/ui/checkbox";
import { login } from "../AuthService";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { AlertCircle } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import googleIcon from "../../../assets/images/google-icon.png";
import githubIcon from "../../../assets/images/github-icon.png";
import facebookIcon from "../../../assets/images/facebook-icon.png";
import emailIcon from "../../../assets/images/mail-icon.png";

const Login = () => {
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (showAlert) {
  //     const timer = setTimeout(() => {
  //       setShowAlert(false);
  //       if (alertMessage === "Login Successful!") {
  //         navigate("/dashboard");
  //       }
  //     }, 2000);
  //     return () => clearTimeout(timer);
  //   }
  // }, [showAlert, alertMessage, navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result) {
      setAlertMessage("Login Successful!");
      setShowAlert(true);
      navigate("/dashboard");
    } else {
      setAlertMessage("Invalid Credentials");
      setShowAlert(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="">
      <div className="fixed top-0 left-0 right-0 p-6 flex justify-center mb-10">
        <img
          src={logo}
          alt="Labman"
          className="h-7 w-40"
        />
      </div>

      {showAlert && (
        <div
          className={`fixed top-14 right-6 z-50 w-[300px] animate-bounce ${
            showAlert
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <Alert
            variant={
              alertMessage === "Login Successful!" ? "default" : "destructive"
            }
          >
            <div className="flex items-center gap-2 mb-1">
              {alertMessage === "Login Successful!" ? (
                <>
                  <HandThumbUpIcon className="text-green-600 h-5 w-5" />
                  <AlertTitle className="text-green-600">Success</AlertTitle>
                </>
              ) : (
                <>
                  <AlertCircle className="text-red-600" />
                  <AlertTitle className="text-red-600">Error</AlertTitle>
                </>
              )}
            </div>
            <AlertDescription
              className={
                alertMessage === "Login Successful!"
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {alertMessage}
            </AlertDescription>
          </Alert>
        </div>
      )}

      <div className="flex min-h-screen items-center justify-center">
        <div className="w-full max-w-md rounded-xl bg-white px-8 py-12 m-4 shadow-lg">
          {showEmailLogin ? (
            <>
              <button
                onClick={() => setShowEmailLogin(false)}
                className="absolute left-8 top-4 p-2 text-gray-600 hover:text-gray-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </button>

              <div>
                <h2 className="mb-2 text-center text-2xl font-bold text-dark-100 xs:text-base">
                  Login with your Email
                </h2>
                <form className="mt-8 space-y-4" onSubmit={handleLogin}>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-dark-100 xs:text-xs"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email here"
                      className="mt-1 block w-full rounded border border-gray-300 px-4 py-3 text-dark-100 placeholder-gray-400 focus:border-primaryOrange-100 focus:outline-none xs:text-xs"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-dark-100 xs:text-xs"
                    >
                      Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 block w-full rounded border border-gray-300 px-4 py-3 text-dark-100 placeholder-gray-400 focus:border-primaryOrange-100 focus:outline-none xs:text-xs pr-10"
                      />

                      <button
                        type="button"
                        className="absolute right-3 top-[38%]"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? (
                          <EyeIcon className="h-4 w-4 text-gray-500" />
                        ) : (
                          <EyeSlashIcon className="h-4 w-4 text-gray-500" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox className="border-gray-300 data-[state=checked]:bg-primaryOrange-100 data-[state=checked]:text-white rounded data-[state=checked]:border-primaryOrange-100 " />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-dark-100 xs:text-xs"
                      >
                        Remember me
                      </label>
                    </div>
                    <a className="text-sm text-dark-100 hover:text-primaryOrange-100 xs:text-xs">
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-md bg-primaryOrange-100 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-700 xs:text-xs"
                  >
                    Login
                  </button>
                  <button
                    type="submit"
                    className="w-full rounded-md px-4 py-3 text-sm  text-dark-100  border border-gray-300 hover:bg-gray-50 xs:text-xs"
                  >
                    <p className="text-dark-100 text-sm xs:text-xxs">
                      Don't have an account?{" "}
                      <a
                        href="/signup"
                        className="text-base font-bold text-primaryOrange-100 hover:text-orange-400 xs:text-xxs"
                      >
                        Sign up here
                      </a>
                    </p>
                  </button>
                </form>
              </div>
            </>
          ) : (
            <>
              <h2 className="mb-2 text-center text-2xl font-bold text-dark-100">
                Welcome back
              </h2>
              <p className="mb-8 text-center text-dark-70 text-sm">
                Login to Labman to continue
              </p>

              <div className="space-y-4">
                <button className="flex w-full items-center rounded-md border border-gray-300 bg-white px-4 py-3 text-dark-100 hover:bg-gray-50">
                  <img
                    src={googleIcon}
                    alt="Google"
                    className="mr-3 h-5 w-5"
                  />
                  <span className="font-semibold text-sm flex-grow text-center">
                    Login with Google
                  </span>
                </button>

                <button className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-dark-100 hover:bg-gray-50">
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    className="mr-3 h-5 w-5"
                  />
                  <span className="font-semibold text-sm flex-grow text-center">
                    Login with Github
                  </span>
                </button>

                <button className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-dark-100 hover:bg-gray-50">
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    className="mr-3 h-5 w-5"
                  />
                  <span className="font-semibold text-sm flex-grow text-center">
                    Login with Facebook
                  </span>
                </button>

                <button
                  onClick={() => setShowEmailLogin(true)}
                  className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-dark-100 hover:bg-gray-50"
                >
                  <img
                    src={emailIcon}
                    alt="Email"
                    className="mr-3 h-5 w-5"
                  />
                  <span className="font-semibold text-sm flex-grow text-center">
                    Login with your Email
                  </span>
                </button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm ">
                  Don't have an account?{" "}
                  <a
                    href="/signup"
                    className="text-base font-bold text-primaryOrange-100 hover:text-orange-400 xs:text-xs"
                  >
                    Sign up here
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
