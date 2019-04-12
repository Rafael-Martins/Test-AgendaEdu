import React from "react";
import {
  Input,
  InputContainer,
  IconContainer,
  Container,
  LabelContainer,
  Label
} from "./BaseInput.style";
import Icon from "react-native-vector-icons/FontAwesome";
import { colors } from "../../constants/Colors";

export class BaseInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      isHidden: this.props.type == "password"
    };
  }
  render() {
    return (
      <Container>
        <LabelContainer>
          <Label testID="InputLabel">{this.props.label}</Label>
        </LabelContainer>
        <InputContainer>
          <Input
            testID="Input"
            onChangeText={this.props.onChangeText}
            textContentType={this.props.type}
            secureTextEntry={this.state.isHidden}
            isActive={this.state.isActive}
            onFocus={target => {
              this.setState({ isActive: true });
            }}
            onBlur={target => {
              this.setState({ isActive: false });
            }}
          />

          <IconContainer
            underlayColor="white"
            onPress={params => {
              if (this.props.type != "password") return;
              this.setState({ isHidden: !this.state.isHidden });
            }}
            isActive={this.state.isActive}
            testID="InputIcon"
          >
            <Icon
              name={
                !this.state.isHidden & (this.props.type == "password")
                  ? "eye"
                  : this.props.icon
              }
              size={16}
              color={colors.lightGray}
            />
          </IconContainer>
        </InputContainer>
      </Container>
    );
  }
}
