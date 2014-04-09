PhonesFilterView = Backbone.View.extend({
   
    events: {
        'keydown input.query': 'setQuery',
        'change select.sort': 'setSort'
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        this.order_options = [{ value: 'name', text: 'Alphabetical'}, { value: 'age', text: 'Newest' }];
        var selected_option = _.findWhere(this.order_options, { value: this.model.get('sortBy') }, this);
        if (selected_option) selected_option.selected = true;

        this.$el.html(JST['phones/filter']({ order_options: this.order_options }));
    },

    setQuery: function (event) {
        // make it snappy by using keydown and pushing it to next tick
        window.setTimeout($.proxy(function() {
            this.model.set('query', event.target.value.replace(/^\s+|\s+$/g, ''));
        }, this), 0);
    },

    setSort: function (event) {
        this.model.set('sortBy', event.target.value);
    }
});
