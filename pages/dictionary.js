import EditorSection from '../components/editor/editor';
import Sidebar from '../components/sidebar/sidebar';

export default function Dictionary() {
  return (
    <div style={{ fontFamily: "Work Sans" }} className="grid w-full h-screen grid-cols-12 p-0  main">
      <Sidebar />
      <div className="col-span-9 bg-gray-100">
        <div className="w-10/12 mx-auto mt-8 ">
          <h4 className="text-3xl font-bold text-blue-600">Dictionary</h4>
          <div className="mt-4">
            <div className="flex items-baseline ">
              <p className="text-lg font-bold text-gray-500">Ouruborus</p>
              <p className="ml-7">A snake body</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
