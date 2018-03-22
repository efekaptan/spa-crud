import React from 'react';
import Paging from 'reactjs-paging';
import { pageSize } from '../../configuration';
import { Link } from 'react-router-dom';

const CustomerList = ({ match, customers, pageIndex, totalCount, onPageClick, onDeleteClick }) =>
    <div className="row">
        <div className="col-lg-6">
            <div className="card">
                <div className="card-header">
                    <i className="fa fa-align-justify"></i> <strong>Customers</strong> List
                </div>
                <div className="card-block">
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {customers.map(customer =>
                                <tr key={customer.id}>
                                    <td>{customer.id}</td>
                                    <td>{customer.firstName}</td>
                                    <td>{customer.lastName}</td>
                                    <td className="buttons">
                                        <Link className="btn btn-warning btn-sm" to={`/add-edit-customer/${customer.id}`}>Edit</Link>
                                        <button className="btn btn-danger btn-sm" onClick={() => onDeleteClick(customer.id)}>Delete</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <div className="row">
                        <div className="col-lg-9">
                            <nav>
                                {(totalCount > pageSize) &&
                                    <Paging
                                        pageIndex={pageIndex}
                                        groupSize={5}
                                        navSize={2}
                                        totalCount={totalCount}
                                        pageSize={pageSize}
                                        onClick={onPageClick} />
                                }
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <Link to={`/add-edit-customer`} className="btn btn-primary">Create New</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

export default CustomerList;