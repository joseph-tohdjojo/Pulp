( function() {

  angular.module( 'PulpComponents' )
    .controller( 'headerNavCtrl', headerNavCtrl );

  headerNavCtrl.$inject = [
    'talentService'
  ];





	/****************************************************************************\
		# headerNavCtrl Definition
	\****************************************************************************/

  function headerNavCtrl( talentService ) {
    var vm = this;

    talentService.getMenuItems()
			.then( function( menuItems ) {
				vm.menuItems = menuItems;
			} );





  	/**************************************************************************\
			All general logic goes above this comment.
			All detailed logic(function definitions) goes below this comment.
		\**************************************************************************/

    

  }

} )();