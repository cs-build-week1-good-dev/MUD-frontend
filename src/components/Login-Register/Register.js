import React, { Component } from "react";
import { connect } from "react-redux";
import { doRegister } from "../../actions";
import styled from "styled-components";
import { theme1 } from "../../styles/theme.js";
// import Error from "../../components/Error";
import {
  AuthCard,
  CenteredDiv,
  Button,
  Spinner,
  ButtonSmallSubtle,
  colors
} from "../../styles";
import { Link } from "react-router-dom";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password1: "",
      password2: ""
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleRegister = event => {
    event.preventDefault();
    this.props.doRegister({
      username: this.state.username,
      password1: this.state.password1,
      password2: this.state.password2
    });
    //       .then(() => this.props.authenticated && this.props.history.push("/home"));
  };

  render() {
    return (
      <CenteredDiv>
        <AuthCard>
          <StyledForm className="FormRegister">
            <StyledH2>Dope Register</StyledH2>
            <StyledInput
              type="text"
              placeholder="Enter New Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChanges}
            />
            <StyledInput
              type="password"
              placeholder="Create Password"
              name="password1"
              value={this.state.password}
              onChange={this.handleChanges}
            />{" "}
            <StyledInput
              type="password"
              placeholder="Please Repeat Password"
              name="password2"
              value={this.state.password2}
              onChange={this.handleChanges}
            />
            <br />
            <Button onClick={this.handleRegister} type="submit">
              Register
              {this.props.registering && <Spinner />}
            </Button>
            <Link to="/login">
              <ButtonSmallSubtle>Login</ButtonSmallSubtle>
            </Link>
          </StyledForm>
        </AuthCard>
      </CenteredDiv>
    );
  }
}

const mapStateToProps = () => {};

export default connect(
  mapStateToProps,
  { doRegister }
)(Register);

const StyledForm = styled.form`
  width: 348px;
  height: 363px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledInput = styled.input`
  /* background-color: ${theme1.teaRose}; */
  color: ${theme1.onyx};
  font-size: 1rem;
  border: none;
  outline: none;
  text-align: center;
  height: 40px;
  width: 268px;
  margin: 5px 0;
  border: solid 1px #48484841;
  border-radius: 4px;
`;

const StyledH2 = styled.h2`
color: ${theme1.onyx}
  font-size: 2rem;
  margin: 0;

`;
