import Head from 'next/head'
import Sidebar from "../components/sidebar/sidebar";
import EditorSection from "../components/editor/editor";
export default function Home() {
  return (
    <div className="p-0 m-0 box-border">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div  className=" main grid grid-cols-12 h-screen w-full p-0">
        <Sidebar />
        <div className="col-span-9 bg-gray-100">
         <EditorSection /> 
        </div>
      </div>
        
    </div>
  )
}
