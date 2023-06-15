class Header extends OpenScript.Component {
    constructor() {
        super();

        this.name = 'MainHeader';
    }

    async mount(){
        await super.mount();
        await require('Logo');
        await require('SocialList');
    }

    render() {
        return h.header(
            { class: 'header fixed-top' },

            h.div(
                { class: 'branding docs-branding' },
                h.div(
                    {class: 'docs-logo-wrapper'},
                    h.Logo()
                )
            ),

            h.div(
                {
                    class: 'docs-top-utilities ' +
                           'd-flex ' + 
                           'justify-content-end ' + 
                           'align-items-center '
                },

                h.SocialList([
                    {link: '#', }
                ])
            )
        )
    }
}