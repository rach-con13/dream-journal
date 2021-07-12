const ChannelEntriesBar = () => {
    return (
        <div className="col-span-6  bg-primary-light">
            <div className="">
                <div className="w-full py-1 bg-blue-500" />
                <div className="w-10/12 py-4 mx-auto ">
                    <h4 className="text-lg font-bold text-primary">Language Learning</h4>
                </div>
                <div >
                    <div className="text-primary ">
                    <div style={{borderColor:"#707587"}} className="py-4 border-t border-solid ">
                        <div className="w-10/12 mx-auto">
                            <p className="text-base font-bold text-primary-superlight">Learn German #1</p>
                        </div>
                    </div>
                    <div style={{borderColor:"#707587"}} className="py-4 border-t border-solid ">
                        <div className="w-10/12 mx-auto">
                            <p className="text-base font-bold text-primary-superlight">Parle Vous Francais?</p>
                        </div>
                    </div>
                    <div style={{borderColor:"#707587"}} className="py-4 border-t border-b border-solid ">
                        <div className="w-10/12 mx-auto">
                            <p className="text-base font-bold text-primary-superlight">Trip to Italy</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChannelEntriesBar;