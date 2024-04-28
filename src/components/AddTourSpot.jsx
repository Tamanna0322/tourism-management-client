

const AddTourSpot = () => {
    return (
        
       <div>
        
         <div className="border border-green-500 p-8 mb-16 rounded-xl bg-green-50">
            <div className="mb-5">
                <h3 className="text-center text-3xl font-bold text-green-700">ADD New Tourists Spot</h3>
            </div>
            <form>
                <div className="mb-5">
                    {/*image URL*/}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-green-900 font-semibold">Image URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter Image URL" className="input input-bordered"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-5 mb-5">
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
                <div className="mb-5">
                    <label className="label">
                        <span className="label-text text-green-900 font-semibold">Short Description</span>
                    </label>

                    <textarea id="" name="description" placeholder="description" rows="8" cols="100" className="input input-bordered">
                       
                    </textarea>
                </div>
                <div className="mb-5 grid grid-cols-4 gap-5">
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

                <div className="mb-7 grid grid-cols-2 gap-5">
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
               <button className="btn w-full text-white bg-gradient-to-r from-green-500 to-green-500">ADD</button>
               </div>

            </form>
        </div>
       </div>
    );
};

export default AddTourSpot;