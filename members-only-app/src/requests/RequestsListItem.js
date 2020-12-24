import React from 'react';

export const RequestsListItem = ({ request, onAccept, onReject }) => (
    <div>
        <h3>{request.userName}</h3>
        //wrap event handlers with arrow functions so that they can accept params and not
        //being called every time the component renders
        <button onClick={() => onAccept(request.id)}>Accept</button>
        <button onClick={() => onReject(request.id)}>Reject</button>
    </div>
);
