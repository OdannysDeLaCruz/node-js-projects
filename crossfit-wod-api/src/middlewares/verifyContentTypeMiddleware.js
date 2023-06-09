const verifyContentTypeJSON = ( req, res, next ) => {
    const allowedContentType = 'application/json'

    if ( req.headers['content-type'] !== allowedContentType ) {
        res.json({
            status: 'Error',
            data: {
                message: `content-type must be ${ allowedContentType }, but we received ${ req.headers['content-type'] }`
            }
        })
    } else {
        next()
    }
}

module.exports = {
    verifyContentTypeJSON
}