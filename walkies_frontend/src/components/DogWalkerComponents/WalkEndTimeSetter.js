import React from "react";

import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

function WalkEndTimeSetter(props) {
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-02-01T21:11:54'));

  const handleDateChange = endDate => {
    setSelectedDate(endDate);
    props.onChange(endDate);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">

        <KeyboardTimePicker
          margin="normal"
          id="end-time-picker"
          label="End Time"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change time',
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default WalkEndTimeSetter;