import React from 'react'

function InputType({example,label,inptype,name,value,onchange,required}) {
  return (
    <>
    <div className="mb-1">
    <label htmlFor={example} className="form-label">{label}</label>
    <input type={inptype} className="form-control" name={name} value={value} onChange={onchange} required={required}/>
   
  </div>
    </>
  )
}

export default InputType
