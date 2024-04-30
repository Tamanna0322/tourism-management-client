import Swal from 'sweetalert2'

const AddTourSpot = () => {

    const handleAddBtn = event =>{
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
        const name = form.name.value;
        const email = form.email.value;
        const newTouristSpot ={photo, spot, country, location, description, average,seasonality,time, visitors,name,email};
          console.log(newTouristSpot)

        //   send data to the server
        fetch('https://tourism-management-server-pi.vercel.app/add',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newTouristSpot)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist spot added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    return (
        
       <div>
        
         <div className="border border-green-500 p-8 mb-16 rounded-xl bg-green-50">
            <div className="md:mb-5 mb-3">
                <h3 className="text-center md:text-3xl text-xl font-bold text-green-700">ADD New Tourists Spot</h3>
            </div>
            <form onSubmit={handleAddBtn}>
                <div className="md:mb-5 mb-3">
                    {/*image URL*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Image URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter Image URL" className="input input-bordered"
                        />
                    </div>
                </div>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-5 md:mb-5 mb-3">
                    {/* spot name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Tourist Spot Name</span>
                        </label>
                        <input type="text" name="spot" placeholder="Enter Spot Name" className="input input-bordered"
                        />
                    </div>
                    {/* country name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Country Name</span>
                        </label>
                        <input type="text" name="country" placeholder="Enter Country Name" className="input input-bordered"
                        />
                    </div>
                    {/* location */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Location</span>
                        </label>
                        <input type="text" name="location" placeholder="Enter Location" className="input input-bordered"
                        />
                    </div>
                </div>
                <div className="md:mb-5 mb-3">
                    {/* description */}
                    <label className="label">
                        <span className="label-text text-green-900 font-semibold">Short Description</span>
                    </label>

                    <textarea id="" name="description" placeholder="description" rows="8" cols="100%" className="input input-bordered">
                       
                    </textarea>
                </div>
                <div className="md:mb-5 mb-3 grid md:grid-cols-4 grid-cols-1 gap-5">
                     {/* average cost */}
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Average Cost</span>
                        </label>
                        <input type="text" name="average" placeholder="Enter Average Cost" className="input input-bordered"
                        />
                    </div>

                    {/* seasonality */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Seasonality</span>
                        </label>
                        <input type="text" name="seasonality" placeholder="Enter Season" className="input input-bordered"
                        />
                    </div>
              
                     {/* travel time */}
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Travel Time</span>
                        </label>
                        <input type="text" name="time" placeholder="Enter Travel Time" className="input input-bordered"
                        />
                    </div>

                    {/* total visitors per year */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Total Visitors/Year</span>
                        </label>
                        <input type="text" name="visitors" placeholder="Total Visitors per year" className="input input-bordered"
                        />
                    </div>
            </div>

                <div className="mb-7 grid md:grid-cols-2 grid-cols-1 gap-5">
                     {/* user name */}
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">User Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter Your Name" className="input input-bordered"
                        />
                    </div>

                     {/* user email */}
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">User Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter Your Email" className="input input-bordered"
                        />
                    </div>
                </div>

               <div className="">
                <input type="submit" value="ADD" className="btn w-full text-white bg-gradient-to-r from-green-500 to-green-500"/>
               </div>

            </form>
        </div>
       </div>
    );
};

export default AddTourSpot;