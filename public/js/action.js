/**
 * Created by m on 16-4-5.
 */

module.exports = {
    types : {
        SetUser: 'SetUser',
        Message: 'Message',
        SetLogin: 'SetLogin',
        SetUserInfo: 'SetUserInfo',
        PersonalMessage: 'PersonalMessage',
        GroupMessage: 'GroupMessage'
    },

    setUser: function (user) {
        return {
            type: this.types.SetUser,
            user: user
        };
    },
    
    setUserInfo: function (user) {
        return {
            type: this.type.SetUserInfo,
            user: user
        }
    },

    groupMessage: function (group, message) {
        return {
            type: this.types.GroupMessage,
            group: group,
            message: message
        }
    },

    personalMessage: function (id, message) {
        return {
            type: this.types.PersonalMessage,
            id: id,
            message: message
        }
    },
    
    setLogin: function (status) {
        return {
            type: this.type.SetLogin,
            status: status
        }
    }
};