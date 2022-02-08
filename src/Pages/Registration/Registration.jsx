import React, { useState } from "react";
import Swal from "sweetalert2";
import { apiBase } from "../../Util/BaseInfo";

const Registration = () => {
    const [isSpinner, setIsSpinner] = useState(false);
    const [martialArt, setMartialArt] = useState("");
    const [isNumberFieldValid, setIsNumberFieldValid] = useState({
        age: true,
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!isNumberFieldValid.age) return;
        setIsSpinner(true);
        const formApi = new FormData(e.currentTarget);
        let formData = Object.fromEntries(formApi.entries());
        formData = { ...formData, createdAt: Date.now(), updatedAt: Date.now(), email: formData?.email.toLowerCase?.() };
        fetch(`${apiBase}/api/add-people`, {
            method: "POST",
            headers: {
                "content-type": "application/JSON",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.success) {
                    Swal.fire("Registered", `You data successfully Added. Your Id is ${data?.id}`, "success");
                    setIsSpinner(false);
                } else {
                    Swal.fire("Error", data.message, "error");
                    setIsSpinner(false);
                }
            })
            .catch((e) => {
                setIsSpinner(true);
                Swal.fire("Failed To Create", e.message, "error");
            });
    };

    return (
        <>
            <div className="container bg-gray-300 p-4 md:p-10">
                <h1 className="md:text-4xl text-2xl font-bold text-center">Register</h1>
            </div>

            <div className="bg-gray-300 md:mt-3 border-t-4 border-gray-600 md:p-10 py-10 px-3 lg:max-w-[50%] md:max-w-[80%] sm:max-w-[90%] mx-auto md:rounded-xl shadow-xl">
                <form onSubmit={handleFormSubmit} action="" className="w-full mx-auto">
                    <div className="my-3">
                        <label className="font-medium text-lg text-gray-600" htmlFor="name">
                            Full Name
                        </label>
                        <input name="name" required type="text" className="primary-input mt-0" />
                    </div>
                    <div className="my-5">
                        <label className="font-medium text-lg text-gray-600" htmlFor="name">
                            Email
                        </label>
                        <input type="email" name="email" required className="primary-input mt-0" />
                    </div>
                    <div className="my-5">
                        <label className="font-medium text-lg text-gray-600" htmlFor="name">
                            Age
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setIsNumberFieldValid({ ...isNumberFieldValid, age: /^\d+$/.test(e.currentTarget?.value) })}
                            name="age"
                            required
                            className="primary-input mt-0"
                        />
                        {isNumberFieldValid?.age || <small className="text-red-500">Please Enter Number Only</small>}
                    </div>
                    <div className="my-5 mb-0">
                        <label className="font-medium text-lg text-gray-600" htmlFor="name">
                            Have you taken a Martial Art ?
                        </label>
                        <div className="flex space-x-4 py-3">
                            <div className="flex items-center gap-2">
                                <input
                                    onChange={(e) => setMartialArt(e.currentTarget?.value)}
                                    required
                                    type="radio"
                                    className=""
                                    style={{ width: "25px", height: "25px" }}
                                    value="Yes"
                                    name="isInM_Art"
                                    id="a714e20c8518e1"
                                />
                                <label className="font-medium" htmlFor="a714e20c8518e1">
                                    Yes
                                </label>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    onChange={(e) => setMartialArt(e.currentTarget?.value)}
                                    required
                                    type="radio"
                                    className=""
                                    style={{ width: "25px", height: "25px" }}
                                    value="No"
                                    name="isInM_Art"
                                    id="a714e20c8518e170841f"
                                />
                                <label className="font-medium" htmlFor="a714e20c8518e170841f">
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className=" pl-3 mb-5">
                        {martialArt === "Yes" && (
                            <>
                                <label className="font-medium text-gray-600">If yes, which one?</label>
                                <input type="text" className="primary-input" placeholder="" name="martialArtType" id="" />
                            </>
                        )}
                    </div>
                    <div className="text-right">
                        <button className="my-btn flex ml-auto items-center gap-2">
                            {isSpinner && <span className="animate-spin h-5 w-5 border-2 border-r-0 border-b-0 rounded-2xl inline-block"></span>} Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Registration;
