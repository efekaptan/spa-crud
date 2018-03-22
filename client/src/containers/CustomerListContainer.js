import React, { Component } from "react";
import PropTypes from 'prop-types';
import { getCustomers, deleteCustomer } from '../actions/customer';
import { connect } from 'react-redux';
import CustomerList from '../components/customer/CustomerList';
import { toastr } from 'react-redux-toastr';

class CustomerListContainer extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            pageIndex: this.props.match.params.page || 1
        }
    }

    static contextTypes = {
        router: PropTypes.object
    }

    static propTypes = {
        history: PropTypes.object
    }


    componentWillMount = () => {
        this.props.getCustomers(this.state.pageIndex);
    }

    onPageClick = (pageIndex) => {
        this.props.getCustomers(pageIndex);
        this.setState({
            pageIndex: pageIndex
        });
        this.context.router.history.push(`/customers/${pageIndex}`);
    }

    onDeleteClick = async (id) => {
        const result = await this.props.deleteCustomer(id);
        if (result.response.changes > 0) {
            toastr.success('Success', 'Customer deleted');
            this.props.getCustomers(this.state.pageIndex);
        }
    }

    render = () => {
        return (
            <CustomerList
                customers={this.props.customers}
                pageIndex={this.state.pageIndex}
                totalCount={this.props.totalCount}
                onPageClick={this.onPageClick}
                onDeleteClick={this.onDeleteClick}
            />
        )
    }
}

const mapStateToProps = state => {
    return {
        customers: state.customer.data.result,
        totalCount: state.customer.data.totalCount
    }
}

const mapDispatchToProps = {
    getCustomers,
    deleteCustomer
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerListContainer);