// landing page

import Navbar from "../components/navbar/navbar"

export default function Landing() { 
    return (
        <div className='relative grid h-screen grid-cols-12 bg-secondary-dark'>
            <Navbar />
            <div className="col-span-3 bg-white">
                <div className="w-10/12 pt-16 mx-auto">
                     
                </div>
            </div>
            <div className="relative col-span-9">
              <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-primary-light">
                    <h4  className="text-2xl font-bold">Tell Your Story</h4>
                    <p className="mt-4 text-lg font-semibold text-primary-dark">Join a community of writers, and keep your precious
memories safe by writing them in an online journal</p>
              </div>
            </div>

        </div>
    )
}