import React from 'react';
import { useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import Spinner from '../../../Share/Spinner';

const AllSeller = () => {
    const {
        data: sellers,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['MyBuyer'],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.REACT_APP_LOCALHOST}/sellers`,
            );
            const data = res.json();
            return data;
        },
    });


    const handleVerify = id => {

        fetch(`${process.env.REACT_APP_LOCALHOST}/users/verified/${id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    toast.success('Seller updated successfully');
                    refetch();
                }
            });

    }





    const handleDelete = (id) => {
        fetch(`${process.env.REACT_APP_LOCALHOST}/sellers/${id}`, {
            method: 'DELETE',
            headers: { 'content-type': 'application/json' },
        })
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                toast.success('Delete successfully');
                refetch();
            });
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div>
            <div>
                <h3 className="text-3xl font-bold">All Seller</h3>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Seller Name</th>
                                <th>Seller Email</th>
                                <th>Verified</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sellers?.map((seller, i) => (
                                <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>
                                        <button onClick={()=> handleVerify(seller._id)} className="btn btn-xs btn-accent">
                                            Verify
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleDelete(seller._id)
                                            }
                                            className="btn btn-xs btn-accent">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSeller;
