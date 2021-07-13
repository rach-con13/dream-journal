const ChannelSettings = () => {
     return(
         <div className='col-span-6 bg-primary-light '>
         <div  className="relative w-10/12 h-full py-4 mx-auto">
            <h4 className="text-lg font-bold text-primary">Channel Settings</h4>
            <p className="text-sm text-primary-superlight">Language Learning</p>

            <div className="mt-4 text-primary">
                <h4 className="font-bold text-primary">Update Channel Name</h4>
                <input className="w-full p-2 mt-2 bg-transparent border border-solid rounded-sm border-primary-superlight" placeholder="ex.channel name" />
            </div>
            <div className="mt-4 text-primary">
                <h4 className="font-bold text-primary">Pin Channel</h4>
                <p className="text-sm">Easily access your favourite channels by pinning them</p>
                <button className="px-6 py-2 mt-2 font-semibold bg-secondary text-primary-superlight">Pin Channel</button>
            </div>
            <div className="mt-4 text-primary">
                <h4 className="font-bold text-primary">Sharing</h4>
                <p className="text-sm">Share your channel with other collaborators by turning this feature on</p>
            </div>
            <div className="absolute right-0 bottom-6">
                <div className="text-primary">
                    <button className="px-6 py-2 font-semibold bg-red-500 text-primary-superlight ">Delete Channel</button>
                </div>
            </div>
         </div>
         </div>
        //  <div className="absolute w-6/12 py-4 mx-auto transform -translate-x-1/2 -translate-y-1/2 shadow-sm animate-fadeIn bg-primary-superlight left-1/2 top-1/2 ">
        //      <div  className="">
        //      <p className="text-lg text-primary-superlight">Language Learning</p>
        //      </div>
        //  </div>
     )
}
export default ChannelSettings;