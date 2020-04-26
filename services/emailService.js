export default {
    getEmails,
    removeEmail,
    query,
    filterByBox,
    toggleStarEmail,
    filterByStar,
    createEmail
}

import utilService from './utilService.js'


const gEmails = []
createEmail('Abir', 'sha423i22w', 'abi23434rw', false, 'sent')
createEmail('Shai', 'sha423i22w', 'abi23434rw', false, 'inbox')
createEmail('abi34rw', 'sha423i22w', 'abi23434rw', false, 'inbox')
createEmail('abi34rw', 'gogo', 'gogogo', true, 'sent')

function createEmail(name, to, body, isFocus, box) {
    var email = {
        id: utilService.makeId(),
        name,
        toEmail: to,
        body,
        date: utilService.getTime(),
        isSent: null,
        isRead: false,
        box,
        isSaved: true,
        isFocus,
        isStarred: false,
    }
    gEmails.unshift(email)
}

function query(filterBy) {
    console.log("query -> filterBy on service", filterBy)
    if (filterBy) {
        const emails = gEmails.filter(email => {
            console.log('email body', email.body)
            return (email.name.includes(filterBy) || email.body.includes(filterBy))
        })
        return emails
    }
    return gEmails
}

function toggleStarEmail(email) {
    if (email.isStarred === true) return email.isStarred = false
    email.isStarred = true
}

function filterByBox(filterBy) {
    // debugger
    if (filterBy) {
        const emails = gEmails.filter(email => {
            // if (email.box === filterBy) return true
            return email.box === filterBy

        })
        console.log("filterByBox -> emails", emails)
        return emails
    }

}

function filterByStar() {
    const emails = gEmails.filter(email => {
        console.log('email body', email.body)
        if (email.isStarred) return true

    })
    return emails
}

function getEmails() {
    return gEmails
}

function removeEmail(emailId) {
    const emailIdx = _getIdxById(emailId)
    gEmails.splice(emailIdx, 1)

    return Promise.resolve();
}

function getById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return Promise.resolve(email);
}

function _getIdxById(emailId) {
    return gEmails.findIndex(email => email.id === emailId)
}