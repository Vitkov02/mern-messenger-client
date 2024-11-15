

const Login = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-100 bg-clip-padding backdrop-filer backdrop-blur-lg bg-opacity-0">
                <h1 className="te-3xl font-semibold text-center text-gray-900">
                    <span className="text-gray-900">LOGIN PAGE</span>
                </h1>

                <form>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input className="w-full input input-bordered h-10" type="text" placeholder="Enter username"/>
                    </div>

                    <div>
                        <label className="label">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input className="w-full input input-bordered h-10" type="password" placeholder="Enter passoword"/>
                    </div>
                    <a className="text-sm hover:underline hover:text-blue-700 mt-2 inline-block" href="#">{"Don't"} have an account?</a>

                    <div>
                        <button className="btn btn-block btm-sm bg-blue-700 mt-2">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;