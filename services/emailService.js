export default {
    getEmails,
    removeEmail,
    query,
    filterByBox,
    toggleStarEmail,
    filterByStar,
    createEmail,
    getUnreadAmount,
    getCurrUser,
    toggleIsRead
}

import utilService from './utilService.js'

var gCurrUser = 'Abir Nadav'
const gEmails = []
createEmail('Abir', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'sent', 'icecream')
createEmail('Shai', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'pepers')
createEmail('abi34rw', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM AWEOSOME')
createEmail('Shai', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM AWEOSOME')
createEmail('abi34rw', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM SOME')
createEmail('Shai', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM AWEOSOME')
createEmail('abi34rw', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM AWEOSOME')
createEmail('Shai', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM AWE')
createEmail('abi34rw', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM AWEOSOME')
createEmail('Shai', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM AWEOSOME')
createEmail('abi34rw', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM AWEOSOME')
createEmail('abi34rw', 'gogo', 'gogogo', true, 'sent', 'IM AWEOSOME')
createEmail('Abir', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'sent', 'icecream')
createEmail('Shai', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'pepers')
createEmail('abi34rw', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM AWEOSOME')
createEmail('Shai', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM AWEOSOME')
createEmail('abi34rw', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM SOME')
createEmail('Shai', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM AWEOSOME')
createEmail('abi34rw', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM AWEOSOME')
createEmail('Shai', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM AWE')
createEmail('abi34rw', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM AWEOSOME')
createEmail('Shai', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM AWEOSOME')
createEmail('abi34rw', 'sha423i22w', 'abi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rwabi23434rw', false, 'inbox', 'IM AWEOSOME')
createEmail('abi34rw', 'gogo', 'gogogo', true, 'sent', 'IM AWEOSOME')

function createEmail(name, to, body, isFocus, box, subject) {
    var email = {
        id: utilService.makeId(),
        name,
        toEmail: to,
        body,
        subject,
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
var currFilter = 'inbox'

function query(filterBy) {
    console.log("currFilter", currFilter)
    sortEmails()

    if (filterBy) {
        const emails = gEmails.filter(email => {
            return (email.name.includes(filterBy) && email.box === currFilter || email.body.includes(filterBy) && email.box === currFilter || email.subject.includes(filterBy) && email.box === currFilter)
        })
        return emails
    }

    return filterByBox(currFilter)
}

function toggleStarEmail(email) {
    if (email.isStarred === true) return email.isStarred = false
    email.isStarred = true
}

function sortEmails() {
    gEmails.sort(function(a, b) { return a.isRead - b.isRead });
}


function toggleIsRead(email) {
    if (email.isRead) return email.isRead = false
    return email.isRead = true
}

function filterByBox(filterBy) {
    sortEmails()
    currFilter = filterBy
    if (filterBy) {
        const emails = gEmails.filter(email => {
            // if (email.box === filterBy) return true
            return email.box === filterBy
        })
        console.log("filterByBox -> emails", emails)
        return emails
    }

}

function getUnreadAmount() {
    var unReadNum = 0
    gEmails.forEach(mail => {

        if (!mail.isRead && mail.box === 'inbox') unReadNum++
    })
    console.log('unread Number ', unReadNum)
    return unReadNum
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

function getCurrUser() {
    return gCurrUser
}