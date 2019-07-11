import { handleActions } from 'redux-actions';
import { ActionTypes, STATUS, renderMessage } from 'constants/index';
import update from 'immutability-helper'
import _ from 'lodash'
export const initial = {
    status: STATUS.IDLE,

    message: "",
    searchResult: null,
    feed: null,
    searchSkillResult: null
}
export default {
    search: handleActions({


        [ActionTypes.SEARCH]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),

        [ActionTypes.SEARCH_SUCCESS]: (state, { response }) => {

            if (response.type === "search")
                return update(state, {
                    status: { $set: STATUS.SUCCESS },

                    searchResult: { $set: response.data },
                })
            return update(state, {
                status: { $set: STATUS.SUCCESS },

                feed: { $set: response.data },
            })
        },
        [ActionTypes.SEARCH_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },

            })
        },


        [ActionTypes.SEARCH_SKILL]: (state) => update(state, {
            status: { $set: STATUS.RUNNING },
        }),

        [ActionTypes.SEARCH_SKILL_SUCCESS]: (state, { response }) => {
            return update(state, {
                status: { $set: STATUS.SUCCESS },

                searchSkillResult: { $set: response.data },
            })
        },
        [ActionTypes.SEARCH_SKILL_ERROR]: (state, { error }) => {
            return update(state, {
                status: { $set: STATUS.ERROR },

            })
        },
        [ActionTypes.POST_COMMENT_SUCCESS]: (state, { response }) => {
            return update(state, {
                feed: {
                    [state.feed.findIndex((e) => e._id === response.updateID)]:
                    {
                        totalComments: {
                            $set: state.feed[state.feed.findIndex((e) => e._id === response.updateID)].totalComments + 1
                        }
                    }
                }
            })

        },
        [ActionTypes.GET_COMMENT_SUCCESS]: (state, { response }) => {
            
            return {
                ...state,
                feed: state.feed.map((item, index) => {
                    // Replace the item at index 2
                    if (index === state.feed.findIndex((e) => e._id === response.updateID)) {
                        return { ...item, allComments: response.data };
                    }
                    // Leave every other item unchanged
                    return item;
                })
            }
        }
    }, initial),
};

