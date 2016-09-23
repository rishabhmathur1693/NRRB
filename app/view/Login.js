Ext.define('NRRB.view.Login', {
    extend: 'Ext.Container',
    xtype: 'login',
    config: {
        items: [
            {
                xtype: 'fieldset',
                style: 'margin-top:50%;',
                title: 'Login',
                items: [
                    {
                        xtype: 'emailfield',
                        placeHolder: "Username"
                    }, {
                        xtype: 'passwordfield',
                        placeHolder: 'Password'
                    }
                ]
            }, {
                xtype: 'button',
                itemId: 'loginBtn',
                text: 'Login'
            }
        ]
    }
});
