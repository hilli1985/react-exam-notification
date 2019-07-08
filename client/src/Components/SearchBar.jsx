import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Search from '@material-ui/icons/SearchOutlined';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const ranges = [
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    flexBasis: 200,
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    query:''
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSearch = () => {
    alert(values.query)
    console.log(props.changeQuery())
  };

  return (
    <div className={classes.root}>
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="adornment-password">Search</InputLabel>
        <Input
          id="adornment-password"
        //   type={values.showPassword ? 'text' : 'password'}
          value={values.query}
          onChange={handleChange('query')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="Toggle password visibility" onClick={handleSearch}>
                { <Search /> }
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}