Router = Backbone.Router.extend({
    
    routes: {
        '': 'phonesIndex',
        'phones/:id': 'phonesShow'
    },

    phonesIndex: function () {
        new PhonesIndexView({ el: 'section#main' });
    },

    phonesShow: function (id) {
        new PhonesShowView({
            el: 'section#main',
            model: new Phone({ id: id })
        });
    }
});
