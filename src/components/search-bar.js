/*
 * File: /Users/michaelbeeson/Documents/VSCode/react004-react16/ReduxSimpleStarter/src/components/search-bar.js
 */

import _ from "lodash";
import React, { Component } from "react";
import { Search, Grid } from "semantic-ui-react";

export default class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () => {
    this.setState({
      isLoading: false,
      searchValue: ""
    });
  };

  handleResultSelect = (e, { result }) =>
    this.setState({
      searchValue: result.title
    });

  onSearchChange = (e, { value }) => {
    this.setState({
      isLoading: true,
      searchValue: value
    });
    this.props.onSearchTermChange(value);
    //  let ex = this.state.searchValue; //?
    //  console.log(this.state.searchValue);
    this.setState({ isLoading: false });
  };

  render() {
    const { isLoading, searchValue, results } = this.state;

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            showNoResults
            loading={isLoading}
            // onResultSelect={this.handleResultSelect}
            onSearchChange={_.debounce(this.onSearchChange, 500, {
              leading: true
            })}
            // results={this.props.searchResults}
            value={searchValue}
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
