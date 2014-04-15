PhonesShowImageView = Backbone.View.extend({

    initialize: function () {
        this.listenTo(this.model.photosCollection, 'imageSelected', this.setMainImage);
        this.listenTo(this.model, 'change:mainImage', this.render);

        this.render();
    },

    render: function () {
        this.$el.html(JST['phones/show_image'](this.model.get('mainImage')));
    },

    setMainImage: function (photo) {
        this.model.set('mainImage', photo);
    }
});
