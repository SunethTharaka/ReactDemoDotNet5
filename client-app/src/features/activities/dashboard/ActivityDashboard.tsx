import { observer } from "mobx-react-lite";
import React from "react";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import ActivitiDetails from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

export default observer(function ActivitiryDashboard() {

    const { activityStore } = useStore();
    const { selectedActivity, editMode } = activityStore;

    return (
        < Grid >
            <Grid.Column width='10'>
                <ActivityList />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivitiDetails />}
                {editMode &&
                    <ActivityForm />}
            </Grid.Column>
        </Grid >
    )
}
)