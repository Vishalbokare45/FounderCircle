import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
// import styles from "./styles.module.css";

const Signup = () => {
	const [data, setData] = useState({
		// firstName: "",
		// lastName: "",
		userName:"",
		email: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:8080/api/users";
			const { data: res } = await axios.post(url, data);
			navigate("/");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		// <div className={styles.signup_container}>
		// 	<div className={styles.signup_form_container}>
		// 		<div className={styles.left}>
		// 			<h1>Welcome Back</h1>
		// 			<Link to="/login">
		// 				<button type="button" className={styles.white_btn}>
		// 					Sign in
		// 				</button>
		// 			</Link>
		// 		</div>
		// 		<div className={styles.right}>
		// 			<form className={styles.form_container} onSubmit={handleSubmit}>
		// 				<h1>Create Account</h1>
		// 				{/* <input
		// 					type="text"
		// 					placeholder="First Name"
		// 					name="firstName"
		// 					onChange={handleChange}
		// 					value={data.firstName}
		// 					required
		// 					className={styles.input}
		// 				/>
		// 				<input
		// 					type="text"
		// 					placeholder="Last Name"
		// 					name="lastName"
		// 					onChange={handleChange}
		// 					value={data.lastName}
		// 					required
		// 					className={styles.input}
		// 				/> */}
		// 				<input
		// 					type="text"
		// 					placeholder="User Name/Comp Name"
		// 					name="userName"
		// 					onChange={handleChange}
		// 					value={data.userName}
		// 					required
		// 					className={styles.input}
		// 				/>
		// 				<input
		// 					type="email"
		// 					placeholder="Email"
		// 					name="email"
		// 					onChange={handleChange}
		// 					value={data.email}
		// 					required
		// 					className={styles.input}
		// 				/>
		// 				<input
		// 					type="password"
		// 					placeholder="Password"
		// 					name="password"
		// 					onChange={handleChange}
		// 					value={data.password}
		// 					required
		// 					className={styles.input}
		// 				/>
		// 				{error && <div className={styles.error_msg}>{error}</div>}
		// 				<button type="submit" className={styles.green_btn}>
		// 					Sign Up
		// 				</button>
		// 			</form>
		// 		</div>
		// 	</div>
		// </div>

		<div class="container col-xl-10 col-xxl-8 px-4 py-5">
    <div class="row align-items-center g-lg-5 py-5">
      <div class="col-lg-7 text-center text-lg-start">
        <h1 class="display-4 fw-bold lh-1 text-body-emphasis mb-3">Integration <small class="text-muted fw-normal">Uniting startups worldwide, fostering collaboration and growth in one interconnected hub.</small></h1>

		
       
      </div>
      <div class="col-md-10 mx-auto col-lg-5">
	  <p class="col-lg-10 fs-4 text-center text-muted">Join With Integration</p>
        <form class="p-4 p-md-5 border rounded-3 bg-body-tertiary" onSubmit={handleSubmit}>
          <div class="form-floating mb-3">
            <input class="form-control" 
			      type="text"
				  placeholder="User Name/Comp Name"
				  name="userName"
				  onChange={handleChange}
				  value={data.userName}
				  required/>
            <label for="floatingInput">User Name/Comp Name</label>
          </div>
		  <div class="form-floating mb-3">
            <input class="form-control" 
			       type="email"
				   placeholder="Email"
				   name="email"
				   onChange={handleChange}
				   value={data.email}
				   required/>
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input class="form-control" 
			       type="password"
				   placeholder="Password"
				   name="password"
				   onChange={handleChange}
				   value={data.password}
				   required/>
            <label for="floatingPassword">Password</label>
          </div>
		  
		   {error && <div class="alert alert-danger" role="alert">
		   {error}
           </div>}
		   
          <button class="w-100 btn btn-lg btn-secondary" style={{ backgroundColor: '#5F9EA0', borderColor: '#5F9EA0' }} type="submit">Sign up</button>
          <hr class="my-4"/>
		  <Link to="/" className="text-decoration-none">
          <h6 class="text-body-secondary ">Welcome back ! Login</h6>

		  </Link>
        </form>
      </div>
    </div>
  </div>
	);
};

export default Signup;