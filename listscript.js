new Vue ({
    el: "#app",
    data: {
        listaSpesa: [
            {
                text: "Comprare le patate",
                done: false,
            },
            {
                text: "Comprare le banane",
                done: false,
            },
            {
                text: "Comprare i piatti",
                done: false,
            },
            {
                text: "Comprare le patate",
                done: false,
            },
            {
                text: "Comprare il detersivo",
                done: false,
            },
            {
                text: "Comprare il mangiare per i cani",
                done: false,
            },
        ],
    },
    methods: {
        aggCompiti: function(){
            const nuovoCompito = prompt ("Inserisci un nuovo compito da svolgere");

            this.listaSpesa.push({
                text: nuovoCompito,
                done: false,
            })
        }
    }
});