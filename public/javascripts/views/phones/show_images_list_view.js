PhonesShowImagesListView = Backbone.View.extend({

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html('');
        this.model.photosCollection.each(this.renderImage, this);
    },

    renderImage: function (photo) {
        this.$el.append(new PhonesShowImagesListImageView({
            tagName: 'li',
            model: photo
        }).el);
    }
});
