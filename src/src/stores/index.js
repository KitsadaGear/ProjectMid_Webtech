import Vue from 'vue'
import Vuex from 'vuex'

import { alert } from './alert.module.js'
import { account } from './account.module.js'


Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        alert,
        account
    }
})