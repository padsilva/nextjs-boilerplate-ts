import Image from 'next/image'

import * as S from './styles'

const Main = () => (
  <>
    <S.Background>
      <Image
        alt="Anonymous developer"
        src="/coding.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
    </S.Background>
    <S.Wrapper>
      <S.Title>Boilerplate</S.Title>
      <S.Description>
        TypeScript, React, NextJS and Styled Components
      </S.Description>
    </S.Wrapper>
  </>
)

export default Main
