import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { Container, Title } from '../globalStyles';
import Rand from '../assets/Rand.jpeg';
import Circle from '../assets/circle.png';
export default function Contact() {
  return (
    <>
      <Container id="contact">
        <ContactContainer>
          <Title>Contact Me </Title>
          <ImageContainer>
            <ContactMeImage src={Rand} alt="Rand holding Cloud" />
          </ImageContainer>
          <p>
            That’s the end of <strong>Rand Sohail’s </strong> website.
          </p>
          <nav>
            <NavLinks>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#expertise">Expertise</a>
              </li>
              <li>
                <a href="#career-history">Career History</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#blog">Blog</a>
              </li>
            </NavLinks>
          </nav>
          <Social>
            <NavLinks>
              <li>
                <a
                  href="https://github.com/randSohail"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rand-sohail/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </li>
            </NavLinks>
          </Social>
          <Line />
          <p>Come and say hello</p>
          <EmailContainer>
            <Title>randsohail98@gmail.com</Title>
            <MailLink href="mailto:randsohail98@gmail.com">
              <MdEmail />
            </MailLink>
          </EmailContainer>
        </ContactContainer>
      </Container>
    </>
  );
}

const ContactContainer = styled.header`
  padding: 40px 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContactMeImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${Circle});
  background-repeat: no-repeat;
  background-size: cover;
  width: 115px;
  height: 115px;
  border-radius: 50%;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 0;
  margin: 0;
  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: var(--secondary-color);
    font-size: 16px;
    transition: color 0.3s ease;
  }
  a:hover {
    color: var(--primary-color);
  }
`;

const Social = styled.div`
  padding-top: 20px;
  svg {
    width: 25px;
    height: 25px;
  }
`;

const Line = styled.hr`
  width: 70%;
  border: none;
  height: 0.2px;
  background-color: var(--secondary-color);
  margin: 20px 0;
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    width: 25px;
    height: 25px;
  }
`;
const MailLink = styled.a`
  text-decoration: none;
  color: var(--secondary-color);
  transition: color 0.3s ease;
  :hover {
    color: var(--primary-color);
  }
`;
