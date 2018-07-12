import { TextField } from '@material-ui/core';
import {
  StyleRules,
  StyleRulesCallback,
  WithStyles,
  withStyles,
} from '@material-ui/core/styles';
import axios from 'axios';
import * as FileSaver from 'file-saver';
import * as moment from 'moment';
import * as React from 'react';

type Props = Partial<State>;

interface State {
  readonly url: string;
}

import { ContentCard, FormButton, Header } from '../components';

class App extends React.PureComponent<Props & WithStyles<ClassKey>, State> {
  public state: State = {
    url: '',
  };
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
              value={this.state.url}
              onChange={this.onChangeText}
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

  private onChangeText = (event: any) => {
    const url = event.target.value;
    this.setState({ url });
  };

  private onPreviewClick = () => {
    console.log('preview clicked');
  };

  private onDownloadClick = async () => {
    const res = await axios({
      url: '/pdf',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      responseType: 'blob',
      data: this.state,
    });
    const date = moment(new Date()).format('HHmmss-MM-DD-YYYY');
    FileSaver.saveAs(res.data, `${date}.pdf`);
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
