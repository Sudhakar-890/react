import styles from './login.module.css'

function Login(){

    return(
        <>
        
        <div className={styles.login}>
            <h1 className={styles.title}>Login Account</h1>
            <h3 className={styles.h3tags}>Username : </h3>
            <input className={styles.input} type='email' placeholder='Enter username or email'/><br/>
            <h3 className={styles.h3tags}>Password : </h3>
            <input className={styles.input} type='Password' placeholder='Enter password'/><br/>
            <a id={styles.forget} href=''>Forget Password ?</a><br/>
            <button id={styles.loginBtn}>Login</button><br/>
            <p id={styles.newAccount}>Don't have an account <br/>Create new account</p><br/>
        </div>
        </>
    )
}

export default Login;