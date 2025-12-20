        // Data for presentations (HTML files for menus)
        const presentationData = [
            {
                grade: "Décimo",
                subjects: [
                    {
                        name: "Informática I",
                        topics: [
                            //Descomentar para agregar estos temas del 3r parcial.
//                            { title: "Historia de la Computación", file: "Informatica_I/historia_computacion.htm" },
//                            { title: "Partes y Tipos de Computadora", file: "Informatica_I/Partes_Computadora.html" },
//                            { title: "Periféricos Entrada/Salida", file: "Informatica_I/perifericos_entrada_salida.html" },
//                            { title: "¿Qué es un Software?", file: "Informatica_I/software_concepto.html" },
//                            { title: "Sistema Operativo", file: "Informatica_I/sistema_operativo.html" },
//                            { title: "Seguridad Informática", file: "Informatica_I/seguridad_informatica.html" },
//                            { title: "Navegación y Extensiones", file: "Informatica_I/medidas_navegacion_extensiones.html" }
                              { title: "Procesadores de Texto", file: "Informatica_I/prosesadores_texto.html" },
                              { title: "Formato de texto y tablas", file: "Informatica_I/texto_tablas.html" },
                            { title: "Insertar/Formato de página", file: "Informatica_I/insertar_formato.html" },
                            { title: "Hojas de Calculo", file: "Informatica_I/hojas_calculo.html" }
                        ]
                    }
                ]
            },
            {
                grade: "Undécimo",
                subjects: [
                    {
                        name: "Informática Aplicada I",
                        topics: [
                        //Descomenta para agregar estos temas del 3r parcial.
                        //  { title: "Dispositivos de Almacenamiento", file: "II_BTP_A/Informatica_Aplicada_I/dipositivos_almac.html" },
                        //  { title: "Fundamentos de Sistemas Operativos", file: "II_BTP_A/Informatica_Aplicada_I/sistemas_operativos.html" },
                        //    { title: "Terminal de Comandos", file: "II_BTP_A/Informatica_Aplicada_I/terminal_comando.html" },
                        //  { title: "Instalación de software y virtualización", file: "II_BTP_A/Informatica_Aplicada_I/instalacion_software.html" },
                        //    { title: "IP y Redes", file: "II_BTP_A/Informatica_Aplicada_I/redes_ip.html" }
                        { title: "Sistemas de Numeración", file: "II_BTP_A/Informatica_Aplicada_I/sistemas_numeracion.html" },
                        { title: "Numeración Hexadecimal", file: "II_BTP_A/Informatica_Aplicada_I/hexadecimales.html" },
                        { title: "Manejo de Archivos", file: "II_BTP_A/Informatica_Aplicada_I/manejo_archivos.html" }
                        ]
                    },
                    {
                        name: "Ofimática I",
                        topics: [
                        //    { title: "Procesadores de Texto", file: "II_BTP_A/Ofimatica_I/procesadores_texto.html" },
                        //    { title: "Hojas de Calculo", file: "II_BTP_A/Ofimatica_I/hojas_calculo.html" },
                        //    { title: "Condicional, Graficos y Tablas", file: "II_BTP_A/Ofimatica_I/hojas_calculo2.html" }
                        { title: "Referencias Relativas y Absolutas", file: "II_BTP_A/Ofimatica_I/referencias_relayabso.html" },
                        { title: "Formato Condicional", file: "II_BTP_A/Ofimatica_I/formato_condicional.html" },
                        { title: "Formato de tabla dinamica", file: "II_BTP_A/Ofimatica_I/tablas_dinamicas.html" },
                        { title: "Validación y Filtrado de Datos", file: "II_BTP_A/Ofimatica_I/validacion-datos.html" },
                        { title: "Fundamentos de VBA", file: "II_BTP_A/Ofimatica_I/fundamentos_VBA.html" }
                        ]
                    },
                    {
                        name: "Análisis y Diseño de Sistemas",
                        topics: [
                        //    { title: "Análisis y Diseño de Sistemas", file: "II_BTP_A/analisis_diseno/analisis_y_diseno_s.html" },
                        //    { title: "Rol del Analista de Sistemas", file: "II_BTP_A/analisis_diseno/rol_analista_sistemas.html" },
                        //    { title: "Ciclo de Vida del Desarrollo de Software", file: "II_BTP_A/analisis_diseno/ciclo_desarrollo.html" },
                        //    { title: "Gestión de Proyectos de Software", file: "II_BTP_A/analisis_diseno/gestion_proyectos_software.html" },
                        //    { title: "Técnicas de recolección de requisitos", file: "II_BTP_A/analisis_diseno/tecnicas_de_recoleccion_requisitos.html" } // New content: Requirements Gathering Techniques
                        ]
                    }
                ]
            },
            {
                grade: "Duodécimo",
                subjects: [
                    {
                        name: "Diseño Web II",
                        topics: [
                        //    { title: "Backend y Frontend", file: "III_BTP_A/dw_II/backend_frontend.html" },
                        //    { title: "Fundamentos de JavaScript", file: "III_BTP_A/dw_II/fundamentos_js.html" },
                        //    { title: "Manipulación del DOM", file: "III_BTP_A/dw_II/DOM.html" }
                        { title: "Grind vs Flexbox", file: "III_BTP_A/dw_II/tablas_columnas.html" },
                        { title: "Eventos de JavaScript", file: "III_BTP_A/dw_II/eventos_javascript.html" }
                        ]
                    }
                ]
            }
        ];

        // Data for additional resources (HTML files, separate menu)
        const additionalResourcesData = [
            {
                category: "Articulos",
                items: [
                    { title: "Destreza en el teclado", file: "II_BTP_A/Ofimatica_I/articulo-destreza.html" },
                    { title: "Línea de tiempo de la computación", file: "Informatica_I/articulo_lineadetiempo.html" },
                    { title: "Evolucion de Suites Informaticas", file: "II_BTP_A/Ofimatica_I/articulo-evolucion-suite.html" }
                ]
            },
            {
                category: "Actividades Practicas",
                items: [
                    { title: "Periféricos Entrada/Salida", action: "load-peripherals-game" }, // Action to load the game dynamically
                    { title: "WebMaster Quiz", action: "load-webmaster-quiz" }, // Existing game
                    { title: "Destreza en el Teclado", action: "load-dexterity-game" },
                    { title: "Atajos", file: "interactivo.html" } // New game added here
                ]
            },

        ];

        // Data for downloads (PDF files for download section)
        const downloadContentData = [
            {
                grade: "Décimo",
                subjects: [
                    {
                        name: "Informática I",
                        topics: [
//descomentar para agregar estos temas del 3r parcial.
//                            { title: "Historia de la Computación", file: "Informatica_I/historia_de_la_computacion.pdf" },
//                            { title: "Partes y Tipos de Computadora", file: "Informatica_I/partes_y_tipos_de_computadora.pdf" },
//                            { title: "Periféricos Entrada/Salida", file: "Informatica_I/perifericos_entrada_salida.pdf" },
//                            { title: "¿Qué es un Software?", file: "Informatica_I/software_concepto.pdf" },
//                            { title: "Sistema Operativo", file: "Informatica_I/Sistema_Operativo.pdf" },
//                            { title: "Seguridad Informática", file: "Informatica_I/seguridad_informatica.pdf"},
//                            { title: "Guia de Estudio", file: "guia_estudios/GDESR-Info-Decimo.pdf"}
                              { title: "Procesadores de Texto", file: "Informatica_I/procesadores_palabras.pdf" },
                                { title: "Formato de texto y tablas", file: "Informatica_I/texto_tablas.pdf" },
                                { title: "Insertar/Formato de página", file: "Informatica_I/formato_insercion.pdf" },
                                { title: "Hojas de Calculo", file: "Informatica_I/hojas_calculo.pdf" },
                                { title: "Guia de Estudio", file: "guia_estudios/GE_infoA.pdf"}
                        ]
                    }
                ]
            },
            {
                grade: "Undécimo",
                subjects: [
                    {
                        name: "Informática Aplicada I",
                        topics: [
                        //Descomenta para agregar estos temas del 3r parcial.
                        //    { title: "Dispositivos de Almacenamiento", file: "II_BTP_A/Informatica_Aplicada_I/dispositivos_de_almacenamiento.pdf" },
                        //    { title: "Fundamentos de Sistemas Operativos", file: "II_BTP_A/Informatica_Aplicada_I/fundamentos_de_sistemas_operativos.pdf" },
                        //    { title: "Terminal de Comandos", file: "II_BTP_A/Informatica_Aplicada_I/terminal_comando.pdf" },
                        //    { title: "Instalación de software y virtualización", file: "II_BTP_A/Informatica_Aplicada_I/instalacion_software.pdf" },
                        //    { title: "Redes y Configuración IP", file: "II_BTP_A/Informatica_Aplicada_I/redes_ip.pdf" },
                        //    { title: "Guia de Estudio", file: "guia_estudios/GDESR-infapli-IIBTP.pdf" }
                            { title: "Sistemas de Numeración", file: "II_BTP_A/Informatica_Aplicada_I/sistemas_numeracion.pdf" },
                            { title: "Numeración Hexadecimal", file: "II_BTP_A/Informatica_Aplicada_I/hexadecimales.pdf" },
                            { title: "Manejo de Archivos", file: "II_BTP_A/Informatica_Aplicada_I/manejo_archivos.pdf" },
                            { title: "Guia de Estudio", file: "guia_estudios/GE_Info_Apli.pdf" }
                        ]
                    },
                    {
                        name: "Ofimática I",
                        topics: [
                        //Descomentar para agregar estos temas del 3r parcial.
                        //    { title: "Procesadores de Texto", file: "II_BTP_A/Ofimatica_I/procesadores_de_texto.pdf" },
                        //    { title: "Hojas de Calculo", file: "II_BTP_A/Ofimatica_I/hojas_calculo.pdf" },
                        //    { title: "Condicional, Graficos y Tablas", file: "II_BTP_A/Ofimatica_I/condicionales_graficos_tablas.pdf" },
                        //    { title: "Guia de Estudio", file: "guia_estudios/GDESR-OFI-IIBTP.pdf" }
                              { title: "Referencias Relativas y Absolutas", file: "II_BTP_A/Ofimatica_I/referencias_relayabso.pdf" },
                              { title: "Formato Condicional", file: "II_BTP_A/Ofimatica_I/formato_condicional.pdf" },
                              { title: "Formato de tabla dinamica", file: "II_BTP_A/Ofimatica_I/formato_tablas.pdf" },
                              { title: "Validación y Filtrado de Datos", file: "II_BTP_A/Ofimatica_I/validacion_filtrado.pdf" },
                                { title: "Fundamentos de VBA", file: "II_BTP_A/Ofimatica_I/fundamentos_VBA.pdf" },
                                { title: "Guia de Estudio", file: "guia_estudios/GE_OFIMATICA.pdf" }
                        ]
                    },
                    {
                        name: "Análisis y Diseño de Sistemas",
                        topics: [
                        //    { title: "Análisis y Diseño de Sistemas", file: "II_BTP_A/analisis_diseno/analisis_y_diseno_de_sistemas.pdf" },
                        //    { title: "Rol del Analista de Sistemas", file: "II_BTP_A/analisis_diseno/rol_del_analista_de_sistemas.pdf" },
                        //    { title: "Ciclo de Vida del Desarrollo de Software", file: "II_BTP_A/analisis_diseno/ciclo_desarrollo.pdf" }, // PDF for download
                        //    { title: "Gestión de Proyectos de Software", file: "II_BTP_A/analisis_diseno/gestion_proyectos_software.pdf" },
                        //    { title: "Técnicas de recolección de requisitos", file: "II_BTP_A/analisis_diseno/tecnicas_de_recoleccion_requisitos.pdf" },
                        //    { title: "Modelado de Procesos", file: "II_BTP_A/analisis_diseno/modelado_procesos.pdf" },
                        //    { title: "Guia de Estudio", file: "guia_estudios/GDESR-AYD-IIBTP.pdf" }
                        { title: "Metodologias Agiles", file: "II_BTP_A/analisis_diseno/metodologias_agiles.pdf" },
                        { title: "Documentación en el D.S.", file: "II_BTP_A/analisis_diseno/documentacion.pdf" },
                        { title: "Creación de Bases de Datos", file: "II_BTP_A/analisis_diseno/Base_de_datos.pdf" },
                        { title: "Guia de Estudio", file: "guia_estudios/GE_AYD.pdf" }
                        ]
                    }
                ]
            },
            {
                grade: "Duodécimo",
                subjects: [
                    {
                        name: "Diseño Web II",
                        topics: [
                        //    { title: "Backend y Frontend", file: "III_BTP_A/dw_II/front_end_vs_back_end.pdf" },
                        //    { title: "Fundamentos de JavaScript", file: "III_BTP_A/dw_II/fundamentos_de_js.pdf" },
                        //    { title: "Manipulacion del DOM", file: "III_BTP_A/dw_II/DOM.pdf" },
                        //    { title: "Guía de Estudios III Parcial", file: "guia_estudios/GDESR-DW-IIIBTP.pdf" }
                              { title: "Grind vs Flexbox", file: "III_BTP_A/dw_II/tablas_columnas.pdf" },
                                { title: "Eventos de JavaScript", file: "III_BTP_A/dw_II/eventosJS.pdf" },
                                { title: "Guía de Estudios IV Parcial", file: "guia_estudios/GDESR-DW-IIIBTP_4parcial.pdf" }
                        ]
                    }
                ]
            }
        ];

        // --- Global State for Content Section ---
        let currentContentView = 'initial'; // 'initial', 'grades', 'subjects', 'topics'
        let selectedGradeData = null;
        let selectedSubjectData = null;

        // --- Utility function to create a custom button ---
        function createCustomButton(text, onClickHandler, className = '') {
            const button = document.createElement('button');
            button.textContent = text;
            button.onclick = onClickHandler;
            button.className = `
                px-6 py-3 rounded-xl font-bold text-base
                bg-blue-600 text-white hover:bg-blue-700
                transition-all duration-300 ease-in-out
                shadow-md hover:shadow-lg transform hover:-translate-y-1
                focus:outline-none focus:ring-4 focus:ring-blue-300
                ${className}
            `;
            return button;
        }

        // --- Header (Mobile Menu) Logic ---
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenuCloseButton = document.getElementById('mobile-menu-close-button');
        const mobileMenuWrapper = document.getElementById('mobile-menu-wrapper');
        const mobileMenuBackdrop = document.getElementById('mobile-menu-backdrop');
        const mobileMenuPanel = document.getElementById('mobile-menu-panel');

        const mobileCoursesToggle = document.getElementById('mobile-courses-toggle');
        const mobileCoursesArrow = document.getElementById('mobile-courses-arrow');
        const mobileGradesContainer = document.getElementById('mobile-grades-container');

        const mobileAdditionalResourcesToggle = document.getElementById('mobile-additional-resources-toggle');
        const mobileAdditionalResourcesArrow = document.getElementById('mobile-additional-resources-arrow');
        const mobileAdditionalResourcesContainer = document.getElementById('mobile-additional-resources-container');

        function openMobileMenu() {
            mobileMenuWrapper.classList.remove('hidden');
            // Use requestAnimationFrame to ensure the transition is applied after the element is visible
            requestAnimationFrame(() => {
                mobileMenuBackdrop.classList.remove('opacity-0');
                mobileMenuPanel.classList.remove('translate-x-full');
            });
        }

        function closeMobileMenu() {
            mobileMenuBackdrop.classList.add('opacity-0');
            mobileMenuPanel.classList.add('translate-x-full');
            // Wait for the transition to finish before hiding the wrapper
            setTimeout(() => {
                mobileMenuWrapper.classList.add('hidden');
                // Reset sub-menus
                mobileGradesContainer.classList.add('hidden');
                mobileCoursesArrow.classList.remove('rotate-180');
                mobileAdditionalResourcesContainer.classList.add('hidden');
                mobileAdditionalResourcesArrow.classList.remove('rotate-180');
            }, 300); // Should match the transition duration
        }

        mobileMenuButton.addEventListener('click', openMobileMenu);
        mobileMenuCloseButton.addEventListener('click', closeMobileMenu);
        mobileMenuBackdrop.addEventListener('click', closeMobileMenu);

        mobileCoursesToggle.addEventListener('click', () => {
            mobileGradesContainer.classList.toggle('hidden');
            mobileCoursesArrow.classList.toggle('rotate-180');
            // Ensure the other menu is closed
            if (!mobileAdditionalResourcesContainer.classList.contains('hidden')) {
                mobileAdditionalResourcesContainer.classList.add('hidden');
                mobileAdditionalResourcesArrow.classList.remove('rotate-180');
            }
        });

        mobileAdditionalResourcesToggle.addEventListener('click', () => {
            mobileAdditionalResourcesContainer.classList.toggle('hidden');
            mobileAdditionalResourcesArrow.classList.toggle('rotate-180');
            // Ensure the other menu is closed
            if (!mobileGradesContainer.classList.contains('hidden')) {
                mobileGradesContainer.classList.add('hidden');
                mobileCoursesArrow.classList.remove('rotate-180');
            }
        });


        // --- Desktop Scroll-to Logic ---
        document.getElementById('scroll-to-courses').addEventListener('click', () => {
            document.getElementById('download-section').scrollIntoView({ behavior: 'smooth' });
        });

        document.getElementById('scroll-to-resources').addEventListener('click', () => {
            document.getElementById('activity-section').scrollIntoView({ behavior: 'smooth' });
        });

        // Function to render mobile navigation menu (Presentations)
        function renderMobileNav() {
            const mobileGradesMenu = document.getElementById('mobile-grades-menu');
            const mobileAdditionalResourcesMenu = document.getElementById('mobile-additional-resources-menu');
            mobileGradesMenu.innerHTML = '';
            mobileAdditionalResourcesMenu.innerHTML = '';

            // Render 'Cursos' from presentationData
            presentationData.forEach(gradeData => {
                const gradeToggle = document.createElement('button');
                gradeToggle.className = 'w-full text-gray-800 hover:text-blue-600 font-semibold text-lg text-left py-2 flex justify-between items-center transition-colors duration-200';
                gradeToggle.innerHTML = `${gradeData.grade} <span class="transform transition-transform duration-300">&#9656;</span>`;
                mobileGradesMenu.appendChild(gradeToggle);

                const subjectsContainer = document.createElement('div');
                subjectsContainer.className = 'hidden pl-4';
                mobileGradesMenu.appendChild(subjectsContainer);

                gradeToggle.addEventListener('click', (e) => {
                    e.stopPropagation();
                    subjectsContainer.classList.toggle('hidden');
                    gradeToggle.querySelector('span').classList.toggle('rotate-90');
                });

                gradeData.subjects.forEach(subjectData => {
                    const subjectToggle = document.createElement('button');
                    subjectToggle.className = 'w-full text-gray-700 hover:text-blue-500 font-medium text-base text-left py-2 flex justify-between items-center transition-colors duration-200';
                    subjectToggle.innerHTML = `${subjectData.name} <span class="transform transition-transform duration-300">&#9656;</span>`;
                    subjectsContainer.appendChild(subjectToggle);

                    const topicsContainer = document.createElement('div');
                    topicsContainer.className = 'hidden pl-4';
                    subjectsContainer.appendChild(topicsContainer);

                    subjectToggle.addEventListener('click', (e) => {
                        e.stopPropagation();
                        topicsContainer.classList.toggle('hidden');
                        subjectToggle.querySelector('span').classList.toggle('rotate-90');
                    });

                    subjectData.topics.forEach(topic => {
                        const topicLink = document.createElement('a');
                        topicLink.href = topic.file;
                        topicLink.className = 'block px-2 py-1.5 text-gray-600 hover:text-blue-400 text-sm transition-colors duration-200';
                        topicLink.textContent = topic.title;
                        topicLink.onclick = closeMobileMenu;
                        topicsContainer.appendChild(topicLink);
                    });
                });
            });

            // Render 'Recursos Adicionales' for mobile
            additionalResourcesData.forEach(resourceCategory => {
                const categoryToggle = document.createElement('button');
                categoryToggle.className = 'w-full text-gray-800 hover:text-blue-600 font-semibold text-lg text-left py-2 flex justify-between items-center transition-colors duration-200';
                categoryToggle.innerHTML = `${resourceCategory.category} <span class="transform transition-transform duration-300">&#9656;</span>`;
                mobileAdditionalResourcesMenu.appendChild(categoryToggle);

                const itemsContainer = document.createElement('div');
                itemsContainer.className = 'hidden pl-4';
                mobileAdditionalResourcesMenu.appendChild(itemsContainer);

                categoryToggle.addEventListener('click', (e) => {
                    e.stopPropagation();
                    itemsContainer.classList.toggle('hidden');
                    categoryToggle.querySelector('span').classList.toggle('rotate-90');
                });

                resourceCategory.items.forEach(item => {
                    const itemLink = document.createElement('a');
                    if (item.action) {
                        itemLink.href = '#';
                        itemLink.onclick = (e) => {
                            e.preventDefault();
                            if (item.action === 'load-peripherals-game') loadPeripheralsGameFromHeader();
                            if (item.action === 'load-webmaster-quiz') loadWebMasterQuizFromHeader();
                            if (item.action === 'load-dexterity-game') loadDexterityGameFromHeader();
                            closeMobileMenu();
                        };
                    } else {
                        itemLink.href = item.file;
                        itemLink.target = '_blank';
                        itemLink.onclick = closeMobileMenu;
                    }
                    itemLink.className = 'block px-2 py-1.5 text-gray-600 hover:text-blue-400 text-sm transition-colors duration-200';
                    itemLink.textContent = item.title;
                    itemsContainer.appendChild(itemLink);
                });
            });
        }


        // --- Content Download Section Logic ---
        const contentDisplayArea = document.getElementById('content-display-area');
        const contentBackButtonContainer = document.getElementById('content-back-button-container');
        const contentBackButton = document.getElementById('content-back-button');
        const downloadSection = document.getElementById('download-section');

        function animateContentTransition(callback) {
            contentDisplayArea.classList.add('animate-fade-out-up');
            contentDisplayArea.addEventListener('animationend', () => {
                contentDisplayArea.classList.remove('animate-fade-out-up');
                contentDisplayArea.innerHTML = ''; // Clear content after fade out
                callback();
                contentDisplayArea.classList.add('animate-fade-in-down');
                contentDisplayArea.addEventListener('animationend', () => {
                    contentDisplayArea.classList.remove('animate-fade-in-down');
                }, { once: true });
            }, { once: true });
        }

        function renderInitialContentButton() {
            contentBackButtonContainer.classList.add('hidden');
            contentDisplayArea.innerHTML = '';
            contentDisplayArea.appendChild(createCustomButton('Ver Contenido para Descargar', renderDownloadGrades));
            currentContentView = 'initial';
        }

        function renderDownloadGrades() {
            contentBackButtonContainer.classList.add('hidden');
            contentDisplayArea.innerHTML = '';
            const gridDiv = document.createElement('div');
            gridDiv.className = 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full';
            downloadContentData.forEach(gradeData => {
                const button = createCustomButton(gradeData.grade, () => {
                    selectedGradeData = gradeData;
                    animateContentTransition(renderDownloadSubjects);
                }, 'w-full text-sm');
                gridDiv.appendChild(button);
            });
            contentDisplayArea.appendChild(gridDiv);
            currentContentView = 'grades';
        }

        function renderDownloadSubjects() {
            if (!selectedGradeData) {
                renderDownloadGrades(); // Fallback
                return;
            }
            contentBackButtonContainer.classList.remove('hidden');
            contentDisplayArea.innerHTML = '';
            const gridDiv = document.createElement('div');
            gridDiv.className = 'grid grid-cols-1 sm:grid-cols-2 gap-4 w-full';
            selectedGradeData.subjects.forEach(subjectData => {
                const button = createCustomButton(subjectData.name, () => {
                    selectedSubjectData = subjectData;
                    animateContentTransition(renderDownloadTopics);
                }, 'w-full text-sm');
                gridDiv.appendChild(button);
            });
            contentDisplayArea.appendChild(gridDiv);
            currentContentView = 'subjects';
        }

        function renderDownloadTopics() {
            if (!selectedSubjectData) {
                renderDownloadSubjects(); // Fallback
                return;
            }
            contentBackButtonContainer.classList.remove('hidden');
            contentDisplayArea.innerHTML = '';
            const gridDiv = document.createElement('div');
            gridDiv.className = 'grid grid-cols-1 gap-3 w-full max-w-md';
            selectedSubjectData.topics.forEach(topic => {
                const link = document.createElement('a');
                link.href = topic.file;
                link.target = '_blank';
                link.className = `
                    flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl font-semibold text-sm
                    bg-green-600 text-white hover:bg-green-700
                    transition-all duration-300 ease-in-out
                    shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                    focus:outline-none focus:ring-4 focus:ring-green-300
                    w-full
                `;
                link.textContent = topic.title;
                link.innerHTML += `
                    <svg class="w-4 h-4 ml-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l3-3m-3 3l-3-3m0 6h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                `;
                gridDiv.appendChild(link);
            });
            contentDisplayArea.appendChild(gridDiv);
            currentContentView = 'topics';
        }

        contentBackButton.addEventListener('click', () => {
            animateContentTransition(() => {
                if (currentContentView === 'subjects') {
                    renderDownloadGrades();
                    selectedGradeData = null;
                } else if (currentContentView === 'topics') {
                    renderDownloadSubjects();
                    selectedSubjectData = null;
                } else {
                    renderInitialContentButton();
                }
            });
        });

        // --- DOM Elements for Main Content & Activity Section ---
        const mainContentSections = document.getElementById('main-content-sections');
        const mainContentTitle = document.getElementById('main-content-title'); // Title above both sections

        const activitySection = document.getElementById('activity-section');
        const initialActivityMenu = document.getElementById('initial-activity-menu');
        const showActivitiesButton = document.getElementById('show-activities-button');
        const gameListMenu = document.getElementById('game-list-menu');
        const selectPeripheralsGameButton = document.getElementById('select-peripherals-game-button');
        const selectWebMasterQuizButton = document.getElementById('select-webmaster-quiz-button'); // Nuevo botón
        const selectDexterityGameButton = document.getElementById('select-dexterity-game-button'); // New button
        const backToMainActivitiesButton = document.getElementById('back-to-main-activities-button');
        const dynamicallyLoadedGameContainer = document.getElementById('dynamically-loaded-game-container');

        // --- Game Data Storage Logic ---
        const gameDataStorage = {
            localStorageKey: 'gameProgressData',

            loadAllGameData() {
                try {
                    const data = localStorage.getItem(this.localStorageKey);
                    return data ? JSON.parse(data) : {};
                } catch (e) {
                    console.error("Error loading game data:", e);
                    return {};
                }
            },
            saveAllGameData(data) {
                try {
                    localStorage.setItem(this.localStorageKey, JSON.stringify(data));
                } catch (e) {
                    console.error("Error saving game data:", e);
                }
            },
            saveGameSession(gameId, sessionData) {
                const allGameData = this.loadAllGameData();
                if (!allGameData[gameId]) allGameData[gameId] = [];
                allGameData[gameId].push(sessionData);
                this.saveAllGameData(allGameData);
            },
            getGameHistory(gameId) {
                return this.loadAllGameData()[gameId] || [];
            }
        };

        // --- Functions for Activity Section Flow ---
        function showMainContentSections() {
            mainContentSections.classList.remove('hidden');
            mainContentSections.classList.add('grid');
            dynamicallyLoadedGameContainer.classList.add('hidden');
            mainContentTitle.textContent = 'Contenido y Actividades';
            renderInitialActivityButton();
        }

        async function loadGame(gameName, gameTitle, htmlFile, jsFile, initFunction) {
            mainHeader.classList.add('header-hidden');
            mainContentSections.classList.add('hidden');
            mainContentSections.classList.remove('grid');
            dynamicallyLoadedGameContainer.classList.remove('hidden');
            mainContentTitle.textContent = gameTitle;

            try {
                const htmlResponse = await fetch(htmlFile);
                dynamicallyLoadedGameContainer.innerHTML = await htmlResponse.text();

                const script = document.createElement('script');
                script.src = jsFile;
                script.onload = () => {
                    if (window[initFunction]) {
                        // The dexterity game does not use the storage object, so call it without arguments.
                        if (initFunction === 'initDexterityGame') {
                            window[initFunction]();
                        } else {
                            window[initFunction](gameDataStorage);
                        }
                    }
                };
                dynamicallyLoadedGameContainer.appendChild(script);
            } catch (error) {
                console.error(`Error al cargar ${gameName}:`, error);
                dynamicallyLoadedGameContainer.innerHTML = `<p class="text-red-500">Error al cargar el juego. Inténtalo de nuevo más tarde.</p>`;
                const errorButton = createCustomButton('Volver al Inicio', showMainContentSections, 'mt-4');
                dynamicallyLoadedGameContainer.appendChild(errorButton);
            }
        }

        const loadPeripheralsGame = () => loadGame('Peripherals Game', 'Juego de Periféricos', 'juegos/perifericos.html', 'js/perifericos_juego.js', 'initializePeripheralsGame');
        const loadWebMasterQuiz = () => loadGame('WebMaster Quiz', 'WebMaster Quiz', 'juegos/webmaster_quiz.html', 'js/webmaster_quiz_juego.js', 'initQuizGame');
        const loadDexterityGame = () => loadGame('Dexterity Game', 'Destreza en el Teclado', 'juegos/destreza_teclado.html', 'js/destreza_teclado.js', 'initDexterityGame');

        const loadPeripheralsGameFromHeader = () => { showMainContentSections(); loadPeripheralsGame(); };
        const loadWebMasterQuizFromHeader = () => { showMainContentSections(); loadWebMasterQuiz(); };
        const loadDexterityGameFromHeader = () => { showMainContentSections(); loadDexterityGame(); };

        window.returnToMainContent = function() {
            mainHeader.classList.remove('header-hidden');
            dynamicallyLoadedGameContainer.innerHTML = '';
            document.querySelectorAll('script[src^="js/"]').forEach(s => s.remove());
            showMainContentSections();
            renderInitialActivityButton();
        };

        function renderInitialActivityButton() {
            initialActivityMenu.classList.remove('hidden');
            initialActivityMenu.classList.add('flex');
            gameListMenu.classList.add('hidden');
            gameListMenu.classList.remove('flex');
        }

        function renderActivityList() {
            initialActivityMenu.classList.add('hidden');
            initialActivityMenu.classList.remove('flex');
            gameListMenu.classList.remove('hidden');
            gameListMenu.classList.add('flex');
            mainContentTitle.textContent = 'Actividades';
        }

        // Event Listeners for Activity Section Navigation
        showActivitiesButton.addEventListener('click', renderActivityList);
        selectPeripheralsGameButton.addEventListener('click', loadPeripheralsGame);
        selectWebMasterQuizButton.addEventListener('click', loadWebMasterQuiz);
        selectDexterityGameButton.addEventListener('click', loadDexterityGame);
        backToMainActivitiesButton.addEventListener('click', renderInitialActivityButton);

        // --- Header Hide/Show on Scroll Logic ---
        const mainHeader = document.getElementById('main-header');
        let lastScrollTop = 0;
        const scrollThreshold = 50;

        window.addEventListener('scroll', () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (currentScrollTop > lastScrollTop && currentScrollTop > mainHeader.offsetHeight + scrollThreshold) {
                mainHeader.classList.add('header-hidden');
            } else if (currentScrollTop < lastScrollTop) {
                mainHeader.classList.remove('header-hidden');
            }
            lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
        });

        // --- Initialize on DOMContentLoaded ---
        document.addEventListener('DOMContentLoaded', () => {
            let deferredPrompt;
            const installButton = document.getElementById('install-button');
            const mobileInstallButton = document.getElementById('mobile-install-button');

            const showInstallButton = () => {
                installButton.classList.remove('hidden');
                mobileInstallButton.classList.remove('hidden'); // Show on mobile too
            };

            const hideInstallButton = () => {
                installButton.classList.add('hidden');
                mobileInstallButton.classList.add('hidden'); // Hide on mobile too
            };

            window.addEventListener('beforeinstallprompt', (e) => {
                e.preventDefault();
                deferredPrompt = e;
                showInstallButton();
            });

            const installApp = () => {
                if (!deferredPrompt) return;
                deferredPrompt.prompt();
                deferredPrompt.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('User accepted the install prompt');
                    } else {
                        console.log('User dismissed the install prompt');
                    }
                    deferredPrompt = null;
                    hideInstallButton();
                });
            };

            installButton.addEventListener('click', installApp);
            mobileInstallButton.addEventListener('click', installApp);

            document.getElementById('current-year').textContent = new Date().getFullYear();
            renderDesktopNav();
            renderMobileNav();
            renderInitialContentButton();
            renderInitialActivityButton();
        });
    </script>
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
          navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('SW registered: ', registration);
          }).catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
          });
        });
      }
