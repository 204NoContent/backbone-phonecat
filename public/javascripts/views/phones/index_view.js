PhonesIndexView = Backbone.View.extend({

    initialize: function () {
        this.collection = new PhonesCollection([
            {'name': 'Nexus S',
             'snippet': 'Fast just got faster with Nexus S.'},
            {'name': 'Motorola XOOM™ with Wi-Fi',
             'snippet': 'The Next, Next Generation tablet.'},
            {'name': 'MOTOROLA XOOM™',
             'snippet': 'The Next, Next Generation tablet.'}
        ]);

        this.render();

        new PhonesIndexListView({
            el: this.$('ul.phones'),
            collection: this.collection
        });
    },

    render: function () {
        this.$el.html(JST['phones/index']());
    }
});
