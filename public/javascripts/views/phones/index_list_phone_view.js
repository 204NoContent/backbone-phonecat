PhonesIndexListPhoneView = Backbone.View.extend({

    events: {
        'click a': 'navigate'
    },

    initialize: function () {
        this.listenTo(this.model, 'remove', this.remove);
        this.render();
    },

    render: function () {
        this.$el.html(JST['phones/index_list_phone'](this.model));
    },

    navigate: function (event) {
        event.preventDefault();
        App.navigate(event.currentTarget.pathname, { trigger: true });
    }
});
