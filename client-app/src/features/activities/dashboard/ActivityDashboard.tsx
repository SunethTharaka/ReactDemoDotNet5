import React from "react";
import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/layouts/models/activities";
import ActivitiDetails from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectedActivity: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean

}

export default function ActivitiryDashboard({ activities, selectedActivity, selectActivity, cancelSelectedActivity,
    editMode, openForm, closeForm, createOrEdit,
    deleteActivity, submitting: submitting }: Props) {
    return (
        < Grid >
            <Grid.Column width='10'>
                <ActivityList activities={activities}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                    submitting={submitting} />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivitiDetails
                        activity={selectedActivity}
                        cancelSelectedActivity={cancelSelectedActivity}
                        openForm={openForm} />}
                {editMode &&
                    <ActivityForm
                        closeForm={closeForm}
                        activity={selectedActivity}
                        createOrEdit={createOrEdit}
                        sumbitting={submitting} />}
            </Grid.Column>
        </Grid >
    )
}