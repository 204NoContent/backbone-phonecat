PhonesShowImagesListImageView = Backbone.View.extend({
    
    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(JST['phones/show_images_list_image'](this.model));
    }
});
