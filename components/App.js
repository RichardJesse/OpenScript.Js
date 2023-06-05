class App extends OpenScript.Component {
    
    constructor(){
        super();            
    }

    async mount(){
        await super.mount();
        await require("MainNav");
        await require("Blog.List");
        await require("Counter");
    }

    render(...args) {
        
        return h.div(
           
            h.MainNav(),

            h.div(
                { class: "container py-3" },
            
                h.header(
                    {
                        class: "mb-3"
                    },

                    h.h1("The Blog List Header"),
                    h.hr()
                ),

                h.BlogCounter(context("BlogCxt").get("counter"), {
                    class: "p-1"
                }),
            
                h.BlogList(context("BlogCxt").blogs)
            ),

            ...args
        );
    }
}
