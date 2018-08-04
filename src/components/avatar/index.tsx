import Avatar from '@material-ui/core/Avatar';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import * as React from 'react';

const styles = {
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    height: 60,
    width: 60,
  },
};

interface IProps extends WithStyles<typeof styles> {
  imageName: string;
  totalPostCount: number;
}

const IAvatar: React.SFC<IProps> = props => {
  const { classes, imageName, totalPostCount } = props;
  const userCount = imageName
    .split('')
    .map(ch => ch.charCodeAt(0))
    .reduce((accu, curr) => accu + curr);
  return (
    <React.Fragment>
      <Avatar
        style={{ margin: 'auto' }}
        alt={imageName}
        src="https://cataas.com/c"
        className={`${classes.avatar} ${classes.bigAvatar}`}
      />
      <Typography gutterBottom={true} variant="caption">
        {imageName} <br />
        Posts you've viewed: {userCount} <br />
        Percentage of total:{' '}
        {((userCount / totalPostCount) * 100).toPrecision(4)}%
      </Typography>
    </React.Fragment>
  );
};

export default withStyles(styles)(IAvatar);
