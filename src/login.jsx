import './login.css'

function Login(){
    return(
        <>
        <div id='login'>
            <h1>Login Account</h1>
            <h3>Username : </h3>
            <input type='email' placeholder='Enter username or email'/><br/>
            <h3>Password : </h3>
            <input type='Password' placeholder='Enter password'/><br/>
            <a href=''>Forget Password ?</a><br/>
            <button>Login</button><br/>
            <p>Don't have an account <br/>Create new account</p><br/>
        </div>
        </>
    )
}

export default Login;