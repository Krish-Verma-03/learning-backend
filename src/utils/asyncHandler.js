//asyncHandler function wraps your asynchronous route handlers in a promise chain, catching any errors and passing them to the next middleware function
const asyncHandler = (requestHandler) => {
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).
        catch((error)=>{
            next(error);
        })
    }
}

export {asyncHandler}