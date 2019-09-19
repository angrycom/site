import React from "react"
import Contents from "../Section/Contents"
import sticker from "../../images/sticker.svg"
import Button from "../Form/Button"

const BuyStickerContents = () => (
  <Contents>
    <h3>당신의 감정을 대변해 줄 스티커.</h3>
    <p>
      이 스티커는 당신이 화나거나, 기분 좋지 않은 일이 있을 때 당신의 생각과
      기분을 대변해 줄 수 있을 겁니다. 이제 싸움을 붙이기 보다는 스티커를 붙여
      보세요!
    </p>
    <h3>스티커 규격</h3>
    <img src={sticker} alt="Sticker" />
    <p style={{ fontSize: "0.7em" }}>
      * 선주문 후제작으로 만들어지며, 사정에 따라 스티커의 규격은 변할 수
      있습니다.
    </p>
    <h3>가격</h3>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 30,
      }}
    >
      <h1 style={{ fontWeight: "lighter" }}>30₩ ~ 120₩ / 장</h1>
      <p>
        총 주문 갯수에 따라 단가는 달라집니다. 공동구매 마감 후 휴대폰으로 최종
        결정된 단가를 공지드리겠습니다.
        <br />
        기본적으로 10장 이상 주문하셔야 합니다.
      </p>
    </div>
    <Button primary to="/goods/sticker/buy">
      구입하기
    </Button>
    <h3>주의사항</h3>
    <div>
      <ul>
        <li>선린인터넷고등학교 학생에 한해서 주문 가능합니다.</li>
        <li>입금 전에, 사정에 따라서 이 공동구매는 취소될 수 있습니다.</li>
        <li>
          선주문 후제작 방식으로 만들어지므로, 제작하기까지 시간이 걸릴 수
          있습니다.
        </li>
        <li>입금 후에는 환불 및 취소, 반품이 불가능합니다.</li>
        <li>
          공동 구매는 2019년 9월 28일까지 진행되고, 그 이후에 단가를 안내해
          드리겠습니다.
        </li>
      </ul>
    </div>
  </Contents>
)

export default BuyStickerContents
