import Button, { ButtonProps } from '@material-ui/core/Button';
import {
  StyleRules,
  StyleRulesCallback,
  Theme,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';
import * as React from 'react';

type Props = ButtonProps & WithStyles<ClassKey>;

const FormButton = ({ children, classes, ...props }: Props) => (
  <Button {...props} className={classes.button} variant="contained">
    {children}
  </Button>
);

type ClassKey = 'button';
const styles: StyleRulesCallback<ClassKey> = (
  theme: Theme,
): StyleRules<ClassKey> => ({
  button: {
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
  },
});

export default withStyles(styles)<Props>(FormButton);
