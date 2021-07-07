import Head from 'next/head';
import Sidebar from '../components/sidebar/sidebar';
import SettingBar from '../components/sidebar/settingBar';
import EditorSection from '../components/editor/editor';
export default function Home() {
  return (
    <div className="p-0 m-0 box-border">
      <Head>
        <title>Create Next App</title>

        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
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
        <div className=" main grid grid-cols-12 h-screen w-full p-0">
          <Sidebar />
          <div className="col-span-9 relative bg-light">
            <EditorSection />
          </div>
        </div>
      </div>
    </div>
  );
}
