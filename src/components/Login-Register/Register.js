import React, { Component } from "react";
import { connect } from "react-redux";
// import { register } from "../../services/session/actions";
import styled from "styled-components";
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
      password: "",
      password2: ""
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleRegister = event => {
    event.preventDefault();
    this.props
      .register({
        username: this.state.username,
        password: this.state.password,
        password2: this.state.password2
      })
      .then(() => this.props.authenticated && this.props.history.push("/home"));
  };

  render() {
    return (
      <CenteredDiv>
        <AuthCard>
          <StyledForm className="FormRegister">
            <StyledH2>Muddy Waters Register</StyledH2>
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
              name="password"
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
  {}
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
  background-color: whitesmoke;
  color: #1a1a1a;
  font-size: 1rem;
  border: none;
  font-weight: 100;
  outline: none;
  text-align: center;
  height: 40px;
  width: 268px;
  margin: 5px 0;
  border: solid 1px #48484841;
  border-radius: 4px;
`;

const StyledH2 = styled.h2`
  font-family: Copperplate;
  font-size: 2rem;
  margin: 0;
  font-weight: 500;
`;
