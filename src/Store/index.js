import { makeAutoObservable } from 'mobx'

class Store {
    profile = {}
    token = ''
    errMsg = ''
    constructor() {
        makeAutoObservable(this)
    }

    setProfile(profile) {
        this.profile = profile
    }

    setToken(token) {
        this.token = token
    }

    setErrMsg(errMsg) {
        this.errMsg = errMsg
    }

}

export default new Store()