import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import { DispatchProps, StateProps } from '../base/props.model';

type Props = StateProps & DispatchProps;

export default class Spinner extends React.Component<Props, any> {
    render() {
        return (
            <div className="spinner-container">
                <Loader
                    type="TailSpin"
                    color="#00BFFF"
                    height={100}
                    width={100}/>
            </div>
        );
    }
}
