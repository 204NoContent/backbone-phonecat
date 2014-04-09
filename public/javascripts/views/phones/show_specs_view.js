PhonesShowSpecsView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(JST['phones/show_specs'](this.model));
    }
});
