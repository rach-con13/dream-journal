export const ImageModal = () => {
    return (
        <div >
        <header className="bg-extradark inline-block px-4 py-4 ">
         <p className="font-bold text-light">Image Options</p>
         </header>
         <div>
            <form className="pt-4 text-right ">
              <div className="mx-auto w-10/12 text-left">
                <div>
                        <label className="text-dark font-bold">Url</label>
                        <span className="text-dark text-sm">- Grab a url from sources like unsplash.com or google</span>
                        <input className="block bg-transparent border-solid border p-4  w-full" placeholder="Ex.mycat.jpg" />
                </div>
                <div className="mt-4">
                    <label className="text-dark font-bold">Upload Image</label>
                    <span className="text-dark text-sm">- Upload an image from your local computer jpg, jpeg, png </span>
                    <input className="mt-2 block bg-transparent border-solid border p-4  w-full" placeholder="Ex.mycat.jpg" />
                </div>
              </div>
              <button className="bg-extradark rounded-none inline-block px-6 py-2 mt-4">
                  <p className="text-light font-bold">Submit</p>
              </button>
             
            </form>
         </div>
    </div>
    )
}