import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function Checkboxes(props) {
  const [state, setState] = React.useState({
    showActiveOnly: false,
  });


  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
    props.toggelshowOnlyActive();
    
  };

  return (
    <div>
      <Checkbox
       label="show active only"
        color="default"
        value="showActiveOnly"
        onChange={handleChange('showActiveOnly')}
        inputProps={{
          'aria-label': 'checkbox with default color',
        }}
      />
      Show only active
    </div>
  );
}