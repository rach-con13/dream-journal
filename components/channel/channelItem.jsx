import PropTypes from "prop-types";
import { AiOutlineSetting } from "react-icons/ai";
import { WithToggle } from "../../hooks/withToggle";
import ChannelSettings from "./channelSetting";
import ColorPicker from "./colorPicker";
const ChannelItem = ({name,color}) => {
    const {open,toggle} = WithToggle();

    const chooseColor = () => {
        
    }

    return (
        <>
    <div  className="relative flex items-center mt-2">
       
        <button onClick={chooseColor} className={`p-2 rounded-full ${color}`} />
        <p className="ml-3 text-base">{name}</p>
     
     
    </div>
    {/* <ColorPicker open={open}/>
     */}
    </>
    )
}

ChannelItem.propTypes = {
    name:PropTypes.string,
    color:PropTypes.string
}
export default ChannelItem;