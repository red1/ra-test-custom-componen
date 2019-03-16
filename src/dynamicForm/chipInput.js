import React from "react";
import { Field } from "redux-form";
import { ChipInput } from "material-ui-chip-input";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  }
});
const renderChipInput = ({ input, meta: { touched, error } }) => (
  <ChipInput
    {...input}
    value={input.value || []}
    onAdd={addedChip => {
      let values = input.value || [];
      values = values.slice();
      values.push(addedChip);
      input.onChange(values);
    }}
    onDelete={deletedChip => {
      let values = input.value || [];
      values = values.filter(v => v !== deletedChip);
      input.onChange(values);
    }}
    onBlur={() => input.onBlur()}
  />
);
const Chip = () => <Field name="tags" component={renderChipInput} />;
export default Chip(withStyles(styles)(renderChipInput));
