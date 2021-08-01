import React, { useState } from 'react'
import PropTypes from "prop-types";
export default function Error({message}) {

    return (
       <div className="bg-red-400 text-primary-superlight font-semibold text-sm rounded-md w-10/12 mx-auto p-3 mt-4">
           {message}
       </div>
    )
}

Error.propTypes = {
    message:PropTypes.string
}