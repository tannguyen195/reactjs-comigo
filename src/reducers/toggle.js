import { handleActions } from 'redux-actions';
import { ActionTypes } from 'constants/index';
import update from 'immutability-helper'
export const initial = {
    visibleProject: false,
    previewImage: null,
    visiblePreview: false,
    visibleRequestCollaborator: false,
    visibleRemoveCollaborator: false,
    visibleEditUpdate: false,
    updateData: null,
    collaboratorData: null,
    commentData: null,
    filterValue: "all"
}
export default {
    toggle: handleActions({

        // TOGGLE ACTION
        [ActionTypes.TOGGLE_HOME_VIEW]: (state, { payload }) => update(state, {
            visibleProject: { $set: !state.visibleProject },
            filterValue: { $set: payload }
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
        [ActionTypes.TOGGLE_EDIT_UPDATE]: (state, { payload }) =>
            update(state, {
                visibleEditUpdate: { $set: !state.visibleEditUpdate },
                updateData: !state.visibleEditUpdate ? { $set: payload } : { $set: null },
            })
        ,

        [ActionTypes.TOGGLE_EDIT_COMMENT]: (state, { payload }) =>
            update(state, {
                visibleEditComment: { $set: !state.visibleEditComment },
                commentData: !state.visibleEditComment ? { $set: payload } : { $set: null },
            })
        ,
        [ActionTypes.EDIT_PROJECT_UPDATE_SUCCESS]: (state, { response }) => {

            return update(state, {
                visibleEditUpdate: { $set: false },

            })
        },
        [ActionTypes.REMOVE_SHARED_USER_SUCCESS]: (state, { response }) => {
            return update(state, {
                visibleRemoveCollaborator: { $set: false },

            })
        },
        [ActionTypes.CREATE_SHARE_LINK_SUCCESS]: (state, { response }) => {
            return update(state, {
                visibleRequestCollaborator: { $set: false },
            })
        },
    }, initial),
};

