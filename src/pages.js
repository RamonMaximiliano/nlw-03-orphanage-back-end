module.exports = {
    index(request, response) {
        return response.render('index')
    },
    createOrphanage(request, response) {
        return response.render('create-orphanage')
    },
    hope(request, response) {
        return response.render('hope')
    },
    orphanages(request, response) {
        return response.render('orphanages')
    },
}