import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import styles from '../../../css/app.css';
import { connect } from 'react-redux';
import { FormControl, DropdownButton, MenuItem } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { addCustomer } from '../../actions/customers/add';
import Dropzone from 'react-dropzone';

class NewCustomer extends Component {

  constructor(props) {
    super(props);
    this.state = { name: '', age: '', gender: 'male', files: [] }
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleAgeChange(event) {
    this.setState({ age: event.target.value });
  }

  handleGenderChange(gender) {
    this.setState({ gender });
  }

  save() {
    let { name, age, gender, files } = this.state;
    let { onAddCustomer } = this.props;
    onAddCustomer({ name, age, gender, imageUrl: files[0].preview }).then(data => {
      let { id } = data;
      this.props.history.push(`/customers/${id}`);
    });
  }

  onDrop (files) {
    this.setState({ files });
  }

  render() {
    let { name, age, gender } = this.state;
    let inputStyle = {
      width: 'initial'
    };
    return (
      <div className={ styles.customer }>
        <div style={{ display: 'inline-block', marginRight: 20}}>
          <Dropzone onDrop={ this.onDrop.bind(this) } style={{ marginTop: 15, width: 70, height: 30, borderWidth: 2, borderColor: '#666', borderStyle: 'dashed', borderRadius: 5 }}>
            <div style={{ lineHeight: '30px', marginLeft: 10, cursor: 'pointer' }}>Upload</div>
          </Dropzone>
          { this.state.files ?
            <div>{ this.state.files.map((file) => <img style={{ width: 70, height: 70, marginTop: 15 }} src={file.preview} />) }</div>
          : null }
        </div>
        <div style={{ display: 'inline-block'}}>
          <FormControl style={ inputStyle }
            type="text"
            value={ name }
            placeholder="Customer name..."
            onChange={ this.handleChange.bind(this) }
          />
          <FormControl style={ inputStyle }
            type="number"
            value={ age }
            placeholder="Customer age..."
            onChange={ this.handleAgeChange.bind(this) }
          />
        </div>
        <div style={{ marginTop: 15 }}>
          <DropdownButton onSelect={ this.handleGenderChange.bind(this) }
                          title={ gender === 'male' ? 'Male' : 'Female' }
                          id="bg-justified-dropdown">
            <MenuItem eventKey="male">Male</MenuItem>
            <MenuItem eventKey="female">Female</MenuItem>
          </DropdownButton>
        </div>
        <div className={ styles.save }>
          <Button onClick={ this.save.bind(this) } bsStyle="success">Save</Button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps =  (dispatch) => {
  return {
    onAddCustomer: ({ name, age, gender, imageUrl }) => dispatch(addCustomer({ name, age, gender, imageUrl }))
  };
}

export default connect(undefined, mapDispatchToProps)(NewCustomer);


