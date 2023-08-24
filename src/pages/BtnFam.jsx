/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

function BtnFam({btnName, foo}) {


  return (
    <button
    onClick={(foo)}
    className="btnFamily"
    >
      {btnName}
    </button>
  )
}

export default BtnFam
