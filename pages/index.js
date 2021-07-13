import Head from 'next/head';
import Sidebar from '../components/sidebar/sidebar';
import SettingBar from '../components/settings/settingBar';
import EditorSection from '../components/editor/editor';
export default function Home() {
  return (
    <div className="p-0 m-0 box-border">
      <Head>
        <title>Create Next App</title>
      </Head>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          fontFamily: 'Work Sans',
        }}
      >
        <SettingBar />

        <div className=" flex h-screen w-full p-0">
          <Sidebar />
          <div className="col-span-9 relative bg-light">
            <EditorSection />
          </div>
        </div>
      </div>
    </div>
  );
}
