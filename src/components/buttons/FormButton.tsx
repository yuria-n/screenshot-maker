import { Button, PropTypes } from '@material-ui/core';
import { StyleRules, StyleRulesCallback, WithStyles, withStyles } from '@material-ui/core/styles';
import * as React from 'react';

interface Props {
  readonly color?: PropTypes.Color;
  readonly name: string;
  readonly onClick: () => void;
  readonly text: string;
}

const FormButton = ({
  classes,
  color = 'primary',
  name,
  onClick,
  text,
}: Props & WithStyles<ClassKey>) => (
  <Button
    name={name}
    className={classes.button}
    variant="contained"
    color={color}
    onClick={onClick}
  >
    {text}
  </Button>
);

type ClassKey = 'button';
const styles: StyleRulesCallback<ClassKey> = (theme): StyleRules<ClassKey> => ({
  button: {
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
});

export default withStyles(styles)(FormButton);
