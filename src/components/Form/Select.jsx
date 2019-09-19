import React from "react"
import { InputWrap } from "./Input"

import style from "./Select.module.css"
const Select = ({ fieldName, children, state }) => {
  return (
    <InputWrap fieldName={fieldName}>
      <select
        className={style.select}
        value={state && state[0]}
        onChange={e => {
          state && state[1](e.target.value)
        }}
      >
        {children}
      </select>
    </InputWrap>
  )
}

export default Select
