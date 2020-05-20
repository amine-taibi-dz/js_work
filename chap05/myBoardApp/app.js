require([
    'libs/text!header.html',
    // Example of a shim plugin use
    'libs/text!home.html',
    'libs/text!footer.html'],
    function (headerTpl, homeTpl, footerTpl) {
        Parse.initialize('myApp123', 'jsApp123');
        Parse.serverURL = 'http://localhost:1337/parse';


        var ApplicationRouter = Backbone.Router.extend({
            routes: {
                '': 'home',
                '*actions': 'home'
            },
            initialize: function () {
                this.headerView = new HeaderView();
                this.headerView.render();
                this.footerView = new FooterView();
                this.footerView.render();
            },
            home: function () {
                this.homeView = new HomeView();
                this.homeView.render();
            }
        });

        HeaderView = Backbone.View.extend({
            el: '#header',
            templateFileName: 'header.html',
            template: headerTpl,
            initialize: function () {
            },
            render: function () {
                console.log(this.template);
                $(this.el).html(_.template(this.template));
            }
        });

        FooterView = Backbone.View.extend({
            el: '#footer',
            template: footerTpl,
            render: function () {
                this.$el.html(_.template(this.template));
            }
        });
        Message = Parse.Object.extend({
            className: 'MessageBoard'
        });
        MessageBoard = Parse.Collection.extend({
            model: Message
        });
        HomeView = Backbone.View.extend({
            el: '#content',
            template: homeTpl,
            events: {
                'click #send': 'saveMessage'
            },
            saveMessage: function () {
                var newMessageForm = $('#new-message');
                var username = newMessageForm.find('[name="username"]').val();
                var message = newMessageForm.find('[name="message"]').val();
                this.collection.add({
                    'username': username,
                    'message': message
                });
            },
            initialize: function () {
                this.collection = new MessageBoard();

                this.collection.bind('all', this.render, this);
                this.collection.fetch();
                this.collection.on('add', function (message) {
                    message.save(null, {
                        success: function (message) {
                            console.log('saved ' + message);
                        },
                        error: function (message) {
                            console.log('error');
                        }
                    })
                    console.log('saved' + message);
                })
            },
            render: function () {
                //$(this.el).html(_.template(this.template));
                $(this.el).html(_.template(this.template)(this.collection));
            }
        });

        app = new ApplicationRouter();
        Backbone.history.start();

    });