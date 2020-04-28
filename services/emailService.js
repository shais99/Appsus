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
    getStarredAmount
}
import utilService from './utilService.js'
import storageService from './storageService.js'
var gCurrUser = 'Abir Nadav'

const KEYEmails = 'emails1'
const gEmails = getEmailsFrom()

function getEmailsFrom() {
    let emails = storageService.loadFromStorage(KEYEmails)
    if (!emails) return []
    return emails
}
createEmail('Abir', 'Someone@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'sent', 'icecream')
createEmail('Shai', 'Someone@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'pepers')
createEmail('abi34rw', 'Someone@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM AWEOSOME')
createEmail('Shai', 'Someone@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM AWEOSOME')
createEmail('abi34rw', 'Someone@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM SOME')
createEmail('Shai', 'Someone@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM AWEOSOME')
createEmail('abi34rw', 'Someone@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM AWEOSOME')
createEmail('Shai', 'Someone@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM AWE')
createEmail('abi34rw', 'Someone@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM AWEOSOME')
createEmail('Shai', 'Someone@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM AWEOSOME')
createEmail('abi34rw', 'Someone@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM AWEOSOME')
createEmail('abi34rw', 'gogo', 'gogogo', true, 'sent', 'IM AWEOSOME')
createEmail('Abir', 'Someone@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'sent', 'icecream')
createEmail('Shai', 'sha423i22w', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'pepers')
createEmail('abi34rw', 'sha423i22w', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM AWEOSOME')
createEmail('Shai', 'whoscares@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM AWEOSOME')
createEmail('abi34rw', 'whoscares@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM SOME')
createEmail('Shai', 'whoscares@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM AWEOSOME')
createEmail('abi34rw', 'whoscares@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM AWEOSOME')
createEmail('Shai', 'whoscares@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM AWE')
createEmail('abi34rw', 'whoscares@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM AWEOSOME')
createEmail('Shai', 'Someone@walla.com', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM AWEOSOME')
createEmail('test', 'test', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto excepturi veniam eius deserunt? Architecto, amet laboriosam! Magni at earum debitis odit libero nemo natus cu', false, 'inbox', 'IM AWEOSOME')
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

function getStarredAmount() {
    let num = 0
    gEmails.forEach(email => {
        if (email.isStarred) num++
    })
    return num
}

function query(filterBy, box) {
    sortEmails()
    let filteredEmails = filterByBox(box)
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

function filterByBox(filterBy) {
    if (filterBy === 'star') return gEmails.filter(email => email.isStarred)
    const emails = gEmails.filter(email => {
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

function sortEmails() {
    gEmails.sort(function(a, b) { return a.isRead - b.isRead });
}

//Togglers
function toggleStarEmail(email) {
    // if (email.isStarred === true) return email.isStarred = false
    // email.isStarred = true
    email.isStarred = !email.isStarred
}



function toggleIsRead(email) {
    if (email.isRead) return email.isRead = false
    return email.isRead = true
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