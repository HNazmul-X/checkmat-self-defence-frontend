import React, { useContext } from "react";
import { UserContext } from "../../Context/UserContext";

const Homepage = () => {
    return (
        <>
            <section className="bg-gray-800 ">
                <div className="max-w-[800px] mx-auto text-white min-h-screen">
                    <div className="flex w-full">
                        <div className="w-full lg:w-6/12 pt-6">
                            <div>
                                <h1 className="text-[150px] leading-[122px] font-black tracking-[8px]">Free</h1>
                                <h2 className="text-5xl italic">SELF DEFENSE</h2>
                                <h2 className="text-7xl font-bold tracking-[5px]">SEMINAR</h2>
                            </div>
                            <div className="bg-rose-600 p-4 mt-5">
                            <h1 className="text-5xl font-bold ">SATURDAY</h1>
                            <h1 className="text-5xl font-bold ">MARCH 5</h1>
                            <h1 className="text-5xl font-bold ">10:15 AM</h1>
                            </div>

                            <div className="py-5">
                                <h1 className="text-7xl font-bold">WITH</h1>
                                <h4 className="text-3xl italic">RICARDO FELICIANO</h4>
                                <h4 className="text-3xl italic">HELIO BARTHEM</h4>
                            </div>
                        </div>
                        <div className="w-full w-lg-6/12"></div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Homepage;
