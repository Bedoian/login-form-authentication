import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
    const { createUser } = useContext(AuthContext)



    const handleRegister = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        console.log(email, password, name)
        // firebase create user section
        createUser(email, password)
            .then(result=>{
                console.log(result.user)
                e.target.reset()
            })
            .catch(error=>{
                console.log(error)
            })

    }
    return (
        <div className="card shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body border-2 border-gray-600 rounded-lg">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your name"
                        className="input input-bordered"
                        required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email"
                        className="input input-bordered"
                        required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        className="input input-bordered"
                        required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
                <p className="text-center">Already have an account? <Link to='/login' className="text-sky-500 link-hover">Login Now</Link></p>
            </form>

        </div>
    );
};

export default Register;