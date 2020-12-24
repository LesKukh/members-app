import React from 'react';
//ListItemComponent is passed as a prop which is set to a value in the
//GroupListPage component
export const GroupsList = ({ isLoading, groups, ListItemComponent }) =>
    isLoading
        ? <p>Loading...</p>
        : groups.map(group => (
            <ListItemComponent key={group._id} group={group} />
        ));
