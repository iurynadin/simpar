class FooterElement extends HTMLElement {
    // This gets called when the HTML parser sees your tag
    constructor() {
        super(); // always call super() first in the ctor.
    }
    // Called when your element is inserted in the DOM or
    // immediately after the constructor if it’s already in the DOM
    connectedCallback() {
        this.innerHTML = `
            <footer class="relative w-full">
                <div class="container">
                    <img src="svgs/ico-desempenho.svg" class="md:w-[102px] lg:w-[142px] ml-[59px]" alt="Icone desempenho 2021">
                    <h3 class="text-azul-light font-lato text-5xl md:text-[50px] lg:text-[68px] font-bold leading-none mb-8">Desempenho<span class="block text-white">2021</span></h3>
                    
                    <p class="text-white text-xl font-light w-full sm:w-[352px]">Crescimento sustentável, com previsibilidade e solidez, ditou os rumos de 2021 na SIMPAR</p>

                    <div class="relative flex justify-start my-10">
                        <a href="#" class="group btn-ghost">
                            <span class="group-hover:text-azul text-sm">Saiba Mais</span>
                            <svg class="group-hover:fill-azul-light" width="144" height="32" viewBox="0 0 144 32">
                                <g clip-path="url(#a)"><path d="M133.926,2.442A6.822,6.822,0,0,0,131.115.589v0a6.251,6.251,0,0,0-2.05-.341L118.4.3,72.815.251H.256V18.237L.251,18.7,10.375,29.857a6.822,6.822,0,0,0,2.811,1.854v0a6.251,6.251,0,0,0,2.05.341L25.9,32l45.584.047v0h72.559V14.062l.005-.462Z" transform="translate(-0.15 -0.15)" stroke="#0FACE4" stroke-miterlimit="10" stroke-width="2"/></g>
                            </svg>
                        </a>
                    </div>
                </div>

                <section class="footer__light relative w-full bg-azul-light pt-40 pb-10 lg:pb-16">

                    <div class="footer__corte">
                        <img src="svgs/footer-cut.svg" class="h-16" alt="">
                    </div>

                    <div class="container flex flex-row flex-wrap sm:flex-nowrap justify-between items-center">
                        <div class="flex flex-row items-center justify-start mb-6 sm:mb-0 gap-7 w-full sm:w-[60px] md:w-[330px] lg:w-auto">
                            <a href="#" class="flex fex-row items-center text-white hover:text-azul duration-300 transition-all font-montserrat text-[15px] gap-[5px]">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-[15px] fill-azul" viewBox="0 0 15.056 15.27">
                                        <path id="ico-download" d="M17.174,14.5v2.863H5.882V14.5H4v2.863A1.9,1.9,0,0,0,5.882,19.27H17.174a1.9,1.9,0,0,0,1.882-1.909V14.5Zm-.941-3.817L14.906,9.335,12.469,11.8V4H10.587v7.8L8.15,9.335,6.823,10.681l4.705,4.772Z" transform="translate(-4 -4)"/>
                                    </svg>
                                </span>
                                PDF
                            </a>
                            <span class="sm:hidden md:block md:visible font-montserrat text-xs text-azul font-thin">Relatório Anual de Sustentabilidade <span class="font-semibold">2021</span></span>
                        </div>

                        <!-- Imagem -->
                        <div class="imgDesempenho bg-desempenho bg-left bg-[length:auto_393px] lg:bg-auto bg-no-repeat">

                        </div>

                        <img src="svgs/logo-footer.svg" class="w-[94px]" alt="Logo Simpar">

                        <a href="#topo" class="group flex flex-col justify-center items-center" id="backTop">
                            <svg width="16.084" class="w-4 rotate-90 group-hover:-translate-y-4 stroke-azul group-hover:stroke-white duration-300 transition-all" viewBox="0 0 16.084 30.274">
                                <defs><clipPath id="a"><path d="M0,30.274H16.084V0H0Z" fill="none" stroke="#0f233d" stroke-width="1"/></clipPath></defs>
                                <g clip-path="url(#a)"><g transform="translate(0.945 0.946)"><path d="M14.192,28.381,0,14.19,14.192,0" transform="translate(0 0)" fill="none" stroke="" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/></g></g>
                            </svg>
                            <span class="font-bold text-xs group-hover:text-white duration-300 transition-all">voltar ao topo</span>
                        </a>
                    </div>
                        
                </section>
            </footer>
        `;
    }
}
  // This registers your new tag and associates it with your class
  window.customElements.define('wc-footer', FooterElement);