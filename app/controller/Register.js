Ext.define("NRRB.controller.Register", {
	extend: 'Ext.app.Controller',
	config: {
		refs: {},
		control: {
			'button#registerBtn': {
				tap: 'registerGuest'
			}
		},
		routes: {
			'Register': 'startRegister'
		}
	},

	startRegister: function() {
		Ext.Viewport.animateActiveItem('Register', {type: 'slide', direction: 'left'});
	},

	registerGuest: function() {
		Ext.Msg.alert('Success', 'Thank you for coming.');
	}
});