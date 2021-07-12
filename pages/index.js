import Sidebar from '../components/sidebar/sidebar';
import EditorSection from '../components/editor/editor';
import SettingBar from '../components/settings/settingBar';

import ChannelEntriesBar from '../components/channel/channelEntriesBar';
import { useState } from 'react';

export default function Home() {
  const [currentClass,setCurrentClass] = useState("gridContainer");
  const [hidden,setHidden] = useState(false);

  const hideColumn = () => {
    setCurrentClass("hiddenColumnContainer");
    setHidden(true);
  }
 
  return (
    <div  className="box-border p-0 m-0">
     <div style={{display:"grid",gridTemplateColumns:"auto 1fr"}} className="w-full h-screen">

       <SettingBar />
       <div className={currentClass}>
        <div className="mainSidebar">
          <Sidebar />
        </div>
        <div className="secondSidebar">
        <ChannelEntriesBar onClick={hideColumn} hidden={hidden} />
        </div>
        <div className="editor">
          <EditorSection />
        </div>
           
       </div>

     </div>
      {/* <div
        style={{
         
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          fontFamily: 'Work Sans',
        }}
      className="w-full h-screen">
        <SettingBar />
         <div style={{border:'3px solid blue',display:"grid",gridTemplateColumns:"auto 1fr"}} className="w-full h-screen p-0 main">
        <Sidebar />
          <div className="relative bg-light">
            <EditorSection />
          </div>
        
        </div> 
      </div> */}
    </div>
  );
}
