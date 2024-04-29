import { SocialFooter, SocialIcons, Copyright } from './Footer.styles';

export default function Footer() {
  return (
    <SocialFooter>
      <SocialIcons>
        <a href="https://github.com/kerilsen">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/keri-sen-295040299/">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://stackoverflow.com/users/24210653/keri-sen">
          <i className="fab fa-stack-overflow"></i>
        </a>
      </SocialIcons>
      <Copyright>© 2024 Keri Sen. All rights reserved.</Copyright>
    </SocialFooter>
  );
}
