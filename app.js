(function() {
	var gem = {name: "gemstone", 
				price: 2.65, 
				description: "This stone is really good...",
				canPurchase: true};
	var app = angular.module("gemstore", []);
	app.controller("StoreController", function() {
		this.product = gem;	
	});
})();