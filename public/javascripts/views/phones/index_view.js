PhonesIndexView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(JST['phones/index']());
    }
});
