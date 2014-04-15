PhonesShowImagesListImageView = Backbone.View.extend({
    events: {
        'click': 'selectImage'
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(JST['phones/show_images_list_image'](this.model));
    },

    selectImage: function (event) {
        this.model.trigger('imageSelected', this.model);
    }
});
