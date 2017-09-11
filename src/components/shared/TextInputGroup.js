import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import validator from 'validator';
import PropTypes from 'prop-types';

export default class TextInputGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pristine: true,
            value: this.props.value || '',
            valid: false,
            error: '',
            validationState: null
        };
    }
    componentWillMount() {
        this.props.addComponent(this);
    }
    componentDidMount() {
        let value = this.state.value;
        let { valid, error } = this.validate(value);
        this.setState({value, valid, error});
        this.props.onFieldChange(this.props.name, {value, valid});
    }
    handleChange(e) {
        let value = e.target.value;
        let { valid, error } = this.validate(value);
        this.setState({
            value,
            valid,
            error,
            pristine: false,
            validationState: error ? 'error' : null
        });
        this.props.onFieldChange(this.props.name, {value, valid});
    }
    reset() {
        this.setState({   // reset the field
            pristine: true,
            value: this.props.value || '',
            valid: false,
            error: '',
            validationState: null
        });
    }
    validate(value) {
        if (this.props.required && !value) {
            return {
                valid: false,
                error: this.props.displayName + ' is required'
            };
        }
        if (this.props.minLength && value.length < this.props.minLength) {
            return {
                valid: false,
                error: this.props.displayName + ' should be at least ' + this.props.minLength + ' digits long'
            };
        }
        if (this.props.maxLength && value.length > this.props.maxLength) {
            return {
                valid: false,
                error: this.props.displayName + ' should be no longer than ' + this.props.minLength
            };
        }
        if (this.props.type === 'email' && !validator.isEmail(value)) {
            return {
                valid: false,
                error: this.props.displayName + ' is invalid'
            };
        }
        if (this.props.validate && !this.props.validate(value)) {
            return {
                valid: false,
                error: this.props.displayName + ' is invalid'
            };
        }
        return {valid: true, error: ''};
    }
    render() {
        const { name, type, placeholder } = this.props;
        const { validationState, value, error, pristine } = this.state;
        return (
            <FormGroup controlId={'form-' + name}
                       validationState={validationState}>
                {label && <ControlLabel>{label}</ControlLabel>}
                <FormControl type={type}
                             name={name}
                             placeholder={placeholder}
                             value={value}
                             onChange={this.handleChange.bind(this)}/>
                {error && !pristine && <span className="help-block small">{error}</span>}
            </FormGroup>
        )
    }
}

TextInputGroup.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.any,
    onFieldChange: PropTypes.func
};