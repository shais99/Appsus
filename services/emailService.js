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

const KEYEmails = 'emailsAbir'
const gEmails = getEmailsFrom()

function getEmailsFrom() {
    let emails = storageService.loadFromStorage(KEYEmails)
    if (!emails) return []
    return emails
}
makeTestEmails()

function makeTestEmails() {
    if (gEmails.length > 0) return;
    createEmail('Nevoi', 'nevo@hmail.com', 'Dafuk ooooo DAFUKONININI', true, 'inbox', 'dafukoni noni', true)
    createEmail('Abir', 'Abir@Susmail.com', 'Hello? is there Anybody out there?', true, 'sent', 'Click twice if your there!', true)
    createEmail('Avigail', 'Djs@dj-company.com', 'You are listening toooo D D Dj Avigailll', true, 'inbox', 'Dj - COME HERE!', true)
    createEmail('Zohar', 'yeshDvarim@nomail.com', 'Yesh dvarim nistarim, lo navin lo NEDAAAA', true, 'inbox', 'Dvarim nistarim')
    createEmail('Corona', 'corona@virus.com', 'Hey', false, 'inbox', '...')
    createEmail('Spam', 'spam@Susmail.com', 'Im a spam', false, 'inbox', 'more spam')
    createEmail('Shai', 'ShaikeMozaike@Susmail.com', 'If a note is noted is note still a note?', true, 'inbox', 'Wondring?', true)
    createEmail('Google', 'hr@google.com', 'We happy to inform you passed our job interview!', false, 'inbox', 'Come Work for us!')
    createEmail('Google', 'hr@google.com', 'Sorry the last email Wasnt for you..', false, 'inbox', 'Sorry we made a mistake')
    createEmail('Abir', 'Abir@Susmail.com', 'React does not React', true, 'sent', 'Help Please!', 'hmm?')
    createEmail('Shai', 'ShaikeMozaike@Susmail.com', 'Instructoorrrrr Nevo', false, 'inbox', 'On set DDDDDJ')
    createEmail('React', 'CodingAcademy@Susmail.com', 'Try to take it easy :)', true, 'inbox', 'Code Review')
    createEmail('Console.log', 'console.log@Chrome.com', 'Man im tired Leave me alone!', true, 'inbox', 'Could you stop Calling me?')
    createEmail('Routing', 'ReactRouting@Susmail.com', 'Sorry I forgot to tell you to use me!', false, 'inbox', 'Change All your code!')
    createEmail('Mark', 'Mark@Facebook.com', 'Im willing to raise your salary just come!', false, 'inbox', 'About the Job offer')
}

function createEmail(name, to, body, isStarred, box, subject, isRead = false) {
    var email = {
        id: utilService.makeId(),
        name,
        toEmail: to,
        body,
        subject,
        date: utilService.getTime(),
        isRead,
        box,
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
    let filteredEmails = filterByBox(box, emails)
    if (sortBy || sortByDate) {
        emails = sortEmails(sortBy, sortByDate)
    }
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
        emails.sort(function(a, b) { return a.timeStamp - b.timeStamp });
    } else if (sortBy) {
        console.log(emails);

        emails.sort(function(a, b) { return a.isRead - b.isRead });
    }
    return emails
}

//Togglers
function toggleStarEmail(email) {
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