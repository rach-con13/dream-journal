import Sidebar from '../components/sidebar/sidebar';
import EditorSection from '../components/editor/editor';
import SettingBar from '../components/settings/settingBar';

import ChannelEntriesBar from '../components/channel/channelEntriesBar';
import { useState } from 'react';
import { WithToggle } from '../hooks/withToggle';

export default function Home() {
  const { open, toggle } = WithToggle();
  return (
    <div
      style={{ gridTemplateColumns: '30% 1fr' }}
      className="box-border p-0 m-0 grid "
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
        }}
        className="w-full h-screen "
      >
        <SettingBar />
        <Sidebar toggle={toggle} />
      </div>
      <div className="relative w-full h-screen">
        <ChannelEntriesBar open={open} />
        <div
          className="transition-all delay-75"
          style={{ marginLeft: `${open ? '30%' : '0%'}` }}
        >
          <EditorSection />
        </div>
      </div>
    </div>
  );
}
