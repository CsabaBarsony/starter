var foodCategories = require('./food_categories.js');
var FoodCategory = require('./food_category.js');

var FoodSelector = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Food Selector</h1>
				{_.map(foodCategories, function(category, key) {
					return (<FoodCategory category={category} key={key} />);
				})}
			</div>
		);
	}
});

ReactDOM.render(
	<FoodSelector />,
	document.getElementById('main-section')
);