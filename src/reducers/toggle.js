import { handleActions } from 'redux-actions';
import { ActionTypes } from 'constants/index';
import update from 'immutability-helper'
export const initial = {
    visibleProject: false,
    previewImage: null,
    visiblePreview: false,
    visibleCollaborator: false,
    visibleRemoveCollaborator: false,
    visibleEditUpdate: false,
    visiblePostJob: false,
    visibleJobDetail: false,
    updateData: null,
    collaboratorData: null,
    commentData: null,
    filterValue: "all",
    visibleForgot: false,
    jobDetail: null,
    visibleEditJob: false,
    visibleRemoveJob: false,
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
        [ActionTypes.TOGGLE_COLLABORATOR]: (state) => update(state, {
            visibleCollaborator: { $set: !state.visibleCollaborator },
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
        [ActionTypes.TOGGLE_POST_JOB]: (state, { response }) => {
            return update(state, {
                visiblePostJob: { $set: !state.visiblePostJob },
            })
        },
        [ActionTypes.TOGGLE_EDIT_JOB]: (state, { payload }) => {
         
            return update(state, {
                jobDetail: !state.visibleEditJob ? { $set: payload } : { $set: null },
                visibleEditJob: { $set: !state.visibleEditJob },
            })
        },
        [ActionTypes.TOGGLE_REMOVE_JOB]: (state, { payload }) => {

            return update(state, {
                visibleRemoveJob: { $set: !state.visibleRemoveJob },

            })
        },
        [ActionTypes.TOGGLE_FORGOT_MODAL]: (state, { response }) => {
            return update(state, {
                visibleForgot: { $set: !state.visibleForgot },
            })
        },
        [ActionTypes.TOGGLE_JOB_DETAIL]: (state, { payload }) =>
            !state.visibleJobDetail ?
                update(state, {
                    visibleJobDetail: { $set: !state.visibleJobDetail },
                    jobDetail: !state.visibleJobDetail ? { $set: payload } : { $set: "" },
                }) :

                update(state, {
                    visibleJobDetail: { $set: !state.visibleJobDetail },
                })
        ,
        [ActionTypes.DELETE_JOB_SUCCESS]: (state, { response }) => {

            return update(state, {
                visibleRemoveJob: { $set: false },
                visibleEditJob: { $set: false },
            })
        },
    }, initial),
};

