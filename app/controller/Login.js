Ext.define("NRRB.controller.Login", {
	extend: 'Ext.app.Controller',
	config: {
		refs: {
			'Login': 'login'
		},
		control: {
			login: {
				show: 'showLogin'
			},
			'button#loginBtn': {
				tap: 'navigateRegister'
			}
		},
		routes: {
			'Login': 'startLogin'			
		}
	},

	startLogin: function() {
		Ext.Viewport.add(Ext.create('NRRB.view.Login'));
	},

	showLogin: function() {
		console.log("showLogin");
	},

	navigateRegister: function() {
		NRRB.app.redirectTo('Register');
	}
});