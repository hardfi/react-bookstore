import { IconButton, Menu, MenuItem } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
import React from 'react';
import StateModel from '../base/state.model';
import { sessionChange } from '../redux/actions';
import { connect } from 'react-redux';

function UserActions(props: any) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const {sessionChange} = props;

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        handleClose();
        sessionChange(false);
    };

    const handleGoToHistory = () => {
        handleClose();
        props.goToHistory();
    };

    return (
        <div>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle/>
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleGoToHistory}>Order history</MenuItem>
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </Menu>
        </div>
    )
}

const mapStateToProps = (state: StateModel) => {
    return {
        session: state.session,
    }
};
const mapDispatchToProps = {sessionChange};

export const UserActionsContainer = connect(mapStateToProps, mapDispatchToProps)(UserActions);
