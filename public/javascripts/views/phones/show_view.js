PhonesShowView = Backbone.View.extend({

    initialize: function () {
        this.model.fetch();

        this.listenTo(this.model, 'sync', this.render);
    },

    render: function () {
        this.$el.html(JST['phones/show'](this.model));
    }
});
