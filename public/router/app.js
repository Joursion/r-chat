
// use routers

module.exports = function (app, router, socket) {
    router.post('/login', function *(){
        var data = this.request.body;
        console.log(data);  
        this.redirect('back');
        this.status = 200;
        this.body = {dsa:"das",ds:"das"};
    });
    
    router.post('/message',function *() {
        var data = this.request.body;
        console.log(data);
        this.redirect('back');
        this.status = 200;
    })

    app
        .use(router.routes())
        .use(router.allowedMethods());
};

