import Sidebar from '../components/sidebar/sidebar';
import EditorSection from '../components/editor/editor';
import SettingBar from '../components/settings/settingBar';

export default function Home() {
 
  return (
    <div  className="box-border p-0 m-0">
     
      <div
        style={{
         
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          fontFamily: 'Work Sans',
        }}
      className="w-full h-screen">
        <SettingBar />
         <div className="grid w-full h-screen grid-cols-12 p-0 main">
        <Sidebar />
        <div className="relative col-span-6 bg-light">
            <EditorSection />
          </div>
          {/* <Sidebar />
          <div className="relative col-span-6 bg-light">
            <EditorSection />
          </div> */}
        </div> 
      </div>
    </div>
  );
}
