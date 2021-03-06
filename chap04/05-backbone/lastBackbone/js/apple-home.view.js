//OK
define(['apple-home.tpl', 'apple-item.view'], function (
    appleHomeTpl,
    appleItemView) {
    return Backbone.View.extend({
        el: '.content',
        listEl: '.apples-list',
        cartEl: '.cart-box',
        template: _.template(appleHomeTpl),
        initialize: function () {
            this.$el.html(this.template)
            this.collection.on('addToCart', this.showCart, this)
        },
        showCart: function (appleModel) {
            $(this.cartEl).append(appleModel.attributes.name + '<br/>')
        },
        render: function () {
            view = this // So we can use view inside of closure
            this.collection.each(function (apple) {
                var appleSubView = new appleItemView({ model: apple })
                // Create subview with model apple
                appleSubView.render()
                // Compiles template and single apple data
                $(view.listEl).append(appleSubView.$el)
                // Append jQuery object from
                // single apple to apples-list DOM element
            })
        }
    })
});
