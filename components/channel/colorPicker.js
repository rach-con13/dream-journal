const ColorPicker = () => {
    const colors = ["bg-red-500","bg-yellow-500",'bg-green-500'];
 return (
     <div className="z-10 inline-flex px-4 py-3 mt-2 rounded-sm bg-primary-superlight">
            {colors.map((color,index) => {
                return (
                    <div className={`${color} rounded-full p-3 first:ml-0 ml-4`} key={index} />
                )
            })}
     </div>
 )

}
export default ColorPicker;