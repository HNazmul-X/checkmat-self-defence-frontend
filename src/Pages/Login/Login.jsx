import React, { useContext, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { UserContext } from "../../Context/UserContext";
import { userAuthToken } from "../../Util/BaseInfo";

const Login = () => {
    const inputRef = useRef(null);
    const { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = () => {
        const token = inputRef.current.value;
        if (token === userAuthToken) {
            setUser({ token: token });
            sessionStorage.setItem("token", token);
            navigate(location.state.from.pathname || "/all-player", { replace: true });
        } else {
            Swal.fire("Invalid Token", "You've entered an Invalid Token", "error");
        }
    };

    return (
        <>
            <div className="max-w-[800px] p-10 bg-rose-100 mx-auto mt-5">
                <h1 className="text-4xl text-center">Login</h1>
                <p className="text-center">Paste Your Token Here</p>
                <div className="">
                    <input ref={inputRef} type="text" className="primary-input" placeholder="Token Here" />
                    <div className="text-right">
                        <button onClick={handleLogin} className="my-btn">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
