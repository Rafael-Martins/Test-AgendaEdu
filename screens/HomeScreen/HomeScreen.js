import React from "react";
import http from "../../services/http";
import { AsyncStorage, ActivityIndicator } from "react-native";
import { BaseButton } from "../../components/BaseButton/BaseButton";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addEvents } from "../../actions";
import { Container } from "./HomeScreen.style";
import { EventsList } from "../../components/EventsList";
import { colors } from "../../constants/Colors";

class HomeScreen extends React.Component {
  async componentDidMount() {
    try {
      const response = await http.getEvents();
      this.props.addEvents(response);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <Container>
        {this.props.events.loaded ? (
          <EventsList events={this.props.events.eventsArray} />
        ) : (
          <ActivityIndicator size={40} color={colors.primary} />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return { events: state.events };
};

mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addEvents
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
