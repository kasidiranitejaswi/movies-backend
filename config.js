module.exports = {
    port : 4700,
    db : {
        mongo:{
            uri:"mongodb://localhost:27017/moviesdb",
            options : {
                user :'',
                pass : ''
            }
        }
    },
    baseUrl:'http://localhost:'+4700,
}