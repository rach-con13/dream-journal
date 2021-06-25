import Head from 'next/head'
import Sidebar from "../components/sidebar/sidebar";
import EditorSection from "../components/editor/editor";
export default function Home() {
  return (
    <div className="p-0 m-0 box-border">
      <Head>
        <title>Create Next App</title>
  
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet"/>
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
