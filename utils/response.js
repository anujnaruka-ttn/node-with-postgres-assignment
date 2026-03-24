
const success = (
    response,
    dataBody=null,
    successMessage,
    statusCode = 200
) => response.status(statusCode).json({
        success: true,
        data: dataBody,
        message: successMessage
    }
);

const error = (
    response,
    errorMessage,
    statusCode
) => response.status(statusCode).json({
        success: false,
        error: errorMessage
    }
)

const serverError = (
    response,
    errorMessage,
    statusCode=500
) => error(response,errorMessage,statusCode);

const validationError = (
    response,
    errorMessage='Error in validating fields required not filled.'
) => error(
    response,
    errorMessage,
    422
);


module.exports = {
    success,
    error,
    serverError,
    validationError
}