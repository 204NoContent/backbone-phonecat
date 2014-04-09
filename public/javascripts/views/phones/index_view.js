PhonesIndexView = Backbone.View.extend({

    initialize: function () {
        this.filter = new Filter();
        this.collection = new PhonesCollection([
            {'name': 'Nexus S',
             'snippet': 'Fast just got faster with Nexus S.'},
            {'name': 'Motorola XOOM™ with Wi-Fi',
             'snippet': 'The Next, Next Generation tablet.'},
            {'name': 'MOTOROLA XOOM™',
             'snippet': 'The Next, Next Generation tablet.'}
        ]);

        this.render();

        new PhonesFilterView({
            el: this.$('.filter'),
            model: this.filter,
            collection: this.collection
        });

        new PhonesIndexListView({
            el: this.$('ul.phones'),
            model: this.filter,
            collection: this.collection
        });
    },

    render: function () {
        this.$el.html(JST['phones/index']());
    }
});
