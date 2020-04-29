export default {
    removeEmail,
    query,
    filterByBox,
    toggleStarEmail,
    filterByStar,
    createEmail,
    getUnreadAmount,
    getCurrUser,
    toggleIsRead,
    getById,
    getStarredAmount,
    saveEmailsToStorage
}
import utilService from './utilService.js'
import storageService from './storageService.js'
var gCurrUser = 'Abir Nadav'

const KEYEmails = 'emails'
const gEmails = getEmailsFrom()

function getEmailsFrom() {
    let emails = storageService.loadFromStorage(KEYEmails)
    if (!emails) return []
    return emails
}
makeTestEmails()

function makeTestEmails() {

    if (gEmails.length > 0) return;
    createEmail('Abir', 'Someone@walla.com', 'This is the Emails Body', false, 'sent', 'icecream')
    createEmail('Shai', 'Someone@walla.com', 'This is the Emails Body', false, 'inbox', 'pepers')
    createEmail('abi34rw', 'Someone@walla.com', 'This is the Emails Body', false, 'inbox', 'IM This is the emails Subject')
    createEmail('Shai', 'Someone@walla.com', 'This is the Emails Body', false, 'inbox', 'IM This is the emails Subject', 4)
    createEmail('abi34rw', 'Someone@walla.com', 'This is the Emails Body', false, 'inbox', 'IM SOME')
    createEmail('Shai', 'Someone@walla.com', 'This is the Emails Body', true, 'inbox', 'IM This is the emails Subject')
    createEmail('abi34rw', 'Someone@walla.com', 'This is the Emails Body', false, 'inbox', 'IM This is the emails Subject')
    createEmail('Shai', 'Someone@walla.com', 'This is the Emails Body', false, 'inbox', 'IM AWE')
    createEmail('Chips', 'Someone@walla.com', 'This is the Emails Body', false, 'inbox', 'IM This is the emails Subject', 6)
    createEmail('pizza', 'Someone@walla.com', 'This is the Emails Body', true, 'inbox', 'IM This is the emails Subject')
    createEmail('abi34rw', 'Someone@walla.com', 'This is the Emails Body', true, 'inbox', 'IM This is the emails Subject')
    createEmail('another email', 'gogo', 'gogogo', true, 'sent', 'IM This is the emails Subject')
    createEmail('Abir', 'Someone@walla.com', 'This is the Emails Body', false, 'sent', 'icecream', 2)
    createEmail('Shai', 'sha423i22w', 'This is the Emails Body', false, 'inbox', 'pepers')
    createEmail('wow', 'sha423i22w', 'This is the Emails Body', false, 'inbox', 'IM This is the emails Subject')
    createEmail('Shai', 'whoscares@walla.com', 'This is the Emails Body', false, 'inbox', 'IM This is the emails Subject')
    createEmail('cool5', 'whoscares@walla.com', 'This is the Emails Body', false, 'inbox', 'IM SOME', 5)
    createEmail('Shai1', 'whoscares@walla.com', 'This is the Emails Body', false, 'inbox', 'IM This is the emails Subject', 1)
    createEmail('abi34rw2', 'whoscares@walla.com', 'This is the Emails Body', false, 'inbox', 'IM This is the emails Subject', 2)
    createEmail('Shai7', 'whoscares@walla.com', 'This is the Emails Body', false, 'inbox', 'IM AWE', 7)
    createEmail('abi34rw3', 'whoscares@walla.com', 'This is the Emails Body', false, 'inbox', 'IM This is the emails Subject', 3)
    createEmail('Shai0', 'Someone@walla.com', 'This is the Emails Body', false, 'inbox', 'IM This is the emails Subject', 9)
    createEmail('test1', 'test', 'This is the Emails Body', false, 'inbox', 'IM This is the emails Subject', 1)
    createEmail('abi34rw1', 'gogo', 'gogogo', true, 'sent', 'IM This is the emails Subject', 1)
}

function createEmail(name, to, body, isStarred, box, subject, time) {
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
        isStarred,
        timeStamp: Date.now()
    }
    gEmails.unshift(email)
    storageService.saveToStorage(KEYEmails, gEmails)
}

function getStarredAmount() {
    let num = 0
    gEmails.forEach(email => {
        if (email.isStarred) num++
    })
    return num
}

function query(filterBy, box, sortBy = false, sortByDate = false) {
    let emails = gEmails.slice()
    if (sortBy || sortByDate) {
        emails = sortEmails(sortBy, sortByDate)
    }
    let filteredEmails = filterByBox(box, emails)
    if (filterBy) {
        const emails = filteredEmails.filter(email => {
            let name = email.name.toUpperCase()
            let body = email.body.toUpperCase()
            let subject = email.subject.toUpperCase()
            let filterToUpper = filterBy.toUpperCase()
            return (name.includes(filterToUpper) || body.includes(filterToUpper) || subject.includes(filterToUpper))
        })
        return emails
    }
    return filteredEmails
}

function filterByBox(filterBy, emailsToFilter) {
    if (filterBy === 'star') return emailsToFilter.filter(email => email.isStarred)
    const emails = emailsToFilter.filter(email => {
        return email.box === filterBy
    })
    return emails
}

function filterByStar() {
    const emails = gEmails.filter(email => {
        if (email.isStarred) return true

    })
    return emails
}


function sortEmails(sortBy, sortByDate) {
    let emails = gEmails.slice()
    if (sortByDate) {
        console.log('sorted by date')
        emails.sort(function(a, b) { return a.timeStamp - b.timeStamp });
    } else if (sortBy) {
        emails.sort(function(a, b) { return a.isRead - b.isRead });
    }
    return emails
}

//Togglers
function toggleStarEmail(email) {
    // if (email.isStarred === true) return email.isStarred = false
    // email.isStarred = true
    email.isStarred = !email.isStarred
    storageService.saveToStorage(KEYEmails, gEmails)
}

function saveEmailsToStorage() {
    storageService.saveToStorage(KEYEmails, gEmails)
}

function toggleIsRead(email) {
    if (email.isRead) {
        email.isRead = false
        storageService.saveToStorage(KEYEmails, gEmails)
        return
    }
    email.isRead = true
    storageService.saveToStorage(KEYEmails, gEmails)
    return

}

function getUnreadAmount() {
    var unReadNum = 0
    gEmails.forEach(mail => {

        if (!mail.isRead && mail.box === 'inbox') unReadNum++
    })
    return unReadNum
}

function removeEmail(emailId) {
    const emailIdx = _getIdxById(emailId)
    gEmails.splice(emailIdx, 1)
    storageService.saveToStorage(KEYEmails, gEmails)
    return Promise.resolve();
}

function getById(emailId) {
    const email = gEmails.find(email => email.id === emailId)
    return email;
}

function _getIdxById(emailId) {
    return gEmails.findIndex(email => email.id === emailId)

}

function getCurrUser() {
    return gCurrUser
}