import React, { useState } from 'react'

export default function WithSelected(props) {
    const [selected,setSelected] = useState(null);

    const SelectItem = (item) => {
        setSelected(item);
    }

    return {selected,setSelected};
}
