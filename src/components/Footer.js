import SocialIcons from './SocialIcons'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styled'
import { StyledFooter } from './styles/Footer.styled'

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src='./images/white.svg' alt='' />

        <Flex>
          <ul>
            <li>
            The Witcher is a fantasy drama television series created by Lauren Schmidt Hissrich for Netflix, based on the book series of the same name by Polish writer Andrzej Sapkowski. Set on a fictional, medieval-inspired landmass known as the Continent, The Witcher explores the legend of Geralt of Rivia, Yennefer of Vengerberg and Princess Ciri. It stars Henry Cavill, Anya Chalotra, and Freya Allan.
            </li>
            <li>+1-543-123-4567</li>
            <li>witcher@gmail.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>

          <SocialIcons />
        </Flex>

        <p>&copy; 2022 Witcher. All rights reserved</p>
      </Container>
    </StyledFooter>
  )
}