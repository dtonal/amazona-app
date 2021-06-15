import React from 'react';
import Loader from 'react-loader-spinner';

export default function LoadingBox() {
    return (
        <div className="row">
            <Loader
                type="ThreeDots"
                color="#00BFFF"
                height={200}
                width={200}
                timeout={3000} //3 secs
            />
        </div>
    )
}
