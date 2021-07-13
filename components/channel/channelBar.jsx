import ChannelItem from "./channelItem";
import {AiOutlineSetting} from "react-icons/ai";
import {AiOutlineArrowRight} from "react-icons/ai";
const ChannelBar = ({toggle}) => {
    
    return (
        <>
        <div style={{boxSizing:"border-box"}} className="relative z-10 h-full text-primary bg-primary-superdark">
            
            <div className="w-10/12 py-4 mx-auto flex items-center justify-between">
            
                <p className="text-lg">Search</p>
                <button onClick={toggle} className="text-lg text-primary-superlight font-bold">
                    <AiOutlineArrowRight />
                </button>
                
            </div>
            <div className="py-4 mx-auto bg-primary-dark">
                <div  className="w-10/12 mx-auto">
                     <p className="text-base font-bold">New Channel</p>
                </div>
            </div>
            <div className="w-10/12 mx-auto mt-8">
                <h4 className="text-base font-bold ">
                    Pinned Channels
       
                </h4>
                <ChannelItem color="bg-red-500" name="Language Learning" />
                <ChannelItem color="bg-blue-500" name="Toastmasters" />
            </div>
            <div className="w-10/12 mx-auto mt-4">
                <h4 className="text-base font-bold">
                    Channels
                </h4>
                <ChannelItem color="bg-red-500" name="Language Learning" />
                <ChannelItem color="bg-blue-500" name="Toastmasters" />
                <ChannelItem color="bg-secondary" name="Education" />
            </div>
            <div className="w-10/12 mx-auto mt-4">
                <h4 className="text-base font-bold">
                   Recently Opened
                </h4>
                <ChannelItem color="bg-red-500" name="Language Learning" />
             
            </div>
        </div>
        </>
    )
}
export default ChannelBar;