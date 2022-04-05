import { makeAutoObservable } from 'mobx'

class Store {
    profile = {}
    token = ''

    constructor() {
        makeAutoObservable(this)
    }

    setProfile(profile) {
        this.profile = profile
    }

    setToken(token) {
        this.token = token
    }
}

export default new Store()