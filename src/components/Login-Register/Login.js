import React, { Component } from "react";
import { connect } from "react-redux";
import { doLogin } from "../../actions";
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
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password1: ""
    };
  }

  handleChanges = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = event => {
    event.preventDefault();
    this.props.doLogin({
      username: this.state.username,
      password: this.state.password1
    });
    //     .then(() => this.props.authenticated && this.props.history.push("/home"));
  };

  render() {
    if (this.props.token) {
      return <Redirect to="/adv" />;
    }

    return (
      <CenteredDiv>
        <AuthCard>
          <StyledForm>
            <StyledH2>Dope Login</StyledH2>
            <StyledInput
              type="text"
              placeholder="Username"
              name="username"
              value={this.state.username}
              onChange={this.handleChanges}
            />
            <StyledInput
              type="password"
              placeholder="Password"
              name="password1"
              value={this.state.password}
              onChange={this.handleChanges}
            />{" "}
            <br />
            <Button onClick={this.handleLogin} type="submit">
              Log In
              {this.props.authenticating && <Spinner />}
            </Button>
            <Link to="/register">
              <ButtonSmallSubtle>register</ButtonSmallSubtle>
            </Link>
          </StyledForm>
        </AuthCard>
      </CenteredDiv>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.login.token
  };
};

export default connect(
  mapStateToProps,
  { doLogin }
)(Login);

const StyledForm = styled.form`
  width: 348px;
  height: 363px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const StyledInput = styled.input`
  color: #1a1a1a;
  font-size: 1.33rem;
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
  color: ${theme1.onyx};
  font-size: 3rem;
  margin: 0;
`;
