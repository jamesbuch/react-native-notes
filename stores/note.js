import EncryptedStorage from 'react-native-encrypted-storage'

import React from 'react'
import { observable, action, computed, makeObservable, makeAutoObservable } from 'mobx'

class NoteStore {
    notes = []

    constructor() {
        makeAutoObservable(this)
    }

    addNote(item) {
        this.notes.push(item)
    }

    get count() {
        console.log("Computing...")
        return this.notes.length
    }
}

// Create a React Context with the counter store instance
export const noteStore = new NoteStore()
