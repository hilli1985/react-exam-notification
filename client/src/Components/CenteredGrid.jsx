import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {getNotifications} from '../lib/api'
import Notification from '../Components/Notification'
import SearchBar from '../Components/SearchBar'
import Checkboxes from '../Components/Checkboxes'

const styles = (theme => ({
  root: {
    flexGrow: 1,
    margin:'50px',

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

 class CenteredGrid extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      notifications:[],
      query:'B-LAO',
      showOnlyActive:true
    };
  }

  componentDidMount = async () => {
    const {notifications} = await getNotifications();
    console.log(notifications)
    this.setState({notifications : notifications})
  }

  notificationRenderer = () => {
    const {showOnlyActive, query} = this.state
    return this.state.notifications.map(n => 
      {return (n.active || showOnlyActive) && <Notification notification={n}/>}
      )
      // .filter(a => a.information.includes(query))
  }

  toggelshowOnlyActive = () => {
    const {showOnlyActive} = this.state
    this.setState ({showOnlyActive : !showOnlyActive })
  }

  changeQuery= (query) => {
    alert('query', query)
    this.setState ({query : query})
  }



  render() {
    const {classes} = this.props
 
  return (
    <div className={classes.root}>
           
      
      <Grid container spacing={3}>
      <Grid  item xs={6}>
           Notifications
      </Grid>
      <Grid item xs={3}>
           <Checkboxes toggelshowOnlyActive={this.toggelshowOnlyActive}/>
      </Grid>
      <Grid item xs={3}>
           <SearchBar changeQuery={this.changeQuery}/>
      </Grid>
      {this.notificationRenderer()}
      </Grid>
    </div>
  );}
}


export default withStyles(styles)(CenteredGrid);