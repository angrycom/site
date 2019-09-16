import React from "react"
import Section from "../Section"
import Title from "../Section/Title"
import Contents from "../Section/Contents"
import AngryRain from "../AngryRain"

const KarmaSection = () => {
  return (
    <Section>
      <Title>
        그 이후에도<br></br>업보는 계속된다
      </Title>
      <div>
        <AngryRain />
      </div>

      <Contents>
        <p>
          이 사건 이후, 그는 수많은 정보보호과 전문동아리와 일반동아리에
          지원했다. 그러나 그 어떤 동아리에서도 그를 원하지 않았다. 결국
          동아리가 없어 매주 수요일 7교시 무단결과 처리가 될 위기를 맞은 그!
          어떻게 될 것인가.
        </p>
        <p>
          그는 새로운 방법을 찾았다. 새 동아리를 만드는 것이다. 할 말은{" "}
          <b>매우</b> 많지만 이 쯤에서 마무리하겠다.
        </p>
      </Contents>
    </Section>
  )
}

export default KarmaSection
