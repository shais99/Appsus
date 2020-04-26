export default {
    getEmails,
    remove,
}

import utilService from './utilService.js'


const gEmails = []
createEmail('abi34rw', 'sha423i22w', 'abi23434rw', utilService.getTime())
createEmail('abi34rw', 'sha423i22w', 'abi23434rw', utilService.getTime())
createEmail('abi34rw', 'sha423i22w', 'abi23434rw', utilService.getTime())
createEmail('abi34rw', 'sha423i22w', 'abi23434rw', utilService.getTime())

function createEmail(name, to, body, date) {
    var email = {
        id: utilService.makeId(),
        name: name,
        toEmail: to,
        body: body,
        date: date,
        isSent: null,
        isRead: false,
        box: 'inbox'

    }
    gEmails.push(email)
}


function getEmails() {
    return gEmails
}

function remove(emailId) {
    const emailIdx = _getIdxById(emailId)
    gEmails.splice(emailIdx, 1)

    storageService.store(STORAGE_KEY, gEmails)
    return Promise.resolve();
}

function getById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email);
}

function _getIdxById(emailId) {
    return gEmails.findIndex(email => email.id === emailId)
}