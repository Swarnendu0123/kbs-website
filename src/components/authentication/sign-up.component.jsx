import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import { database } from "./FirebaseConfig";
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Bounce, ToastContainer, toast } from 'react-toastify';

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmedPassword] = useState("");

    const navigate = useNavigate();
    const redirectToSignIn = () => {
        navigate("/signin");
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            if (password === confirmPassword) {
                await createUserWithEmailAndPassword(database, email, password);
                toast.success('Account successfully created, please signin now!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            } else {
                toast.error('Passwords are not matching', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                return;
            }
        } catch (err) {
            toast.error('Account already exists!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            console.log(err.message);
        }
    }

    return (
        <div className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 
        before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 
        before:bg-[url('https://preline.co/assets/svg/examples/polygon-bg-element-dark.svg')]">
            <div className="flex h-full items-center py-16">
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition="Bounce"
                />
                <div className="w-full max-w-md mx-auto p-6">
                    <div className="mt-7 border rounded-xl shadow-sm bg-gray-800 border-gray-700">
                        <div className="p-4 sm:p-7">
                            <div className="text-center">
                                <h1 className="block text-2xl font-bold text-white">Sign up</h1>
                                <p className="mt-2 text-sm text-gray-400">
                                    Already have an account?
                                    <button className="text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:ring-1 focus:ring-gray-600" onClick={redirectToSignIn}>
                                        Sign in here
                                    </button>
                                </p>
                            </div>

                            <div className="mt-5">
                                <button type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200  shadow-sm disabled:opacity-50 disabled:pointer-events-none bg-slate-900 border-gray-700 text-white hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-600">
                                    <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                        <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                        <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                        <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                        <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                                    </svg>
                                    Sign up with Google
                                </button>

                                <div className="py-3 flex items-center text-xs uppercase before:flex-[1_1_0%] before:border-t before:border-gray-600 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-600 after:ms-6 text-gray-500">Or</div>


                                <form>
                                    <div className="grid gap-y-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm mb-2 text-white">Email address</label>
                                            <div className="relative">
                                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="py-3 px-4 block w-full border-gray-700 rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-900 text-gray-400 focus:ring-gray-600" required aria-describedby="email-error" />
                                                <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                                    <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                                        </div>



                                        <div>
                                            <label htmlFor="password" className="block text-sm mb-2 text-white">Password</label>
                                            <div className="relative">
                                                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="py-3 px-4 block w-full border-gray-700 rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-900 text-gray-400 focus:ring-gray-600" required aria-describedby="password-error" />
                                                <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                                    <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters required</p>
                                        </div>



                                        <div>
                                            <label htmlFor="confirm-password" className="block text-sm mb-2 text-white">Confirm Password</label>
                                            <div className="relative">
                                                <input value={confirmPassword} onChange={(e) => setConfirmedPassword(e.target.value)} type="password" id="confirm-password" name="confirm-password" className="py-3 px-4 block w-full border-gray-700 rounded-lg text-sm focus:border-green-500 focus:ring-green-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-900 text-gray-400 focus:ring-gray-600" required aria-describedby="confirm-password-error" />
                                                <div className="hidden absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                                    <svg className="h-5 w-5 text-red-500" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error">Password does not match the password</p>
                                        </div>


                                        <div className="flex items-center">
                                            <div className="flex">
                                                <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 mt-0.5 border-gray-700 rounded text-green-600  focus:ring-green-500 bg-gray-800 checked:bg-green-500 checked:border-green-500 focus:ring-offset-gray-800" required />
                                            </div>
                                            <div className="ms-3">
                                                <label htmlFor="remember-me" className="text-sm text-white">I accept the <a className="text-green-600 decoration-2 hover:underline font-medium focus:outline-none focus:ring-1 focus:ring-gray-600" href="#">Terms and Conditions</a></label>
                                            </div>
                                        </div>
                                        <button onClick={handleSignUp} type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-gray-600">Sign up</button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
