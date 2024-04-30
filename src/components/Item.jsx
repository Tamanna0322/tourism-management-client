import PropTypes from 'prop-types';

const Item = ({ myItem }) => {
    console.log(myItem)

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
           <td> <button className='btn text-white bg-gradient-to-r from-lime-600 to-lime-500'>Update</button></td>
            <td><button className='btn text-white bg-gradient-to-r from-lime-600 to-lime-500'>Delete</button></td>
        </tr>

    );
};


Item.propTypes = {
    myItem: PropTypes.object
}

export default Item;