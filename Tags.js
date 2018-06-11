import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

class Tags extends Component {
  state = {
    name: ""
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };
  render() {
    return (
      <div>
        <h1>Tags</h1>
        <form>
          <TextField
            id="name"
            label="Name"
            className={styles.textField}
            value={this.state.name}
            onChange={this.handleChange("name")}
            margin="normal"
          />
        </form>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
      </div>
    );
  }
}
export default Tags;
