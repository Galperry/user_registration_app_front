import React, {useRef} from 'react'
import { connect } from "react-redux";
import './Registration.css'
import {addUser} from '../actions'

function Registration(props) {
    let usernameRef = useRef(null)
    let emailRef = useRef(null)
    let ageRef = useRef(null)
    const {addUser} = props;

    function submitUser(e){
        e.preventDefault()
        addUser({username:usernameRef.current.value, email:emailRef.current.value, age:ageRef.current.value})
    }
    return (
        <div className="container d-flex justify-content-center py-5">
            <div className="card p-4">
                <div className={`${props.message ? "":"d-none"} alert alert-success`}>{props.message}</div>
                <div className={`${props.error ? "":"d-none"} alert alert-danger`}>{props.error}</div>

                <h1 className="pb-4 text-center">Registration</h1>
                <form onSubmit={(e)=>submitUser(e)}>
                    <div className="mb-2">
                        <label className="form-label" htmlFor="username">Username</label>
                        <input ref={usernameRef} className="form-control" id="username" name="username" type="text"/>
                    </div>
                    <div className="mb-2">
                        <label className="form-label" htmlFor="email">Email</label>
                        <input ref={emailRef} className="form-control" id="email" name="email" type="text"/>
                    </div>
                    <div className="mb-2">
                        <label className="form-label" htmlFor="age">Age</label>
                        <input ref={ageRef} className="form-control" id="age" name="age" type="number"/>
                    </div>
                    <button className="mt-3 btn btn-primary w-100">Add user</button>
                </form>
            </div>
     
        </div>
    )
}

const mapStateToProps = state => {
    return {
      error: state.user.errMsg,
      message: state.user.msg
    };
  };

export default connect(mapStateToProps,{addUser})(Registration);