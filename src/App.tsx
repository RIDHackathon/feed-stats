import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from '../node_modules/redux';
import Navbar from './components/navbar';
import { IState } from './store/reducers';

import { increment } from './store/actions';

interface IProps {
  message: string;
  count: number;
  handleClick: () => void;
}

class App extends React.Component<IProps> {
  public render() {
    // const { classes } = this.props;
    return (
      <Grid container={true} spacing={24}>
        <Navbar />
        <Grid item={true} className="App-intro" md={6}>
          {this.props.message} - {this.props.count}
        </Grid>
        <button onClick={this.props.handleClick}> Click me </button>
      </Grid>
    );
  }
}

interface IStateFromProps {
  message: string;
  count: number;
}

interface IGlobalState {
  test: IState;
}

interface IStateFromDispatch {
  handleClick: () => void;
}

const mapDispatchToProps = (dispatch: Dispatch): IStateFromDispatch => ({
  handleClick: () => dispatch(increment()),
});

const mapStateToProps = (state: IGlobalState): IStateFromProps => {
  return {
    count: state.test.count,
    message: state.test.message,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
