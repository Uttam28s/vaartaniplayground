import React from "react";
import PropTypes from "prop-types";
import "./card.css";
import { Card, Nav } from "react-bootstrap";
import cardBImage from "../../assets/card-image.png";
import { SimpleButton } from "../Button/Button";

export const BasicCard = ({
  isbutton,
  buttonbackground,
  buttonText,
  buttonTextColor,
  cardTextColor,
  cardVarient,
  buttonVarient,
  cardBackground,
  cardTitle,
  cardText,
  border,
  header,
  cardFooterText,
  cardheadertext,
  cardSubtitle,
  tabCard,
  ...props
}) => {
  return (
    <>
      {tabCard ? (
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link>Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link disabled>Disabled</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <SimpleButton variant="primary" value="Go somewhere"></SimpleButton>
          </Card.Body>
        </Card>
      ) : (
        <div className="vaartani-playground-card-wrapper">
          <Card
            bg={!border ? cardVarient : null}
            border={border ? cardVarient : null}
            style={{
              width: "18rem",
              backgroundColor: cardBackground,
              color: cardTextColor,
            }}
          >
            {header ? <Card.Header>{cardheadertext}</Card.Header> : ""}

            <Card.Img variant="top" src={cardBImage} />
            <Card.Body>
              <Card.Title>{cardTitle}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {cardSubtitle}
              </Card.Subtitle>
              <Card.Text>{cardText}</Card.Text>
              {!isbutton ? (
                ""
              ) : (
                <SimpleButton
                  variant={buttonVarient}
                  value={buttonText}
                  backgroundColor={buttonbackground}
                  color={buttonTextColor}
                />
              )}
            </Card.Body>
            {header ? <Card.Footer>{cardFooterText}</Card.Footer> : ""}
          </Card>
          {header ? (
            ""
          ) : (
            <Card
              bg={cardVarient}
              style={{
                width: "18rem",
                backgroundColor: cardBackground,
                color: cardTextColor,
              }}
            >
              <Card.Body>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>{cardText}</Card.Text>
                {!isbutton ? (
                  ""
                ) : (
                  <SimpleButton
                    variant={buttonVarient}
                    value={buttonText}
                    backgroundColor={buttonbackground}
                    color={buttonTextColor}
                  />
                )}
              </Card.Body>
              <Card.Img src={cardBImage} />
            </Card>
          )}
        </div>
      )}
      {/* )} */}
    </>
  );
};

BasicCard.propTypes = {
  isbutton: PropTypes.bool,
  cardVarient: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  buttonVarient: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  buttonbackground: PropTypes.string,
  buttonText: PropTypes.string,
  buttonTextColor: PropTypes.string,
  cardTextColor: PropTypes.string,
  cardBackground: PropTypes.string,
  cardTitle: PropTypes.string,
  cardText: PropTypes.string,
  border: PropTypes.bool,
  cardSubtitle: PropTypes.string,
  cardheadertext: PropTypes.string,
  cardFooterText: PropTypes.string,
  tabCard: PropTypes.bool,
};

BasicCard.defaultProps = {
  // isbutton: false,
  tabCard: false,
  cardheadertext: "Card Header",
  cardFooterText: "Card Footer",
  buttonText: "Action",
  cardTitle: "Card Title",
  cardText:
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
  cardSubtitle: "Card Subtitle",
};
