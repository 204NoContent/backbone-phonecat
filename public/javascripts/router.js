Router = Backbone.Router.extend({
    
    routes: {
        '': 'phonesIndex',
    },

    phonesIndex: function () {
        new PhonesIndexView({ el: 'section#main' });
    }
});
