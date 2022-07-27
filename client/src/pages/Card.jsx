import React from "react";
import styled from "styled-components";
import Profile from "../img/profile.png"
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 360px;
  margin-bottom: 45px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  height: 202px;
  background-color: #999;
`;

const Details = styled.div`
  display: flex;
  margin-top: 16px;
  gap: 12px;
`;

const ChannelImage = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #999;
`;

const Texts = styled.div``;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

const ChannelName = styled.h2`
  font-size: 14px;
  color: ${({ theme }) => theme.textSoft};
  margin: 9px 0px;
`;

const Info = styled.div`
font-size: 14px;
color: ${({theme}) => theme.textSoft}
`;

const Card = () => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container>
      <Image src="https://assets-global.website-files.com/616e938268c8f0a92cb2b540/617806fb52d751a1fab3898a_youtube%20banner%20size%20guide-p-800.jpeg" />
      <Details>
        <ChannelImage src={Profile}/>
        <Texts>
          <Title>Test Video</Title>
          <ChannelName>Mahmut Can</ChannelName>
          <Info>550,852 views & 1 day ago</Info>
        </Texts>
      </Details>
    </Container>
    </Link>
  );
};

export default Card;
