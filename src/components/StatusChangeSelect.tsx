import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import { changeOrderStatus } from '../redux/actions';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import { DispatchProps, StateProps } from '../base/props.model';

interface ParentProps {
    orderId: string;
}

type Props = StateProps & DispatchProps & ParentProps;

class StatusChangeSelect extends React.Component<Props, any> {
    constructor(props: Props) {
        super(props);
        this.state = {
            status: null,
            orderId: null
        };
    }

    static getDerivedStateFromProps(nextProps: any, prevState: any) {
        if ('orderId' in nextProps && nextProps.orderId !== prevState.orderId) {
            return {status: nextProps.status, orderId: nextProps.orderId};
        } else {
            return null;
        }
    }

    handleChange = (event: React.ChangeEvent<{ value: any }>) => {
        const newStatus = event.target.value;
        const {changeOrderStatus, orderId} = this.props;
        this.setState({status: newStatus});
        changeOrderStatus(orderId, newStatus);
        toast.success('Order status changed successfully');
    };

    render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <FormControl variant="outlined" style={{minWidth: 120}}>
                <Select
                    labelId="label"
                    id="select1"
                    value={this.state.status}
                    onChange={this.handleChange}>
                    <MenuItem value='new' disabled>New</MenuItem>
                    <MenuItem value='paid' disabled>Paid</MenuItem>
                    <MenuItem value='sent'>Sent</MenuItem>
                    <MenuItem value='cancelled'>Cancelled</MenuItem>
                </Select>
            </FormControl>
        )
    }

}

const mapDispatchToProps = {changeOrderStatus};

export const StatusChangeSelectContainer = connect(null, mapDispatchToProps)(StatusChangeSelect);
