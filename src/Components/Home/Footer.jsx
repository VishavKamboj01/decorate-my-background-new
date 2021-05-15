import React from "react";
import {
  BenefitBox,
  BenefitContainer,
  BenefitText,
  ButtonArrow,
  Checkmark,
  FooterContent,
  FooterSection,
  LinkContainer,
  LinkSection,
  LinkSectionTemp,
  LinkSectionHeading,
  RegisterBanner,
  RegisterBannerHeading,
  RegisterButtom,
  Link,
  HorizontalLine,
  CopyRightText,
} from "./FooterComponents";
import checkmark from "../../icons/checkmark.png";
import rightArrow from "../../icons/right-arrow.png";
import icon from "../../icons/icon.png";
import { Icon, Mark, Title } from "../Navbar/NavbarComponents";

export default function Footer() {
  return (
    <FooterSection>
      <RegisterBanner>
        <RegisterBannerHeading>
          Ready to try Backgrounds now?
        </RegisterBannerHeading>
        <RegisterButtom to="/signUp">
          Register Now
          <ButtonArrow src={rightArrow} />
        </RegisterButtom>
        <BenefitContainer>
          <BenefitBox>
            <Checkmark src={checkmark} />
            <BenefitText>Free Access</BenefitText>
          </BenefitBox>
          <BenefitBox>
            <Checkmark src={checkmark} />
            <BenefitText>HD content</BenefitText>
          </BenefitBox>
        </BenefitContainer>
      </RegisterBanner>
      <FooterContent>
        <Mark>
          <Icon src={icon} />
          <Title>Backgrounds</Title>
        </Mark>
        <LinkContainer>
          <LinkSection>
            <LinkSectionHeading>Popular Searches</LinkSectionHeading>
            <Link>Pets</Link>
            <Link>WildLife</Link>
            <Link>Forests</Link>
            <Link>Lakes</Link>
          </LinkSection>
          <LinkSectionTemp>
            <LinkSectionHeading>Company</LinkSectionHeading>
            <Link>About us</Link>
            <Link>Blogs</Link>
            <Link>Careers</Link>
          </LinkSectionTemp>
          <LinkSection>
            <LinkSectionHeading>Developers</LinkSectionHeading>
            <Link
              href="https://www.instagram.com/vishav_kamboj01"
              target="_blank"
            >
              Vishavjeet Singh
            </Link>
            <Link
              href="https://www.instagram.com/ak.ash_sharma"
              target="_blank"
            >
              Akash Sharma
            </Link>
            <Link href="https://www.instagram.com/prabh_8800" target="_blank">
              Prabhjot Singh
            </Link>
          </LinkSection>
          <LinkSectionTemp>
            <LinkSectionHeading>Socials</LinkSectionHeading>
            <Link>Instagram</Link>
            <Link>Linkedin</Link>
            <Link>Facebook</Link>
            <Link>Twitter</Link>
          </LinkSectionTemp>
        </LinkContainer>
      </FooterContent>
      <HorizontalLine />
      <CopyRightText>&copy;2020 Vishav Kamboj</CopyRightText>
    </FooterSection>
  );
}
