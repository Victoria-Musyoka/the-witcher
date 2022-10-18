import { StyledHeader, Nav,  Image } from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { Button } from './styles/Button.styled'

export default function Header() {
    let url="https://preview.redd.it/hklig0x8lc931.jpg?auto=webp&s=19640e6119111ffd55351021f300e1ca97d1aa3f";
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <h1>THE WITCHER</h1>
          <a href={url}>click here</a>
        </Nav>

        <Flex>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg='#ff0099' color='#fff'>
              comment on the series
            </Button>
          </div>

       <image src='./images/tempFileForShare_20221017-212757.jpg' alt=''/>
        </Flex>
      </Container>
    </StyledHeader>
  )
}