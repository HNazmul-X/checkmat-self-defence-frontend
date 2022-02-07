import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { apiBase } from "../../Util/BaseInfo";

const AllPlayer = () => {
    const [allPlayer, setAllPlayer] = useState([]);
    const [tableState, setTableState] = useState(0);
    const [tableDataLoading, setTableDataLoading] = useState(true);

    useEffect(() => {
        fetch(`${apiBase}/api/all-people`)
            .then((res) => res.json())
            .then((data) => {
                setAllPlayer(data);
                setTableDataLoading(false);
            })
            .catch((e) => Swal.fire("Error", e.message, "error"));
    }, [tableState]);

    const handleDelete = (id) => {
        Swal.fire("Confirmation", "Are you sure to delete this", "question").then((value) => {
            if (value.isConfirmed) {
                fetch(`${apiBase}/api/delete-people/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deleted) {
                            Swal.fire("Successfully Deleted", ``, "success");
                            setTableState(Math.random());
                        } else {
                            Swal.fire("Failed to delete", ``, "error");
                        }
                    })
                    .catch((e) => Swal.fire("Failed to delete", e.message, "error"));
            }
        });
    };

    return (
        <>
            <div className="border-b p-3 bg-gray-200 text-center">
                <h1 className="text-center font-medium">All Player</h1>
            </div>

            <div className="table-container container">
                {!tableDataLoading ? (
                    <table className="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr>
                                <th className="text-left px-2 py-1 border-collapse border border-gray-300">Serial</th>
                                <th className="text-left px-2 py-1 border-collapse border border-gray-300">Name</th>
                                <th className="text-left px-2 py-1 border-collapse border border-gray-300">Email</th>
                                <th className="text-left px-2 py-1 border-collapse border border-gray-300">Material Art</th>
                                <th className="text-left px-2 py-1 border-collapse border border-gray-300">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allPlayer?.map((people, index) => {
                                return (
                                    <tr>
                                        <td className="px-2 py-1 border-collapse border border-gray-300 antialiased ">{index + 1}</td>
                                        <td className="px-2 py-1 border-collapse border border-gray-300 antialiased ">{people?.name}</td>
                                        <td className="px-2 py-1 border-collapse border border-gray-300 antialiased ">{people?.email}</td>
                                        <td className="px-2 py-1 border-collapse border border-gray-300 antialiased ">{people?.isInM_Art}</td>
                                        <td tabIndex={1} className="px-2 py-1 border-collapse border border-gray-300 antialiased focus:bg-red-200 ">
                                            <svg
                                                onClick={() => handleDelete(people?._id)}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="text-red-500 cursor-pointer hover:text-red-900"
                                                role="img"
                                                width="1.3em"
                                                height="1.3em"
                                                viewBox="0 0 20 20">
                                                <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" fill="currentColor" />
                                            </svg>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                ) : (
                    <h1 className="text-2xl text-center py-5">Loading...</h1>
                )}
            </div>
        </>
    );
};

export default AllPlayer;
