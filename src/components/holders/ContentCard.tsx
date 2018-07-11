import { Card, CardContent } from '@material-ui/core';
import { StyleRules, StyleRulesCallback, WithStyles, withStyles } from '@material-ui/core/styles';
import * as React from 'react';

interface Props {
  readonly children?: React.ReactNode;
}

const ContentCard = ({ classes, children }: Props & WithStyles<ClassKey>) => (
  <Card className={classes.container}>
    <CardContent>{children}</CardContent>
  </Card>
);

type ClassKey = 'container';
const styles: StyleRulesCallback<ClassKey> = (theme): StyleRules<ClassKey> => ({
  container: {
    margin: theme.spacing.unit * 2,
    maxWidth: theme.breakpoints.values.lg,
    minWidth: 275,
  },
});

export default withStyles(styles)(ContentCard);
