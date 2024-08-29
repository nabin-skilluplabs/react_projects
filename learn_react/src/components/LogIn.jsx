function LogIn(props) {
    return(
        <div>
           
            {
                props.isLoggedIn ? (
                    <div>Hi <strong>Skillup Labs</strong></div>
                ) : (
                    <button>Sign In</button>
                )
            }

            {
                props.isLoggedIn && (<div>Hi <strong>Skillup Labs</strong></div>)
            }

            {
                props.isLoggedIn ||  (<button>Sign In</button>)
            }
        </div>
    )
}
export default LogIn;