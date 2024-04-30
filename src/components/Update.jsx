import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const specificData = useLoaderData();
    const {_id, photo, spot, country, location,description, average, visitors, time, seasonality} = specificData;


    const handleUpdate = event =>{
        event.preventDefault();
        const form = event.target;

        const photo = form.photo.value;
        const spot = form.spot.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const average = form.average.value;
        const seasonality = form.seasonality.value;
        const time = form.time.value;
        const visitors = form.visitors.value;
        const updateTouristSpot ={photo, spot, country, location, description, average,seasonality,time, visitors};
          console.log(updateTouristSpot)

        
        fetch(`https://tourism-management-server-pi.vercel.app/add/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(updateTouristSpot)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist spot updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        <div>
            
            <div className="border p-8 mb-16 rounded-xl bg-lime-50">
            <div className="md:mb-5 mb-3">
                <h3 className="text-center md:text-3xl text-xl font-bold text-green-700">Update Tourists Spot</h3>
            </div>
            <form onSubmit={handleUpdate}>
                <div className="md:mb-5 mb-3">
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Image URL</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter Image URL" className="input input-bordered"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:mb-5 mb-3">
                  
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Tourist Spot Name</span>
                        </label>
                        <input type="text" name="spot" defaultValue={spot} placeholder="Enter Spot Name" className="input input-bordered"
                        />
                    </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Country Name</span>
                        </label>
                        <input type="text" name="country" defaultValue={country} placeholder="Enter Country Name" className="input input-bordered"
                        />
                    </div>
                   
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Location</span>
                        </label>
                        <input type="text" name="location" defaultValue={location} placeholder="Enter Location" className="input input-bordered"
                        />
                    </div>
                </div>

                <div className="md:mb-5 mb-3 grid md:grid-cols-2 grid-cols-1 gap-5">
                     
                <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Travel Time</span>
                        </label>
                        <input type="text" name="time" defaultValue={time} placeholder="Enter Travel Time" className="input input-bordered"
                        />
                    </div>

                  
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Total Visitors/Year</span>
                        </label>
                        <input type="text" name="visitors" defaultValue={visitors} placeholder="Total Visitors per year" className="input input-bordered"
                        />
                    </div>  
            </div>
                <div className="md:mb-5 mb-3 grid md:grid-cols-2 grid-cols-1 gap-5">
                     
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Average Cost</span>
                        </label>
                        <input type="text" name="average"  defaultValue={average} placeholder="Enter Average Cost" className="input input-bordered"
                        />
                    </div>

                  
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Seasonality</span>
                        </label>
                        <input type="text" name="seasonality" defaultValue={seasonality} placeholder="Enter Season" className="input input-bordered"
                        />
                    </div>
              
                   
                   
            </div>

                <div className="md:mb-5 mb-3">
                   
                    <label className="label">
                        <span className="label-text text-green-900 font-semibold">Short Description</span>
                    </label>

                    <textarea id="" name="description" defaultValue={description} placeholder="description" rows="8" cols="100%" className="input input-bordered">
                       
                    </textarea>
                </div>
              

               <div className="flex justify-center">
                <input type="submit" value="Update" className="btn w-3/4 text-white bg-gradient-to-r from-lime-600 to-lime-500"/>
               </div>

            </form>
        </div>

        </div>
    );
};

export default Update;