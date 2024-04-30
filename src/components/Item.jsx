import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

const Item = ({ myItem, control, setControl}) => {


    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://tourism-management-server-pi.vercel.app/add/${_id}`,{
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your tourist spot has been deleted.",
                                icon: "success"
                              });
                            
                            setControl(!control)
                        }
                    })
            }
        });
    }

    return (

        <tr className=' font-semibold text-green-700'>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-16 h-16">
                        <img src={myItem.photo} alt="Avatar Tailwind CSS Component" />
                    </div>
                </div>
            </td>
            <td>{myItem.spot}</td>
            <td>{myItem.country}</td>
            <td>$ {myItem.average}</td>
            <td>{myItem.time}</td>
            <td>{myItem.email}</td>
            <td> <Link to={`/update/${myItem._id}`}><button className='btn text-white bg-gradient-to-r from-lime-600 to-lime-500'>Update</button></Link></td>
            <td><button onClick={() => handleDelete(myItem._id)} className='btn text-white bg-gradient-to-r from-lime-600 to-lime-500'>Delete</button></td>
        </tr>

    );
};


Item.propTypes = {
    myItem: PropTypes.object,
    control: PropTypes.array,
     setControl: PropTypes.array
}

export default Item;