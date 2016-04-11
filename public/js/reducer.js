'use strict';

//import { combineReduces } from 'redux';
const Action = require('./action.js');


function reducer (state = [], action) {
    switch (action.type) {
        case Action.types.SetUser: {
            return Object.assign({}, state, {user: action.user});
        }
        // case Action.types.SetUserInfo: {
        //     state.user.name = action.user.name;
        //     state.user.avatar = action.user.avatar;
        //     return Object.assign({}, state);
        // }
        // case Action.types.SetLogin: {
        //     state.isLogin = action.status;
        //     return Object.assign({}, state);
        // }
        case Action.types.GroupMessage: {

         /*   return Object.assign({}, state,{
                message: action.message
            });
*/
            /*return Object.assign({},state,{
                message: [ ...state,

                    {group: action.group,
                        message: action.message}

                ]
            });*/

            /*return [
                ...state,{
                message: [
                    ...state,{
                    group: action.group,
                    message: action.message
                }]}
            ]*/
            return Object.assign({},state,{
                message: [
                    {
                        group: action.group,
                        message: action.message
                    }
                ]
            });

           /* {
                message: [{},{},];
            }*/


        }
        default: {
            return state;
        }
    }
}

//let reducers = combineReduces({ reducer });

module.exports = reducer;