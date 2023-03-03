import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  padding: 14px;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  border-color: #FFFFFF;
  border-width: 1px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  padding-top: 20px;
`;

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Rate = styled.Text`
  color: #ffffff;
  padding-left: 4px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  align-items: center;
  border-top: 30px;
  background-color: #E7A748;
`;
