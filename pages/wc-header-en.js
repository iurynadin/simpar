class HeaderElement extends HTMLElement {
    constructor() {
        super(); 
    }
    // <div class="bpvisor"><p></p></div>
    connectedCallback() {
        this.innerHTML = `
            
            <header id="topo">
                <nav class="topNav">
                    <div class="navHolder">
                        <nav>
                            <div class="flex flex-row items-center justify-start gap-7 w-full md:w-[330px] lg:w-auto">
                                <a role="button" class="navbar-burger" aria-label="menu">
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </a>

                                <img src="svgs/logo-header.svg" class="ml-12 sm:ml-32 md:ml-0 w-[121px]" alt="">

                                <span class="hidden md:block md:visible font-montserrat text-xs text-azul font-thin">Integrated Annual Report <span class="text-azul-light font-semibold">2021</span></span>
                            </div>

                            <div class="flex-row items-center justify-end gap-6 hidden md:flex md:visible">
                                <a href="#" class="flex fex-row items-center text-azul hover:text-azul-light duration-300 transition-all font-montserrat text-[15px] gap-[5px]">
                                    <span><img src="svgs/ico-download.svg" class="w-[15px]" alt=""></span>
                                    PDF
                                </a>

                                <div class="flex flex-row items-center justify-end gap-[7px]">
                                    <a href="index-en.html" class="flex fex-row items-center text-azul hover:text-azul-light duration-300 transition-all font-montserrat text-[15px] gap-[5px]">
                                        <span><img src="svgs/ico-lang.svg" class="w-[15px]" alt=""></span>
                                        EN
                                    </a>
                                    <a href="index.html" class="text-azul hover:text-azul-light duration-300 transition-all font-montserrat text-[15px]">PT</a>
                                </div>

                                <a href="#" class="flex fex-row items-center text-azul hover:text-azul-light duration-300 transition-all font-montserrat text-[15px] gap-[5px]">
                                    <span><img src="svgs/ico-audio.svg" class="w-[16px]" alt=""></span>
                                    Audio
                                </a>
                            </div>
                        </nav>
                    </div>
                </nav>

                <!-- secondaryNav -->
                <section class="secondaryNav">

                    <div class="secondaryNav__holder">

                        <nav>
                            <div class="flex flex-col items-center text-center w-full sm:hidden">
                                <h3 class="font-light text-[21px] leading-none">Integrated Annual<br>Report <span class="font-bold text-azul-light">2021</span></h3>

                                <div class="flex-row items-center justify-end gap-12 flex my-6">
                                    <a href="#" class="flex fex-row items-center text-white hover:text-azul-light duration-300 transition-all font-montserrat text-[15px] gap-[5px]">
                                        <span><img src="svgs/ico-download.svg" class="w-[15px]" alt=""></span>
                                        PDF
                                    </a>

                                    <div class="flex flex-row items-center justify-end gap-x-3">
                                        <a href="index-en.html" class="flex fex-row items-center text-white hover:text-azul-light duration-300 transition-all font-montserrat text-[15px] gap-[5px]">
                                            <span><img src="svgs/ico-lang.svg" class="w-[15px]" alt=""></span>
                                            EN
                                        </a>
                                        <a href="index.html" class="text-white hover:text-azul-light duration-300 transition-all font-montserrat text-[15px]">PT</a>
                                    </div>

                                    <a href="#" class="flex fex-row items-center text-white hover:text-azul-light duration-300 transition-all font-montserrat text-[15px] gap-[5px]">
                                        <span><img src="svgs/ico-audio.svg" class="w-[16px]" alt=""></span>
                                        Áudio
                                    </a>
                                </div>
                            </div>

                            <ul>
                                <li>
                                    <a href="#" class="group">Sobre este relatório</a>
                                </li>
                                <li>
                                    <a href="mensagem-da-lideranca-en.html" class="group">A word from our leadership</a>
                                </li>
                                <li>
                                    <a href="portfolio-de-negocios-en.html" class="group">Business portfolio</a>
                                </li>
                                <li>
                                    <a href="perfil-simpar-en.html" class="group">
                                        Valuing our people
                                    </a>
                                </li>
                                <li>
                                    <a href="destaques-e-compromissos-en.html" class="group">
                                    2021 at a glance
                                        <span>A summary of leading developments for our priority ESG topics</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="foco-na-transparencia-en.html" class="group">
                                        Focus on transparency
                                        <span>Governança/Programa de Conformidade</span>
                                    </a>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <a href="mudancas-climaticas-en.html" class="group">
                                        Climate change
                                        <span>Destaque para descarbonização</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="investimentos-e-desempenho-en.html" class="group">
                                        Investments and performance
                                        <span>Breve texto introdutório e solução gráfica com números</span>
                                    </a>
                                </li>
                                <li><a href="materialidade-en.html">Materiality</a></li>
                                <li><a href="">GRI | SASB | TCFD  Content Index</a></li>
                                <li><a href="">Outros Indicadores</a></li>
                                <li><a href="">Assurance letter</a></li>
                                <li><a href="">Credits</a></li>
                            </ul>
                        </nav>

                        <div class="container relative flex justify-start mt-10 pb-14 gap-6">
                            <a href="#" class="group btn-ghost">
                                <span class="group-hover:text-azul text-[11px]">Sumário Executivo</span>
                                <svg class="group-hover:fill-azul-light" width="144" height="32" viewBox="0 0 144 32">
                                    <path d="M133.926,2.442A6.822,6.822,0,0,0,131.115.589v0a6.251,6.251,0,0,0-2.05-.341L118.4.3,72.815.251H.256V18.237L.251,18.7,10.375,29.857a6.822,6.822,0,0,0,2.811,1.854v0a6.251,6.251,0,0,0,2.05.341L25.9,32l45.584.047v0h72.559V14.062l.005-.462Z" transform="translate(-0.15 -0.15)" stroke="#0FACE4" stroke-miterlimit="10" stroke-width="2"/>
                                </svg>
                            </a>

                            <a href="#" class="group btn-ghost">
                                <span class="group-hover:text-azul text-[11px]">Relatório completo</span>
                                <svg class="group-hover:fill-azul-light" width="144" height="32" viewBox="0 0 144 32">
                                    <path d="M133.926,2.442A6.822,6.822,0,0,0,131.115.589v0a6.251,6.251,0,0,0-2.05-.341L118.4.3,72.815.251H.256V18.237L.251,18.7,10.375,29.857a6.822,6.822,0,0,0,2.811,1.854v0a6.251,6.251,0,0,0,2.05.341L25.9,32l45.584.047v0h72.559V14.062l.005-.462Z" transform="translate(-0.15 -0.15)" stroke="#0FACE4" stroke-miterlimit="10" stroke-width="2"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>
            </header>
        `;
    }
}
window.customElements.define('wc-header-en', HeaderElement);