import React, { useState } from "react"
import Input from "../Form/Input"
import Button from "../Form/Button"
import Select from "../Form/Select"

import { replace } from "gatsby"
const checkers = {
  name(name) {
    if (name.match(/^([가-힣]{2,4})$/)) {
      return [true]
    }
    return [false, "이름은 한글 2~4글자여야 합니다."]
  },
  phone(phone) {
    if (phone.match(/^[0-9]{11}$/)) {
      return [true]
    }
    return [false, "전화번호는 11글자 이상의 숫자여야 합니다. (하이픈 없음)"]
  },
  amount(i) {
    if (i < 10) {
      return [false, "10개 이상 주문하셔야 합니다."]
    }
    if (i % 10 !== 0) return [false, "10개 단위로 주문하셔야 합니다."]
    return [true, `예상 금액: ${i * 30}₩ ~ ${i * 120}₩`]
  },
}
const ShopForm = () => {
  const name = useState("")
  const phone = useState("")
  const email = useState("")
  const amount = useState(10)
  const grade = useState(1)
  const schoolClass = useState(1)

  function onsubmit(e) {
    e.preventDefault()

    function check(check, value) {
      return checkers[check](value[0])[0]
    }

    const checkForm =
      [
        check("name", name),
        check("phone", phone),
        check("amount", amount),
      ].filter(v => v === false).length === 0
    if (!checkForm) {
      alert("폼을 다시 확인해주세요.")
      return
    }
    ;(async () => {
      const Firebase = await import("../../lib/Firebase")
      await Firebase.orderSticker({
        name: name[0],
        phone: phone[0],
        email: email[0],
        amount: amount[0],
        grade: grade[0],
        schoolClass: schoolClass[0],
      })

      alert("주문이 완료되었습니다.")
      replace("/")
    })()
  }

  return (
    <form onSubmit={onsubmit}>
      <Input fieldName="이름" checker={checkers.name} state={name} />
      <Input fieldName="전화번호" checker={checkers.phone} state={phone} />
      <Input fieldName="이메일" type="email" state={email} />
      <Input
        fieldName="스티커 개수"
        type="number"
        min="10"
        step="10"
        state={amount}
        checker={checkers.amount}
      />
      <p>* 120원은 100장 제작 기준이고, 30원은 1000장 제작 기준입니다.</p>
      <Select fieldName="학년" state={grade}>
        {[1, 2, 3].map(i => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </Select>
      <Select fieldName="반" state={schoolClass}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(i => (
          <option value={i} key={i}>
            {i}
          </option>
        ))}
      </Select>
      <p>선택한 반으로 배달해 드립니다.</p>
      <Button primary reactive right>
        주문하기
      </Button>
    </form>
  )
}
export default ShopForm
