import React, { useState } from "react";
import {
  Container,
  Label,
  InputList,
  InputBox,
  ContentGroup,
  Placeholder,
  InputListLabel,
  InputLabel,
  ListBox,
} from "../styles";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const SelectInput = (props: {
  receivedChoose: (data: any) => void;
  label: string;
  optionsList: string[];
}) => {
  const [selectedItem, setSelectedItem] = useState();
  const [placeholderState, setPlaceholderState] = useState(true);
  const [activeList, setActiveList] = useState(false);

  const chooseItem = (choose: any) => {
    setActiveList(!activeList);
    setPlaceholderState(false);
    setSelectedItem(choose);
    props.receivedChoose(choose);
  };

  const { label } = props;
  const { optionsList } = props;

  return (
    <Container>
      <Label>{label}</Label>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setActiveList(!activeList)}
      >
        <ContentGroup>
          <InputBox>
            <Placeholder
              style={
                placeholderState
                  ? styles.placeholderActive
                  : styles.placeholderInactive
              }
            >
              Selecione...
            </Placeholder>
            {selectedItem ? <InputLabel> {selectedItem} </InputLabel> : null}
          </InputBox>
        </ContentGroup>
      </TouchableOpacity>

      <ListBox style={activeList ? styles.listActive : styles.listInactive}>
        {optionsList.map((item) => (
          <InputList key={item} onPress={() => chooseItem(item)}>
            <InputListLabel>{item}</InputListLabel>
          </InputList>
        ))}
      </ListBox>
    </Container>
  );
};

const styles = StyleSheet.create({
  listActive: {
    display: "flex",
  },
  listInactive: {
    display: "none",
    position: "relative",
  },

  placeholderActive: {
    display: "flex",
  },
  placeholderInactive: {
    display: "none",
  },
});

export default SelectInput;
