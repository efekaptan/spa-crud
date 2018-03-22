import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomerAddEdit from '../components/customer/CustomerAddEdit';
import { addCustomer, getCustomer, editCustomer } from '../actions/customer';
import { toastr } from 'react-redux-toastr';
import { withRouter } from 'react-router'

class CustomerAddEditContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            id: '',
            title: '',
            description: ''
        }
    }

    static contextTypes = {
        router: PropTypes.object
    }

    static propTypes = {
        history: PropTypes.object
    }

    componentWillMount = () => {
        if (this.props.match.params.id) {
            this.props.getCustomer(this.props.match.params.id);
        }
    }

    componentWillReceiveProps = nextProps => {
        if (nextProps.customer !== this.state) {
            this.setState(nextProps.customer);
        }
    }

    onChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onSubmit = async () => {
        let result;
        if (this.state.id) {
            result = await this.props.editCustomer(this.state);
            if (result.response.changes > 0) {
                toastr.success('Success', 'Customer edited');
                this.context.router.history.push(`/customers`);
            }
        }
        else {
            result = await this.props.addCustomer(this.state);

            if (result.response.lastId > 0) {
                toastr.success('Success', 'Customer added');
                this.context.router.history.push(`/customers`);
            }
        }
    }

    onGoBack = () => {
        this.props.history.goBack();
    }

    render = () => {
        return (
            this.state && <CustomerAddEdit
                customer={this.state}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
                onGoBack={this.onGoBack}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        customer: state.customer.single
    }
}

const mapDispatchToProps = {
    addCustomer,
    editCustomer,
    getCustomer
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomerAddEditContainer));