exports.getRoutes = (server)=>{
    server.route([{
        method:"Get",
        path:'/',
        handler:async(request,h,err)=>{
            return '<h1> this is first route</h1>'
        }
    }])
}