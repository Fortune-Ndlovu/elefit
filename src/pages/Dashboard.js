import React, {useState, useEffect} from "react";
import ActivityForm from "../components/ActivityForm";
import ActivityList from "../components/ActivityList";
import {
    createActivity,
    getActivities,
    updateActivity,
    deleteActivity
} from "../Services/activityService";

const Dashboard = () => {
    const [activities, setActivities] = useState([]);
    const [currentActivity, setCurrentActivity] = useState(null);

    useEffect(() => {
        setActivities(getActivities);
    }, []);

    const handleAddOrUpdateActivity = (activity) => {
        if (currentActivity) {
            // Update the activity if we are editing
            updateActivity(currentActivity.id, activity);
        } else {
            // Create a new activity if we are not adding
            createActivity(activity);
        }
        setActivities(getActivities()); // Refresh the activity list
        setCurrentActivity(null); // Clear the form for new entry
    };

    const handleEditActivity = (activity) => {
        setCurrentActivity(activity); // Load selected activity into form
    };

    const handleDeleteActivity = (id) => {
        deleteActivity(id);
        setActivities(getActivities()); // Refresh the activity list
    };

    return (
        <div>
            <h2>Welcome to Elefit 🐘</h2>
            <div>
                <ActivityForm
                    onSubmit={handleAddOrUpdateActivity}
                    initialData={currentActivity || {}} // Pass data for editing
                    isEditing={!!currentActivity} // Boolean flag to toggle form mode
                />
            </div>
            <div>
                <ActivityList
                    activities={activities}
                    onEdit={handleEditActivity}
                    onDelete={handleDeleteActivity}
                />
            </div>
        </div>
    )
};

export default Dashboard;