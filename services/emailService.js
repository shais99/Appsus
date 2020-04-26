export default {
    getEmails,
}




const gEmails = []

createEmail('abir', 'shai')
createEmail('abirw', 'shaiw')
createEmail('abi34rw', 'sha423iw')
createEmail('abi34rw', 'sha423i22w')

function createEmail(name, to) {
    var email = {
        name: name,
        toEmail: to
    }
    gEmails.push(email)
}


function getEmails() {
    return gEmails
}