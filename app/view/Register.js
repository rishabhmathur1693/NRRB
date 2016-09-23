Ext.define("NRRB.view.Register", {
	extend: 'Ext.Container',
	xtype: 'Register',
	config: {
		scrollable: {
			direction: 'vertical',
			directionLock: true
		},
		items: [
			{
				xtype: 'image',
				mode: 'image',
				margin: '0 0 0 82px',
				src: 'resources/images/default_form_logo.png',
				width: '50%'
			}, {
				xtype: 'fieldset',
				title: 'Registration',
				items: [
					{
						xtype: 'textfield',
						label: 'First Name'
					}, {
						xtype: 'textfield',
						label: 'Last Name'
					}, {
						xtype: 'emailfield',
						label: 'Email'
					}, {
						xtype: 'numberfield',
						label: 'Mobile'
					}
				]
			}, {
				xtype: 'button',
				itemId: 'registerBtn',
				text: 'Submit'
			}, {
				layout: {
					type: 'hbox'
				},
				docked: 'bottom',
				defaults: {
					xtype: 'button',
					flex: 2
				},
				items: [
					{
						text: 'Speakers'
					}, {
						text: 'Event Map'
					}, {
						text: 'Contact Us'
					}
				]	
			}
		]
	}
});