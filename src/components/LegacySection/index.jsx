import React from "react"
import Title from "../Section/Title"
import Section from "../Section"
import FBComment from "../FBComment"
import Contents from "../Section/Contents"

const LegacySection = () => {
  return (
    <Section>
      <Title>화나요가 남긴 유산</Title>
      <div
        style={{
          marginTop: 30,
        }}
      >
        <FBComment />
      </div>
      <Contents>
        <p>
          화나요는 우리 모두에게 많은 유산을 남겼다. 먼저, 우리는 화를 낼 때
          폭력이나 욕설을 사용하지 않고 '화나요'를 말하게 되었고, 페이스북에서
          손가락을 함부로 놀리는 일이 많이 줄었다. 무엇보다 가장 큰 유산은,{" "}
          <strong>
            그를 반면교사로 삼아 정상적인 학교 생활을 영위할 수 있다는 점이다.
          </strong>
        </p>
      </Contents>
    </Section>
  )
}

export default LegacySection
