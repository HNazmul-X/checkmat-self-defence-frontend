import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import twoPeopleImage from "../../images/two-people-image.png"

const Homepage = () => {


    const navigate = useNavigate()


    return (
        <>
            <section className="bg-gray-800 ">
                <div className="max-w-[800px] mx-auto  min-h-screen flex flex-col justify-center1">
                    <div className="flex w-full text-white items-center">
                        <div className="w-1/2 pt-6">
                            <div className="pl-5">
                                <h1 className="lg:text-[150px] text-5xl lg:leading-[122px] font-black lg:tracking-[8px]">Free</h1>
                                <h2 className="lg:text-5xl italic">SELF DEFENSE</h2>
                                <h2 className="lg:text-7xl text-lg font-bold lg:tracking-[5px]">SEMINAR</h2>
                            </div>
                            <div className="bg-rose-600 lg:p-4 lg:mt-5 mt-3 pl-5 py-2">
                                <h1 className="lg:text-5xl leading-5 font-bold ">SATURDAY</h1>
                                <h1 className="lg:text-5xl leading-5 font-bold ">MARCH 5</h1>
                                <h1 className="lg:text-5xl leading-5 font-bold ">10:15 AM</h1>
                            </div>

                            <div className="lg:py-5 py-3 pl-5">
                                <h1 className="lg:text-7xl font-bold text-xl">WITH</h1>
                                <h4 className="lg:text-3xl italic text-[12px]">RICARDO FELICIANO</h4>
                                <h4 className="lg:text-3xl italic text-[12px]">HELIO BARTHEM</h4>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <div className="w-full text-center">
                                <img className="w-11/12 inline-block" src={twoPeopleImage} alt="" />
                            </div>

                            <div className="flex mt-3">
                                <div className="p-1 w-1/2">
                                    <div className="flex flex-col ">
                                        <p className="bg-white lg:text-lg font-medium uppercase text-black text-center text-[10px]">checkmat </p>
                                        <p className="bg-black lg:text-lg font-medium uppercase text-white text-center text-[10px]">Themecula </p>
                                    </div>
                                </div>
                                <div className="p-1 w-1/2">
                                    <div className="flex flex-col ">
                                        <p className="bg-white lg:text-lg font-medium uppercase text-black text-center text-[10px]">checkmat </p>
                                        <p className="bg-black lg:text-lg font-medium uppercase text-white text-center text-[10px]">Murrieta </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="button text-center py-5">
                        <button
                            onClick={() => navigate("/registration")}
                            className="bg-rose-600 text-white px-6 py-2 rounded-full hover:bg-rose-900 lg:text-2xl shadow-lg lg:py-3 lg:px-10  shadow-rose-900">
                            Click Here to Register
                        </button>
                    </div>

                    <div className="bg-white p-4 mt-5 text-center text-gray-600">
                        <h3 className="lg:text-3xl text-sm font-bold italic uppercase">Women , Men and COUPLES All Welcome</h3>
                        <h1 className="text-2xl uppercase py-3 font-black">Limited Availability</h1>
                        <h3>24831 Jefferson ave. suite 101, murrieta, ca 92562</h3>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Homepage;
