export default {
    getEmails,
    remove,
    query
}

import utilService from './utilService.js'


const gEmails = []
createEmail('abi34rw', 'sha423i22w', 'abi23434rw', utilService.getTime(), false)
createEmail('abi34rw', 'sha423i22w', 'abi23434rw', utilService.getTime(), false)
createEmail('abi34rw', 'sha423i22w', 'abi23434rw', utilService.getTime(), false)
createEmail('abi34rw', 'sha423i22w', 'abi23434rw', utilService.getTime(), true)

function createEmail(name, to, body, date, isFocus) {
    var email = {
        id: utilService.makeId(),
        name: name,
        toEmail: to,
        body: body,
        date: date,
        isSent: null,
        isRead: false,
        box: 'inbox',
        isSaved: true,
        isFocus: isFocus,

    }
    gEmails.push(email)
}

function query(filterBy) {
    console.log("query -> filterBy on service", filterBy)
    var emails = gEmails;
    if (filterBy && filterBy !== '') {
        var text = filterBy
        emails = gEmails.filter(email => email.name.includes(text))
    }
    return emails
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