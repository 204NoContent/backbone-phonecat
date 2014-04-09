PhonesIndexListPhoneView = Backbone.View.extend({

    initialize: function () {
        this.listenTo(this.model, 'remove', this.remove, this);
        this.render();
    },

    render: function () {
        this.$el.html(JST['phones/index_list_phone'](this.model));
    }
});
