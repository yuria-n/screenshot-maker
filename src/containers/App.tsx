import { TextField } from '@material-ui/core';
import {
  StyleRules,
  StyleRulesCallback,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';
import * as React from 'react';

import { ContentCard, FormButton, Header } from '../components';

class App extends React.PureComponent<WithStyles<ClassKey>> {
  public render() {
    const { content } = this.props.classes;
    return (
      <div>
        <Header />
        <div className={content}>
          <ContentCard>
            <TextField
              name="url"
              label="URL"
              InputLabelProps={{
                shrink: true,
              }}
              placeholder="e.g. https://sample.com"
              helperText=""
              fullWidth={true}
              margin="normal"
            />
            <FormButton
              name="preview"
              text="preview"
              onClick={this.onPreviewClick}
            />
            <FormButton
              name="download"
              text="Download"
              onClick={this.onDownloadClick}
              color="secondary"
            />
          </ContentCard>
        </div>
      </div>
    );
  }

  private onPreviewClick = () => {
    console.log('preview clicked');
  };

  private onDownloadClick = () => {
    console.log('download clicked');
  };
}

type ClassKey = 'content';
const styles: StyleRulesCallback<ClassKey> = (theme): StyleRules<ClassKey> => ({
  content: {
    margin: 'auto',
    maxWidth: theme.breakpoints.values.lg + theme.spacing.unit * 4,
  },
});

export default withStyles(styles)(App);
