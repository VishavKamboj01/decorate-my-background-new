import React from "react";
import {
  CircleCutOut,
  Comma,
  FacebookIcon,
  ImageNameContainer,
  ImagePerson,
  ImagePersonName,
  InstagramIcon,
  LinkedinIcon,
  PersonResponse,
  SocialInfoContainer,
  Testimonial,
  TestimonialContainer,
  TestimonialHeading,
  TestimonialSection,
  TwitterIcon,
} from "./TestemonialComponents";
import person1 from "../../images/person1.jpg";
import person2 from "../../images/person2.jpg";
import person3 from "../../images/person3.jpg";
import comma from "../../icons/comma.png";
import instagram from "../../icons/instagram.png";
import facebook from "../../icons/facebook.png";
import linkedin from "../../icons/linkedin.png";
import twitter from "../../icons/twitter.png";
export default function Testimonials() {
  return (
    <TestimonialSection>
      <TestimonialHeading>
        &lt; What our users are saying &gt;
      </TestimonialHeading>
      <TestimonialContainer>
        <Testimonial>
          <Comma src={comma} />
          <CircleCutOut></CircleCutOut>
          <ImageNameContainer>
            <ImagePerson src={person1} />
            <ImagePersonName>John Smith</ImagePersonName>
          </ImageNameContainer>
          <PersonResponse>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            similique soluta deserunt nulla dolores sint, tempora iste dolorem
            aperiam laborum debitis. Dignissimos sapiente quos autem fugit optio
            aliquid asperiores iusto?
          </PersonResponse>
          <SocialInfoContainer>
            <InstagramIcon src={instagram} />
            <LinkedinIcon src={linkedin} />
            <FacebookIcon src={facebook} />
            <TwitterIcon src={twitter} />
          </SocialInfoContainer>
        </Testimonial>
        <Testimonial>
          <Comma src={comma} />
          <CircleCutOut></CircleCutOut>
          <ImageNameContainer>
            <ImagePerson src={person3} />
            <ImagePersonName>Mosh Hamedani</ImagePersonName>
          </ImageNameContainer>
          <PersonResponse>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            similique soluta deserunt nulla dolores sint, tempora iste dolorem
            aperiam laborum debitis. Dignissimos sapiente quos autem fugit optio
            aliquid asperiores iusto?
          </PersonResponse>
          <SocialInfoContainer>
            <InstagramIcon src={instagram} />
            <LinkedinIcon src={linkedin} />
            <FacebookIcon src={facebook} />
            <TwitterIcon src={twitter} />
          </SocialInfoContainer>
        </Testimonial>
        <Testimonial>
          <Comma src={comma} />
          <CircleCutOut></CircleCutOut>
          <ImageNameContainer>
            <ImagePerson src={person2} />
            <ImagePersonName>Anna James</ImagePersonName>
          </ImageNameContainer>
          <PersonResponse>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
            similique soluta deserunt nulla dolores sint, tempora iste dolorem
            aperiam laborum debitis. Dignissimos sapiente quos autem fugit optio
            aliquid asperiores iusto?
          </PersonResponse>
          <SocialInfoContainer>
            <InstagramIcon src={instagram} />
            <LinkedinIcon src={linkedin} />
            <FacebookIcon src={facebook} />
            <TwitterIcon src={twitter} />
          </SocialInfoContainer>
        </Testimonial>
      </TestimonialContainer>
    </TestimonialSection>
  );
}
