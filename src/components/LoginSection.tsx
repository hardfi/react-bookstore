import * as React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';

class LoginSection extends React.Component<any, any> {
    state: any = {
        password: ''
    };

    handleInput = (pass: any) => {
        this.setState({
            password: pass.target.value
        })
    };

    handleLogin = () => {
        this.props.onLogin(this.state.password);
    };

    render(): React.ReactElement | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        return (
            <Grid container justify='center'>
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    placeholder='Hover over a photo to get the password'
                    type="password"
                    variant="outlined"
                    onChange={this.handleInput}
                    value={this.state.password}
                />
                <Button variant="contained"
                        color="primary"
                        onClick={this.handleLogin}>
                    Log in
                </Button>
            </Grid>
        );
    }
}
