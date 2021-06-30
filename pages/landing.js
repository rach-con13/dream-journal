// landing page

import Navbar from "../components/navbar/navbar"

export default function Landing() { 
    return (
        <div className='relative h-screen bg-secondary-dark grid grid-cols-12'>
            <Navbar />
            <div className="bg-white col-span-3">
                <div className="pt-16 mx-auto w-10/12">
                     
                </div>
            </div>
            <div className="col-span-9 relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary-light">
                    <h4  className="font-bold text-2xl">Tell Your Story</h4>
                    <p className="font-semibold text-lg text-primary-dark mt-4">Join a community of writers, and keep your precious
memories safe by writing them in an online journal</p>
              </div>
            </div>

        </div>
    )
}