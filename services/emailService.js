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
    toggleIsRead,
    getById,
    getStarredAmount
}

import utilService from './utilService.js'

var currFilter = 'inbox'
var gCurrUser = 'Abir Nadav'
const gEmails = []
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

function query(filterBy) {
    sortEmails()

    if (filterBy) {
        const emails = gEmails.filter(email => {
            let name = email.name.toUpperCase()
            let body = email.body.toUpperCase()
            let subject = email.subject.toUpperCase()
            filterBy = filterBy.toUpperCase()
            return (name.includes(filterBy) && email.box === currFilter || body.includes(filterBy) && email.box === currFilter || subject.includes(filterBy) && email.box === currFilter)
        })
        console.log(emails)
        return emails
    }

    return filterByBox(currFilter)
}

function toggleStarEmail(email) {
    // if (email.isStarred === true) return email.isStarred = false
    // email.isStarred = true
    email.isStarred = !email.isStarred
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
            return email.box === filterBy
        })
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