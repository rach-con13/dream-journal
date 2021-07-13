import SettingBar from '../components/sidebar/settingBar';

const Entries = () => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'auto 1fr',
        fontFamily: 'Work Sans',
      }}
      className="h-screen"
    >
      <SettingBar />
      <div className="bg-superlight ">
        <div className="mx-auto mt-8 w-10/12 ">
          <h4
            style={{ fontFamily: 'Work Sans' }}
            className="text-dark font-bold "
          >
            My Journals
          </h4>
          <div className="mt-4 grid grid-cols-4 gap-2">
            <div className="bg-light flex items-center ">
              <div className="h-full bg-blue-500 px-1"></div>
              <p className="font-bold ml-4">My first Journal</p>
            </div>
            <div className="px-6 py-4 bg-light">My first Journal</div>
            <div className="px-6 py-4 bg-light">My first Journal</div>
            <div className="px-6 py-4 bg-light">My first Journal</div>
            <div className="px-6 py-4 bg-light">My first Journal</div>
            <div className="px-6 py-4 bg-light">My first Journal</div>
          </div>
          <div className="mt-6 ">
            <div className="flex items-baseline">
              <h4 className="text-dark font-bold">My First Journal</h4>
              <p className="text">4 entries</p>
            </div>
            <div className="mt-4">
              <div className="py-4 flex items-baseline">
                <h4 className="text-dark font-bold">My first day of Summ</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Entries;
