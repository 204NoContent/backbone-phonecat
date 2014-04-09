PhonesCollection = Backbone.Collection.extend({
    model: Phone,

    url: '/api/phones',

    query: function (query) {
        if (!query || query === '') return this.models;
        return this.filter(function (phone) {
            return phone.values().join().match(new RegExp(query, 'i'));
        });
    }
});
