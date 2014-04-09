PhonesShowView = Backbone.View.extend({

    initialize: function () {
        this.model.fetch();

        this.listenTo(this.model, 'sync', this.render);
    },

    render: function () {
        this.$el.html(JST['phones/show'](this.model));

        new PhonesShowImageView({
            el: this.$('.phone-images'),
            model: this.model
        });

        new PhonesShowImagesListView({
            el: this.$('ul.phone-thumbs'),
            model: this.model
        });

        new PhonesShowSpecsView({
            el: this.$('ul.specs'),
            model: this.model
        });
    }
});
