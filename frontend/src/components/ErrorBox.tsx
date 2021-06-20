import * as React from 'react';

interface Error {
    variant: string,
    children: React.ReactNode
};

export default function ErrorBox(props: Error) {
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}
        </div>
    )
};
