import React from "react";
import { arrayOf, shape, string, bool } from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  display: block;
`;

const Complete = styled.span`
  animation: appearingText 0.6s ease-in;
  color: #37cc2d;
  @keyframes appearingText {
    0% {
      color: transparent;
    }
    100% {
      color: #37cc2d;
    }
  }
`;

const Pending = styled.span`
color: #f0dd65;
}
`;
const StatusName = styled.span`
  color: #757575;
`;

const Subheading = styled.h3`
  text-transform: uppercase;
  margin-top: 1.5em;
  font-size: 1em;
`;

const SecondHeading = styled.h2`
  text-transform: uppercase;
  font-size: 1.2em;
`;
const Operational = styled.span`
  animation: appearingText 0.6s ease-in;
  color: #37cc2d;
  @keyframes appearingText {
    0% {
      color: transparent;
    }
    100% {
      color: #37cc2d;
    }
  }
`;

const ServiceDown = styled.span`
animation: appearingText 0.6s ease-in;
color: #d94514;
@keyframes appearingText {
  0% {
    color: transparent;
  }
  100% {
    color: #d94514;
  }
}
`;


const StatusComponent = data => {

  return (
    <Container>
      <SecondHeading>
        {data.provider}
      </SecondHeading>
      <Container>
        <StatusName>
          call status:
          {data.pending ? (
            <Pending> pending</Pending>
          ) : (
            <Complete> complete</Complete>
          )}
        </StatusName>
      </Container>
      <Container>
        <Subheading>Statuses</Subheading>
        {data.statuses.map((item, i) => {
          return (
            <Container key={i}>
              <StatusName>{item.name}:</StatusName>
              {item.status ? (
                <Operational> operational</Operational>
              ) : (
                <ServiceDown> service down</ServiceDown>
              )}
            </Container>
          );
        })}
      </Container>
      <Container>
        <StatusName>
        </StatusName>
      </Container>
    </Container>
  );
};

StatusComponent.propTypes = {
  data: arrayOf(
    shape({
      provider: string,
      statuses: arrayOf(
        shape({
          name: string,
          status: bool
        })
      )
    })
  )
};
export default StatusComponent;