import EditorSection from "../components/editor/editor"
import Sidebar from "../components/sidebar/sidebar"

export default function Dictionary() {
    return (
        
    <div  className=" main grid grid-cols-12 h-screen w-full p-0">
        <Sidebar />
        <div className="col-span-9 bg-gray-100">
          <div  className="mt-8 mx-auto w-10/12 ">
                <h4 className="text-blue-600 font-bold text-3xl">Dictionary</h4>
                <div className="mt-4">
                    <div className="flex items-baseline ">
                        <p className="text-gray-500 font-bold text-lg">Ouruborus</p>
                        <p className="ml-7">A snake body</p>
                    </div>
                </div>
          </div>
        </div>
      </div>
    )
}