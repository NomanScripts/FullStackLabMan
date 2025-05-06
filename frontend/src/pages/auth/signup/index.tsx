import { useState, useEffect } from "react";
import PasswordStrengthBar from "react-password-strength-bar";
import { useNavigate } from "react-router-dom";
import { signup } from "../AuthService";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { Alert, AlertDescription, AlertTitle } from "../../../components/ui/alert";
import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import { AlertCircle } from "lucide-react";
import googleIcon from "../../../assets/images/google-icon.png";
import githubIcon from "../../../assets/images/github-icon.png";
import facebookIcon from "../../../assets/images/facebook-icon.png";
import emailIcon from "../../../assets/images/mail-icon.png";
import logo from "../../../assets/images/logo.png";
const Signup = () => {
  const [showEmailSignup, setShowEmailSignup] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert(false);
        if (alertMessage === "Signup Successful!") {
          navigate("/login");
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [showAlert, alertMessage, navigate]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setAlertMessage("Passwords don't match!");
      setShowAlert(true);
      return;
    }

    if (signup(email, password, firstName, lastName)) {
      setAlertMessage("Signup Successful!");
      setShowAlert(true);
    } else {
      setAlertMessage("Signup Failed! Please try again.");
      setShowAlert(true);
    }
  };

  return (
    <div className="">
      <div className=" top-0 left-0 right-0 p-6 flex justify-center">
        <img
          src={logo}
          alt="Labman"
          className="h-7 w-40"
        />
      </div>

      <div className="flex items-center justify-center">
        <div className="w-full max-w-md rounded-xl bg-white px-8 py-12 m-4 shadow-lg">
          {showEmailSignup ? (
            <>
              <button
                onClick={() => setShowEmailSignup(false)}
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
                  Signup with your Email
                </h2>
                <form className="mt-8 space-y-4" onSubmit={handleSignup}>
                  <div className="flex flex-row gap-4">
                    <div>
                      <label
                        htmlFor="firstname"
                        className="block text-sm font-medium text-dark-100 xs:text-xs"
                      >
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="firstname"
                        name="firstname"
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter here"
                        className="mt-1 block w-full rounded border border-gray-300 px-4 py-3 text-dark-100 placeholder-gray-400 focus:border-primaryOrange-100 focus:outline-none xs:text-xs"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastname"
                        className="block text-sm font-medium text-dark-100 xs:text-xs"
                      >
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="lastname"
                        name="lastname"
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter here"
                        className="mt-1 block w-full rounded border border-gray-300 px-4 py-3 text-dark-100 placeholder-gray-400 focus:border-primaryOrange-100 focus:outline-none xs:text-xs"
                      />
                    </div>
                  </div>
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
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                    {password && (
                      <div className="lg:w-2/5 w-4/6 mt-4">
                        <PasswordStrengthBar
                          password={password}
                          className=""
                          scoreWords={[
                            "Password is too short",
                            "Password is short",
                            "Password is medium",
                            "Password is strong",
                            "Password is very strong",
                          ]}
                        />
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-400 mt-2 text-xs lg:text-sm ">
                        At least <span className="text-dark-100">8 characters</span>, containing <span className="text-dark-100">a letter </span> and a <span className="text-dark-100">number</span>
                      </p>
                    </div>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-sm font-medium text-dark-100 xs:text-xs"
                    >
                      Retype Password <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"  
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Enter Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="mt-1 block w-full rounded border border-gray-300 px-4 py-3 text-dark-100 placeholder-gray-400 focus:border-primaryOrange-100 focus:outline-none xs:text-xs pr-10"
                      />

                      <button
                        type="button"
                        className="absolute right-3 top-[38%]"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        {showConfirmPassword ? (
                          <EyeIcon className="h-4 w-4 text-gray-500" />
                        ) : (
                          <EyeSlashIcon className="h-4 w-4 text-gray-500" />
                        )}
                      </button>
                    </div>           
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-md bg-primaryOrange-100 px-4 py-3 text-sm font-semibold text-white hover:bg-orange-700 xs:text-xs"
                  >
                    Signup
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
                Signup to Labman to continue
              </p>

              <div className="space-y-4">
                <button className="flex w-full items-center rounded-md border border-gray-300 bg-white px-4 py-3 text-dark-100 hover:bg-gray-50">
                  <img
                    src={googleIcon}
                    alt="Google"
                    className="mr-3 h-5 w-5"
                  />
                  <span className="font-semibold text-sm flex-grow text-center">
                    Signup with Google
                  </span>
                </button>

                <button className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-dark-100 hover:bg-gray-50">
                  <img
                    src={githubIcon}
                    alt="GitHub"
                    className="mr-3 h-5 w-5"
                  />
                  <span className="font-semibold text-sm flex-grow text-center">
                    Signup with Github
                  </span>
                </button>

                <button className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-dark-100 hover:bg-gray-50">
                  <img
                    src={facebookIcon}
                    alt="Facebook"
                    className="mr-3 h-5 w-5"
                  />
                  <span className="font-semibold text-sm flex-grow text-center">
                    Signup with Facebook
                  </span>
                </button>

                <button
                  onClick={() => setShowEmailSignup(true)}
                  className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-3 text-dark-100 hover:bg-gray-50"
                >
                  <img
                    src={emailIcon}
                    alt="Email"
                    className="mr-3 h-5 w-5"
                  />
                  <span className="font-semibold text-sm flex-grow text-center">
                    Signup with your Email
                  </span>
                </button>
              </div>

              <div className="mt-8 text-center">
                <p className="text-gray-600 text-sm ">
                  Already have an account?{" "}
                  <a
                    href="/login"
                    className="text-base font-bold text-primaryOrange-100 hover:text-orange-400 xs:text-xs"
                  >
                    Login here
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {!showEmailSignup && (
        <div className="flex justify-center">
          <div className="max-w-xs mt-4 text-center">
            <p className="text-sm text-gray-600">
              By signing up, you agree to Labman's{" "}
              <a
                href="/terms"
                className="text-primaryOrange-100 hover:text-orange-400"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy"
                className="text-primaryOrange-100 hover:text-orange-400"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
        </div>
      )}

      {showAlert && (
        <div className={`fixed top-14 right-6 z-50 w-[300px] animate-bounce ${
          showAlert ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}>
          <Alert variant={alertMessage === "Signup Successful!" ? "default" : "destructive"}>
            <div className="flex items-center gap-2 mb-1">
              {alertMessage === "Signup Successful!" ? (
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
            <AlertDescription className={
              alertMessage === "Signup Successful!" ? "text-green-600" : "text-red-600"
            }>
              {alertMessage}
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
};

export default Signup;
