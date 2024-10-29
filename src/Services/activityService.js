let activities = [];

// Create activity object with a unique identifier and push it into the activities array
export const createActivity = (activity) => {
    activity.id = new Date().getTime(); // Unique ID based on timestamp

    activities.push(activity);
    return activity;
};

// Get the list of activities from array
export const getActivities = () => activities;

// Update the activity object by mapping over the activity if it's id is equal to the id in question and update it with the new activity object
export const updateActivity = (id, updatedActivity) => {
    activities = activities.map(activity =>
        activity.id === id ? {...activity, ...updatedActivity} : activity
    );

    return updatedActivity;
};

// Delete the activity object by filtering over the activities and only keeping the activities that have an id not equal to the id in question
export const deleteActivity = (id) => {
    activities = activities.filter(activity => activity.id !== id);
};