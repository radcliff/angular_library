var LibraryCtrl = function($scope){
	console.log("ALERT: library controller initialized!")
	$scope.libraries = [];

	$scope.createLibrary = function(){
		console.log("ALERT: 'create library' button clicked!");
		console.log($scope.newLibrary);
		$scope.libraries.push($scope.newLibrary);
		console.log("Library Count = " + $scope.libraries.length);
		$scope.newLibrary = {};
	};

	$scope.destroyLibrary = function(){
		console.log("ALERT: library name dbl clicked!");
		$scope.libraries.splice(this.$index, 1);
		console.log("Library Count = " + $scope.libraries.length);
	};
};

var BooksCtrl = function($scope){
	console.log("ALERT: books controller initialized!");
	$scope.library.books = [];

	$scope.addBook = function(){
		console.log("ALERT: 'add book' clicked!");
		console.log($scope.newBook);
		$scope.library.books.push($scope.newBook);
		$scope.newBook = {};
	};
};