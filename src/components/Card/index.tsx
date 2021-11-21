import React from 'react';
import { CardContainer, CardBody, CardTitle } from './styles';
import { Row, Col } from 'react-grid-system';

interface CardInitialProps {
  title: string;
}

const Card: React.FC<CardInitialProps> = ({ title, children }) => {
  return (
    <CardContainer>
      <CardTitle>
        <Row align="start">
          <Col xs={12}>
            <h2>{title}</h2>
          </Col>
        </Row>
      </CardTitle>

      <CardBody>{children}</CardBody>
    </CardContainer>
  );
};

export default Card;
