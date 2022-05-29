import React, { useState } from "react";
import {
  ButtonsContainer,
  CircleCutOut,
  CloseImg,
  Comma,
  ExperienceDialogBox,
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
  Title,
  TitleContainer,
  TwitterIcon,
  ViewMoreButton,
  YourExperienceButton,
  CustomTextField,
  SubmitButton,
} from "./TestemonialComponents";
import person from "../../../icons/person.png";
import person1 from "../../../images/person1.jpg";
import person2 from "../../../images/person2.jpg";
import person3 from "../../../images/person3.jpg";
import comma from "../../../icons/comma.png";
import instagram from "../../../icons/instagram.png";
import facebook from "../../../icons/facebook.png";
import linkedin from "../../../icons/linkedin.png";
import twitter from "../../../icons/twitter.png";
import close from "../../../icons/cancel.png";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import { getAllReviews, saveReview } from "../../../Services/reviewService";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Testimonials(props) {
  const [showDialog, setShowDialog] = useState(false);
  const [review, setReview] = useState({
    jwt: localStorage.getItem("token"),
    data: "",
  });

  const [reviews, setReviews] = useState({
    viewMore: false,
    data: [],
  });

  const handleExperienceClicked = () => {
    setShowDialog(true);
  };

  const handleCloseClicked = () => {
    setShowDialog(false);
  };

  const handleReviewChange = (input) => {
    const r = { ...review };
    r.data = input.currentTarget.value;
    setReview(r);
  };

  const handleReviewSubmit = async () => {
    setShowDialog(false);
    const result = await saveReview(review);
    console.log(result);
  };

  const handleViewMore = async () => {
    const reviewState = { ...reviews };

    if (reviews.viewMore) {
      reviewState.viewMore = false;
      setReviews(reviewState);
    } else {
      const result = await getAllReviews();
      reviewState.viewMore = true;
      reviewState.data = result.data;
    }

    setReviews(reviewState);
  };

  return (
    <TestimonialSection>
      <TestimonialHeading>
        &lt; What our users are saying &gt;
      </TestimonialHeading>
      <TestimonialContainer>
        <div className="container">
          <div className="row">
            <Testimonial
              className="col- text-center"
              style={{
                margin: "auto",
                alignSelf: "center",
                marginTop: "20px",
              }}
            >
              <Comma src={comma} />
              <CircleCutOut></CircleCutOut>
              <ImageNameContainer>
                <ImagePerson src={person1} />
                <ImagePersonName>Vishav Kamboj</ImagePersonName>
              </ImageNameContainer>
              <PersonResponse>
                Very unique wallpapers as compared to other websites. The User
                interface is really clean and easy to navigate. I have been
                using this website for past weeks and every time i open this
                website their is always new content waiting to be explored.
              </PersonResponse>
              <SocialInfoContainer>
                <InstagramIcon src={instagram} />
                <LinkedinIcon src={linkedin} />
                <FacebookIcon src={facebook} />
                <TwitterIcon src={twitter} />
              </SocialInfoContainer>
            </Testimonial>
            <Testimonial
              className="col- text-center"
              style={{
                margin: "auto",
                alignSelf: "center",
                marginTop: "20px",
                marginLeft: "30px",
                marginRight: "30px",
              }}
            >
              <Comma src={comma} />
              <CircleCutOut></CircleCutOut>
              <ImageNameContainer>
                <ImagePerson src={person2} />
                <ImagePersonName>Akash Sharma</ImagePersonName>
              </ImageNameContainer>
              <PersonResponse>
                My experience with this website is really good. The perks you
                get when you login is really worth your time. Overall the feel
                you get while using this website is really outstanding and i am
                looking forword to future updates.
              </PersonResponse>
              <SocialInfoContainer>
                <InstagramIcon src={instagram} />
                <LinkedinIcon src={linkedin} />
                <FacebookIcon src={facebook} />
                <TwitterIcon src={twitter} />
              </SocialInfoContainer>
            </Testimonial>
            <Testimonial
              className="col- text-center"
              style={{
                margin: "auto",
                alignSelf: "center",
                marginTop: "20px",
              }}
            >
              <Comma src={comma} />
              <CircleCutOut></CircleCutOut>
              <ImageNameContainer>
                <ImagePerson src={person3} />
                <ImagePersonName>Prabhjot Singh</ImagePersonName>
              </ImageNameContainer>
              <PersonResponse>
                My experience with this website is really good. The perks you
                get when you login is really worth your time. Overall the feel
                you get while using this website is really outstanding and i am
                looking forword to future updates.
              </PersonResponse>
              <SocialInfoContainer>
                <InstagramIcon src={instagram} />
                <LinkedinIcon src={linkedin} />
                <FacebookIcon src={facebook} />
                <TwitterIcon src={twitter} />
              </SocialInfoContainer>
            </Testimonial>
            {reviews.viewMore
              ? reviews.data.map((data) => {
                  return (
                    <Testimonial
                      className="col- text-center"
                      style={{
                        margin: "auto",
                        alignSelf: "center",
                        marginTop: "40px",
                      }}
                    >
                      <Comma src={comma} />
                      <CircleCutOut></CircleCutOut>
                      <ImageNameContainer>
                        <ImagePerson src={person} />
                        <ImagePersonName>{data.userName}</ImagePersonName>
                      </ImageNameContainer>
                      <PersonResponse>{data.review}</PersonResponse>
                      <SocialInfoContainer>
                        <InstagramIcon src={instagram} />
                        <LinkedinIcon src={linkedin} />
                        <FacebookIcon src={facebook} />
                        <TwitterIcon src={twitter} />
                      </SocialInfoContainer>
                    </Testimonial>
                  );
                })
              : ""}
          </div>
        </div>
      </TestimonialContainer>
      <ButtonsContainer>
        <ViewMoreButton onClick={handleViewMore}>
          {reviews.viewMore ? "VIEW LESS" : "VIEW MORE"}
        </ViewMoreButton>
        <YourExperienceButton onClick={handleExperienceClicked}>
          YOUR EXPERIENCE?
        </YourExperienceButton>
      </ButtonsContainer>
      <Dialog
        open={showDialog}
        keepMounted
        TransitionComponent={Transition}
        onClose={handleCloseClicked}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        {Object.keys(props.currentUser).length !== 0 ? (
          <div>
            <DialogTitle id="alert-dialog-slide-title">
              <TitleContainer>
                <Title>
                  Please let us know how we can Improve our services.
                </Title>
                <CloseImg src={close} onClick={handleCloseClicked} />
              </TitleContainer>
            </DialogTitle>
            <DialogContent style={{ display: "flex", flexDirection: "column" }}>
              <CustomTextField
                style={{ marginTop: "30px" }}
                id="outlined-basic"
                label="Full Name"
                focused={Object.keys(props.currentUser).length !== 0}
                value={props.currentUser.userName}
                variant="outlined"
              />

              <CustomTextField
                style={{
                  marginTop: "20px",
                }}
                id="outlined-multiline-static"
                label="Your Opinion"
                value={review.data}
                onChange={handleReviewChange}
                multiline
                rows={6}
                variant="outlined"
              />
            </DialogContent>
            <DialogActions style={{ justifyContent: "center" }}>
              <SubmitButton
                disabled={review.data.length === 0}
                onClick={handleReviewSubmit}
              >
                Submit
              </SubmitButton>
            </DialogActions>
          </div>
        ) : (
          <div>
            <DialogTitle>Login or Registration Required</DialogTitle>
            <DialogContentText
              id="alert-dialog-description"
              style={{ padding: "10px 25px" }}
            >
              We appericiate you taking the initiative to give us your valuable
              feedback but for security reasons login is required for this
              action.
            </DialogContentText>

            <DialogActions>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button onClick={handleCloseClicked} color="primary">
                  Login Now
                </Button>
              </Link>
              <Link to="/signUp" style={{ textDecoration: "none" }}>
                <Button onClick={handleCloseClicked} color="primary">
                  Register Now
                </Button>
              </Link>
              <Button onClick={handleCloseClicked} color="primary" autoFocus>
                Close
              </Button>
            </DialogActions>
          </div>
        )}
      </Dialog>
    </TestimonialSection>
  );
}
