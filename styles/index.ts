import styled from "styled-components/native";

const Container = styled.View`
  margin: 10px 0;
`;

const Label = styled.Text`
  color: #333333;
  font: normal normal normal 13px/17px Roboto;
`;

const InputBox = styled.View`
  width: 95%;
  justify-content: center;
`;

const ContentGroup = styled.View`
  width: 100%;
  flex-direction: row;
  height: 47px;
  border-radius: 4px;
  background-color: #ffffff;
  margin-top: 5px;
  padding: 7px;
  margin-bottom: 2px;
  border: 1px solid #dcdfe6;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Placeholder = styled.Text`
  color: #c0c4cc;
  font: normal normal normal 14px/17px Roboto;
`;

const SelectedBox = styled.View`
  background-color: #eef6f9;
  height: 25px;
  border-radius: 4px;
  margin: 5px;
  border: 1px solid #9dc7d6;
  align-items: center;
  justify-content: center;
`;

const InputLabel = styled.Text`
  color: #333333;
  font: normal normal normal 13px/17px Roboto;
`;

const ListBox = styled.ScrollView`
  width: 100%;
  background-color: #ffffff;
  min-height: 30px;
  max-height: 150px;
  border-radius: 10px;
  border: 1px solid #e0e0e0;
  z-index: 9;
  position: absolute;
  margin-top: 70px;
  display: none;
`;

const InputList = styled.TouchableOpacity`
  height: 35px;
  align-items: center;
  padding-left: 10px;
  margin-top: 1px;
  flex-direction: row;
`;

const InputListLabel = styled.Text`
  color: #555555;
  font: normal normal normal 13px/17px Roboto;
`;
export {
  Container,
  Label,
  InputList,
  InputBox,
  ContentGroup,
  Placeholder,
  InputListLabel,
  SelectedBox,
  InputLabel,
  ListBox,
};
