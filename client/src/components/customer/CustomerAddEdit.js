import React from 'react';

const CustomerAddEdit = ({ customer, onChange, onSubmit, onGoBack }) =>
    <div className="row">
        <div className="col-lg-6">
            <div className="card">
                <form className="form-horizontal">
                    <div className="card-header">
                        <strong>Add/Edit Customer</strong>
                    </div>
                    <div className="card-body card-block">
                        <div className="row form-group">
                            <div className="col col-md-3">
                                <label htmlFor="title" className="form-control-label">First Name</label>
                            </div>
                            <div className="col-12 col-md-9">
                                <input type="text" id="title" name="title" value={customer.firstName} onChange={onChange} placeholder="Enter First Name..." className="form-control" />
                            </div>
                        </div>
                        <div className="row form-group">
                            <div className="col col-md-3">
                                <label htmlFor="description" className="form-control-label">Last Name</label>
                            </div>
                            <div className="col-12 col-md-9">
                                <input type="text" id="description" name="description" value={customer.lastName} onChange={onChange} placeholder="Enter Last Name..." className="form-control" />
                            </div>
                        </div>
                    </div>
                    <div className="card-footer buttons">
                        <button type="button" onClick={onSubmit} className="btn btn-primary btn-sm">
                            <i className="fa fa-dot-circle-o"></i> Submit
                        </button>
                        <button type="button" className="btn btn-sm" onClick={onGoBack}>Go Back</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

export default CustomerAddEdit;