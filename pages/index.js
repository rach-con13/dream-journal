import Head from 'next/head';
import Sidebar from '../components/sidebar/sidebar';
import SettingBar from '../components/sidebar/settingBar';
import EditorSection from '../components/editor/editor';
export default function Home() {
  return (
    <div className="box-border p-0 m-0">
      <Head>
        <title>Create Next App</title>

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          fontFamily: 'Work Sans',
        }}
      >
        <SettingBar />
        <div className="grid w-full h-screen grid-cols-12 p-0 main">
          <Sidebar />
          <div className="relative col-span-9 bg-light">
            <EditorSection />
          </div>
        </div>
      </div>
    </div>
  );
}
