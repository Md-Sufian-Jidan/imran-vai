import * as React from 'react';

interface EmailTemplateProps {
    name: string;
    email: string;
    message: string;
}

export function EmailTemplate(data: EmailTemplateProps) {
    return (
        <div>
            <h1>Welcome, {data.name}!</h1>
            <p>{data.email}</p>
            <p>{data.message}</p>
        </div>
    );
}