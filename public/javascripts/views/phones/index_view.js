PhonesIndexView = Backbone.View.extend({

    initialize: function () {
        this.filter = new Filter();
        this.collection = new PhonesCollection();

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

        this.collection.fetch();
    },

    render: function () {
        this.$el.html(JST['phones/index']());
    }
});
