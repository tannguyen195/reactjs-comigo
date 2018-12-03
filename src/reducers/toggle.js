import { handleActions } from 'redux-actions';
import { ActionTypes } from 'constants/index';
import update from 'immutability-helper'
export const initial = {
    visibleProject: false,
    previewImage: null,
    visiblePreview: false,
    visibleRequestCollaborator: false,
    visibleRemoveCollaborator: false,
    collaboratorData: null
}
export default {
    toggle: handleActions({

        // TOGGLE ACTION
        [ActionTypes.TOGGLE_HOME_VIEW]: (state) => update(state, {
            visibleProject: { $set: !state.visibleProject },
        }),
        [ActionTypes.TOGGLE_PREVIEW_IMAGE]: (state, { payload }) =>
            !state.visiblePreview ?
                update(state, {
                    visiblePreview: { $set: !state.visiblePreview },
                    previewImage: !state.visiblePreview ? { $set: payload } : { $set: "" },
                }) :

                update(state, {
                    visiblePreview: { $set: !state.visiblePreview },
                })
        ,
        [ActionTypes.TOGGLE_REQUEST_COLLABORATOR]: (state) => update(state, {
            visibleRequestCollaborator: { $set: !state.visibleRequestCollaborator },
        }),
        [ActionTypes.TOGGLE_REMOVE_COLLABORATOR]: (state, { payload }) =>
            update(state, {
                visibleRemoveCollaborator: { $set: !state.visibleRemoveCollaborator },
                collaboratorData: !state.visibleRemoveCollaborator ? { $set: payload } : { $set: null },
            })
        ,
    }, initial),
};

