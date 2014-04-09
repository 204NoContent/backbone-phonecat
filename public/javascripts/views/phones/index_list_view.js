PhonesIndexListView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html('');
        this.collection.each(this.renderPhone, this);
    },

    renderPhone: function (phone) {
        this.$el.append(new PhonesIndexListPhoneView({
            tagName: 'li',
            model: phone
        }).el);
    }
});
