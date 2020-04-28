import storageService from './storageService.js'
import utilService from './utilService.js'

const STORAGE_KEY = 'reviews'
var gReviews = storageService.loadFromStorage(STORAGE_KEY)
if (!gReviews) gReviews = []

export default {
    addReview,
    query,
    remove
}

function remove(reviewId) {
    const reviewIdx = _getIdxById(reviewId)
    gReviews.splice(reviewIdx, 1)

    storageService.saveToStorage(STORAGE_KEY, gReviews)
    return Promise.resolve();
}

function query(bookId) {
    var reviews = gReviews;
    reviews = gReviews.filter(review => {
        return review.bookId === bookId
    })

    return Promise.resolve(reviews);
}

function addReview({ bookId, fullName, stars, readDate, reviewTxt }) {

    const review = _createReview(bookId, fullName, stars, readDate, reviewTxt)

    gReviews.unshift(review)
    storageService.saveToStorage(STORAGE_KEY, gReviews)
}

function _createReview(bookId, fullName, stars, readDate, reviewTxt) {
    return {
        id: +utilService.makeId(),
        bookId,
        fullName,
        stars,
        readDate,
        reviewTxt
    }
}

function _getIdxById(reviewId) {
    return gReviews.findIndex(review => review.id === reviewId)
}
