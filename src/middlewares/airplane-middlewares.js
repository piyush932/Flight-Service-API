const {StatusCodes} = require('http-status-codes');

const {ErrorResponse} = require('../utils/comman');

function validateCreateRequest(req,res,next){
    ErrorResponse.message = 'Something went wrong while creating airplane';
    ErrorResponse.error = {explanation:'modelNumber not found in incoming request'};
    if(!req.body.modelNumber){
        return res.status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest,
}