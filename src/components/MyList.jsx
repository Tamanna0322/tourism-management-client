import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Item from "./Item";
// import { useLoaderData } from "react-router-dom";


const MyList = () => {

    const { user } = useContext(AuthContext);
    console.log(user)
    // const loadedData = useLoaderData();
    // const [tourists, setTourists] = useState(loadedData);

    const [item, setItem] = useState([]);
    const [control, setControl] = useState(false);


    useEffect(() => {
        fetch(`https://tourism-management-server-pi.vercel.app/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setItem(data)
            })
    }, [user, control])

    return (
        <div className="mb-16">
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-green-600">
                            <td>Image</td>
                            <td>Tourist Spot</td>
                            <td>Country</td>
                            <td>Average Cost</td>
                            <td>Travel Time</td>
                            <td>Email</td>
                            <td>Update</td>
                            <td>Delete</td>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            item.map(myItem => <Item key={myItem._id} myItem={myItem} control={control} setControl={setControl}></Item>)

                        }
                    </tbody>
                </table>
            </div>

        </div>


    );
};

export default MyList;