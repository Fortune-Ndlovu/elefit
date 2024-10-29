import React, { useEffect, useState } from "react";

const ActivityForm = ({onSubmit, initialData = {}, isEditing }) => {
    const [name, setName] = useState(initialData.name || '');
    const [duration, setDuration] = useState(initialData.duration || '');
    const [type, setType] = useState(initialData.type || '');


    // Populate form fields when initialData changes (i.e., during editing)
    useEffect(() => {
        setName(initialData.name || '');
        setDuration(initialData.duration || '');
        setType(initialData.type || '');
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, duration, type});
        setName('');
        setDuration('');
        setType('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Activity Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Duration (minutes)"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Type (e.g. walk, yoga)"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
            />
            <button type="submit">{isEditing ? 'Update Activity' : 'Save Activity'}</button>
        </form>
    );
};

export default ActivityForm;