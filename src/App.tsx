import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import { connect } from 'react-redux';
import Navbar from './components/navbar';
import { IState } from './store/reducers';

import logo from './logo.svg';

interface IProps {
  message: string;
}

class App extends React.Component<IProps> {
  public render() {
    // const { classes } = this.props;
    return (
      <Grid container={true} spacing={24}>
        <Navbar />
        <Grid item={true} className="App-header" md={6}>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </Grid>
        <Grid item={true} className="App-intro" md={6}>
          {this.props.message}
        </Grid>
      </Grid>
    );
  }
}

interface IStateFromProps {
  message: string;
}

interface IGlobalState {
  test: IState;
}

const mapStateToProps = (state: IGlobalState  ): IStateFromProps => {
  return {
    message: state.test.message,
  };
};

export default connect(mapStateToProps)(App);
