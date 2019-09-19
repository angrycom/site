import React, { useState } from "react"
import style from "./Input.module.css"

export const InputWrap = ({ fieldName, children }) => {
  return (
    <div className={style.wrap}>
      <label>
        <div className={style.fieldName}>{fieldName}</div>
        {children}
      </label>
    </div>
  )
}
const Input = ({
  fieldName,
  className,
  onChange,
  state,
  checker,
  value,
  ...props
}) => {
  const [message, setMessage] = useState(null)

  let func = e => {
    state && state[1](e.target.value)

    if (checker) {
      setMessage(checker(e.target.value))
    }
  }

  function changed(e) {
    func(e)
    return onChange && onChange(e)
  }
  return (
    <InputWrap fieldName={fieldName}>
      <input
        value={state ? state[0] : value}
        className={[style.input, className].filter(Boolean).join(" ")}
        onChange={changed}
        {...props}
      />
      {message && message[1] && (
        <div
          style={{
            color: message[0] ? "green" : "red",
          }}
        >
          {message[1]}
        </div>
      )}
    </InputWrap>
  )
}

export default Input
