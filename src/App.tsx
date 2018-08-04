import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from '../node_modules/redux';
import Avatar from './components/avatar';
import Navbar from './components/navbar';
import { IState } from './store/reducers';

import { Typography } from '../node_modules/@material-ui/core';
import { increment } from './store/actions';

interface IProps {
  message: string;
  count: number;
  handleClick: () => void;
}

const usernames = ['Alice', 'Bob', 'Carol', 'Steve', 'Ivan'];

class App extends React.Component<IProps> {
  private count = usernames
    .map(name =>
      name
        .split('')
        .map(ch => ch.charCodeAt(0))
        .reduce((accu, curr) => accu + curr, 0),
    )
    .reduce((accu, curr) => accu + curr, 0);

  public render() {
    // const { classes } = this.props;
    return (
      <Grid container={true} spacing={16}>
        <Navbar />
        <Typography variant="title">Where do you get your news?</Typography>
        <br />
        <Typography variant="subheading">
          You've seen {this.count} total pieces of content this month.{' '}
        </Typography>
        <br />
        <br />
        <br />
        <Grid
          container={true}
          spacing={16}
          xs={12}
          style={{ textAlign: 'center' }}
        >
          {usernames.map(name => (
            <Grid item={true} sm={12} md={6} lg={3}>
              <Avatar totalPostCount={this.count} key={name} imageName={name} />
            </Grid>
          ))}
        </Grid>
        {/* <button onClick={this.props.handleClick}> Click me </button> */}
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
