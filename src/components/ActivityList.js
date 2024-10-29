import React from "react";

const ActivityList = ({activities, onEdit, onDelete}) => {
    return (
        <ul>
            {activities.map((activity) => (
                <li key={activity.id}>
                    {activity.name} - {activity.duration} mins ({activity.type})
                    <button onClick={() => onEdit(activity)}>Edit</button>
                    <button onClick={() => onDelete(activity.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};

export default ActivityList;