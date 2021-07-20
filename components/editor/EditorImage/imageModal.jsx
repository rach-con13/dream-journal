export const ImageModal = ({ onChange, onSubmit, url }) => {
  return (
    <>
      <div className="fixed left-0 top-0  w-full h-screen z-40" />
      <div className="shadow-md w-8/12 z-50 bg-primary-superlight absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <header className="bg-extradark inline-block px-4 py-4 ">
          <p className="font-bold text-light">Image Options</p>
        </header>
        <div>
          <form className="pt-4 text-right" onSubmit={onSubmit}>
            <div className="mx-auto w-10/12 text-left">
              <div>
                <label className="text-dark font-bold">Url</label>
                <span className="text-dark text-sm">
                  - Grab a url from sources like unsplash.com or google
                </span>
                <input
                  onChange={onChange}
                  className="block bg-transparent border-solid border p-4 mt-4  w-full"
                  placeholder="Ex.mycat.jpg"
                />
              </div>
              {/* <div className="mt-4">
              <label className="text-dark font-bold">Upload Image</label>
              <span className="text-dark text-sm">
                - Upload an image from your local computer jpg, jpeg, png{' '}
              </span>
              <input
                className="mt-2 block bg-transparent border-solid border p-4  w-full"
                placeholder="Ex.mycat.jpg"
              />
            </div> */}
            </div>
            <button
              type="submit"
              className="bg-extradark rounded-none inline-block px-6 py-2 mt-4"
            >
              <p className="text-light font-bold">Submit</p>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
