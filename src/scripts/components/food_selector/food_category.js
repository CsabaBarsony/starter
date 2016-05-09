var FoodCategory = React.createClass({
	render: function() {
		return (
			<button>{this.props.category.name}</button>
		);
	}
});

module.exports = FoodCategory;