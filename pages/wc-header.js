class HeaderElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="bpvisor"><p></p></div>
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

                                <span class="hidden md:block md:visible font-montserrat text-xs text-azul font-thin">Relatório Anual de Sustentabilidade <span class="text-azul-light font-semibold">2021</span></span>
                            </div>

                            <div class="flex-row items-center justify-end gap-6 hidden md:flex md:visible">
                                <a href="#" class="flex fex-row items-center text-azul hover:text-azul-light duration-300 transition-all font-montserrat text-[15px] gap-[5px]">
                                    <span><img src="svgs/ico-download.svg" class="w-[15px]" alt=""></span>
                                    PDF
                                </a>

                                <div class="flex flex-row items-center justify-end gap-[7px]">
                                    <a href="#" class="flex fex-row items-center text-azul hover:text-azul-light duration-300 transition-all font-montserrat text-[15px] gap-[5px]">
                                        <span><img src="svgs/ico-lang.svg" class="w-[15px]" alt=""></span>
                                        EN
                                    </a>
                                    <a href="#" class="text-azul hover:text-azul-light duration-300 transition-all font-montserrat text-[15px]">PT</a>
                                    <a href="#" class="text-azul hover:text-azul-light duration-300 transition-all font-montserrat text-[15px]">ES</a>
                                </div>

                                <a href="#" class="flex fex-row items-center text-azul hover:text-azul-light duration-300 transition-all font-montserrat text-[15px] gap-[5px]">
                                    <span><img src="svgs/ico-audio.svg" class="w-[16px]" alt=""></span>
                                    Áudio
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
                                <h3 class="text-white font-light text-[21px] leading-none">Relatório Anual de<br>Susutentabilidade <span class="font-bold text-azul-light">2021</span></h3>

                                <div class="flex-row items-center justify-end gap-12 flex my-6">
                                    <a href="#" class="flex fex-row items-center text-white hover:text-azul-light duration-300 transition-all font-montserrat text-[15px] gap-[5px]">
                                        <span><img src="svgs/ico-download.svg" class="w-[15px]" alt=""></span>
                                        PDF
                                    </a>

                                    <div class="flex flex-row items-center justify-end gap-x-3">
                                        <a href="#" class="flex fex-row items-center text-white hover:text-azul-light duration-300 transition-all font-montserrat text-[15px] gap-[5px]">
                                            <span><img src="svgs/ico-lang.svg" class="w-[15px]" alt=""></span>
                                            EN
                                        </a>
                                        <a href="#" class="text-white hover:text-azul-light duration-300 transition-all font-montserrat text-[15px]">PT</a>
                                        <a href="#" class="text-white hover:text-azul-light duration-300 transition-all font-montserrat text-[15px]">ES</a>
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
                                    <a href="mensagem-da-lideranca.html" class="group">Mensagem da Liderança</a>
                                </li>
                                <li>
                                    <a href="portfolio-de-negocios.html" class="group">Portifólio de negócios</a>
                                </li>
                                <li>
                                    <a href="perfil-simpar.html" class="group">
                                        Perfil SIMPAR
                                        <span>Empresas controladas/ aquisições</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="destaques-e-compromissos.html" class="group">
                                        Destaques e Compromissos
                                        <span>Breve texto introdutório e solução gráfica para realizações  e metas/compromissos públicos ESG/destaques socioambientais</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="foco-na-transparencia.html" class="group">
                                        Foco na transparência
                                        <span>Governança/Programa de Conformidade</span>
                                    </a>
                                </li>
                            </ul>

                            <ul>
                                <li>
                                    <a href="mudancas-climaticas.html" class="group">
                                        Mudanças climáticas
                                        <span>Destaque para descarbonização</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="investimentos-e-desempenho.html" class="group">
                                        Investimentos e desempenho
                                        <span>Breve texto introdutório e solução gráfica com números</span>
                                    </a>
                                </li>
                                <li><a href="materialidade.html">Materialidade</a></li>
                                <li><a href="">Sumários GRI - SASB - TCFD</a></li>
                                <li><a href="">Outros Indicadores</a></li>
                                <li><a href="">Carta de Asseguração</a></li>
                                <li><a href="">Expediente</a></li>
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
window.customElements.define('wc-header', HeaderElement);