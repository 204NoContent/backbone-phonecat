Phone = Backbone.Model.extend({
    urlRoot: '/api/phones',

    parse: function (res) {
        if (res.images) {
            this.photosCollection = new PhotosCollection(_.map(res.images, function (image_path) { return { path: image_path }; }));
            this.set('mainImage', this.photosCollection.models[0]);
        }
        return res;
    }
});
