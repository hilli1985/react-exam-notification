import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import classname from 'classnames';

const colorStyle = {
    red:'borderColorRed',
    green:'borderColorGreen',
    yellow:'borderColorYellow',
    gray:'borderColorGray',
}


const styles = (theme => ({
  root: {
    flexGrow: 1,
  },
  notification : {
    margin:'auto',
    marginTop:'10px',
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  borderColorRed: {
    borderLeft: '5px solid red',

  },
  borderColorGreen: {
    borderLeft: '5px solid Green',

},
borderColorGray: {
    borderLeft: '5px solid Gray',

},
borderColorYellow: {
    borderLeft: '5px solid Yellow',
},

}));

 class Notification extends React.Component {

  componentDidMount = async () => {
    console.log(this.props.notification)
  }

  render() {
    const {notification} = this.props;
    const {classes} = this.props
  return (
        <Grid className={classname(classes.notification)} item xs={10}>
          <Paper className={classname(classes.paper, classes[colorStyle[notification.color]])} >
          <div>{notification.date}</div>
          {notification.information}</Paper>

        </Grid>
  );}
}


export default withStyles(styles)(Notification);