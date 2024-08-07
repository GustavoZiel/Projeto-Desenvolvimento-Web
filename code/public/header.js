document.addEventListener("DOMContentLoaded", function () {
    const corpo = document.body;
    const headerContent = `
    <header>
    <!-- Linha roxa no topo do site -->
    <div id="header-home" class="rectangle"></div>

    <!-- Navbar -->
    <nav class="navbar navbar-expand bg-body d-flex justify-content-center">
        <div class="container d-flex justify-content-between">

            <!-- Logo + nome (PET.Amigos) -->
            <a class="navbar-brand" href="./home.html">
                <div class="d-flex align-items-center justify-content-center">
                    <div class="purple-circle me-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" width="50%">
                            <title>14-House</title>
                            <g id="_14-House" data-name="14-House">
                                <path d="M31.62,12.22l-15-12a1,1,0,0,0-1.25,0l-15,12A1,1,0,0,0,1,14H3V31a1,1,0,0,0,1,1H24V30H20V21a1,1,0,0,0-1-1H13a1,1,0,0,0-1,1v9H5V14H22V12H3.85L16,2.28,28.15,12H28a1,1,0,0,0-1,1v6h2V14h2a1,1,0,0,0,.62-1.78ZM14,22h4v8H14Z" />
                                <path d="M25,26.59l-1.29-1.29-1.41,1.41,2,2a1,1,0,0,0,1.41,0l6-6-1.41-1.41Z" />
                            </g>
                        </svg>
                    </div>
                    <div class="font-nav-brand d-flex">
                        PET.Amigos
                    </div>
                </div>
            </a>

            <!-- Botões para outras páginas -->
            <ul class="navbar-nav">

                <!-- PET Search Page -->
                <li class="nav-item">
                    <a class="nav-link" href="search.html">
                        <div class="d-flex align-items-center">
                            <div class="me-1  d-flex align-items-center">
                                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="30px">
                                    <path d="M52.475 36.916a3.993 3.993 0 1 0 3.993 3.993 4 4 0 0 0-3.993-3.993zm0 4.485a.493.493 0 1 1 .493-.492.493.493 0 0 1-.493.491zM75.527 36.916a3.993 3.993 0 1 0 3.994 3.993 4 4 0 0 0-3.994-3.993zm0 4.485a.493.493 0 1 1 .494-.492.493.493 0 0 1-.494.491zM79.608 104.574A15.508 15.508 0 0 0 64.31 91.25h-.617a15.508 15.508 0 0 0-15.3 13.324l-1.254 9.039a1.75 1.75 0 1 0 3.466.481l1.254-9.04a12 12 0 0 1 11.832-10.3h.617a12 12 0 0 1 11.832 10.3l1.254 9.04a1.75 1.75 0 0 0 1.731 1.51 1.8 1.8 0 0 0 .242-.017 1.75 1.75 0 0 0 1.493-1.974z" />
                                    <path d="M110.84 54.341c-4.368-5.1-4.458-12.1-4.546-18.881-.1-7.768-.2-15.8-7.194-20.134-3.912-2.424-7.694-3.118-11.236-2.062-4.6 1.367-7.4 5.308-8.51 7.2a20.906 20.906 0 0 0-15.28-8.033h-.148a20.906 20.906 0 0 0-15.28 8.033c-1.115-1.888-3.914-5.829-8.51-7.2-3.545-1.056-7.325-.362-11.236 2.062-6.991 4.332-7.094 12.366-7.194 20.134-.088 6.777-.178 13.785-4.546 18.881-4.306 5.025-6.671 13.06-1.683 18.828a10.707 10.707 0 0 0 8.123 3.656 13.571 13.571 0 0 0 7.178-2.217 26.936 26.936 0 0 0 7.866 7.119 30.151 30.151 0 0 0-5.154 13.137l-2.6 18.749a1.75 1.75 0 0 0 1.493 1.974 1.8 1.8 0 0 0 .242.017 1.75 1.75 0 0 0 1.731-1.51l2.6-18.749a26.632 26.632 0 0 1 4.853-12.008 25.977 25.977 0 0 0 5.631 1.7h.008l.038.007c.8.144 1.52.243 2.19.3A26.725 26.725 0 0 0 64 82.7a26.609 26.609 0 0 0 11.829 2.757q1.237 0 2.483-.114c.677-.058 1.4-.157 2.194-.3l.038-.008h.02a26.01 26.01 0 0 0 5.624-1.7 26.622 26.622 0 0 1 4.854 12.009l2.6 18.749a1.75 1.75 0 0 0 1.731 1.51 1.8 1.8 0 0 0 .242-.017 1.75 1.75 0 0 0 1.493-1.974l-2.6-18.748a30.141 30.141 0 0 0-5.156-13.138 26.96 26.96 0 0 0 7.865-7.119 13.569 13.569 0 0 0 7.178 2.217 10.71 10.71 0 0 0 8.127-3.656c4.989-5.768 2.624-13.802-1.682-18.827zM29.026 71.583c-4.046 2.557-8.324 2.278-10.9-.7-2.634-3.047-3.126-8.637 1.692-14.264 5.194-6.06 5.3-14.057 5.387-21.114.1-7.449.179-13.882 5.539-17.205a11.772 11.772 0 0 1 6.138-2.008 7.868 7.868 0 0 1 2.235.32c4.147 1.222 6.521 5.586 6.872 6.272.254.851 1.919 7.088-2.5 10.944a26.232 26.232 0 0 0-9.283 18.642c-.619 14.173-3.512 18.058-5.18 19.113zm20.966 10.274c-.14-.012-.294-.034-.44-.05V65.13a14.435 14.435 0 0 1 5.893-11.647c0 .061-.007.124-.007.184a8.577 8.577 0 0 0 6.813 8.382v17.593a23.247 23.247 0 0 1-12.259 2.215zm11.392-30.935c.017 0 .032-.011.049-.014a14.443 14.443 0 0 1 5.14 0c.016 0 .03.01.046.013.12.022.234.056.353.08 2.088.585 2.091 1.833 2.091 2.665a5.063 5.063 0 1 1-10.125 0c0-.832 0-2.079 2.09-2.664.119-.024.235-.058.356-.08zM78 81.857a23.229 23.229 0 0 1-12.25-2.214V62.049a8.576 8.576 0 0 0 6.812-8.382c0-.061 0-.123-.006-.185a14.435 14.435 0 0 1 5.895 11.648v16.676c-.151.017-.306.039-.451.051zm3.95-.731v-16a17.913 17.913 0 0 0-14.706-17.647c-.042-.008-.083-.006-.125-.011a16.907 16.907 0 0 0-6.236 0c-.042 0-.082 0-.124.011A17.913 17.913 0 0 0 46.052 65.13v16a23.315 23.315 0 0 1-12.736-8.986c2.526-3.6 3.972-10.031 4.386-19.519a22.772 22.772 0 0 1 8.092-16.158c4.276-3.733 4.469-8.826 4.077-11.962a1.742 1.742 0 0 0 .433-.432c3.38-4.926 8.369-7.891 13.7-8.143 5.327.252 10.316 3.217 13.7 8.143a1.733 1.733 0 0 0 .434.425c-.394 3.134-.2 8.233 4.076 11.969A22.772 22.772 0 0 1 90.3 52.622c.414 9.488 1.86 15.921 4.386 19.519a23.313 23.313 0 0 1-12.735 8.985zm27.926-10.246c-2.578 2.984-6.856 3.261-10.9.7-1.668-1.055-4.561-4.94-5.18-19.113a26.232 26.232 0 0 0-9.285-18.642c-4.43-3.868-2.773-10.037-2.5-10.942.348-.683 2.723-5.051 6.873-6.274 2.536-.749 5.356-.181 8.373 1.688 5.36 3.323 5.443 9.756 5.539 17.205.091 7.057.193 15.054 5.387 21.114 4.822 5.63 4.325 11.22 1.693 14.264z" />
                                </svg>
                            </div>
                            <div class="font-nav-link d-none d-xs-none d-sm-flex">
                                Pets
                            </div>
                        </div>
                    </a>
                </li>

                <!-- Meu perfil -->
                <li class="nav-item ms-3 d-flex align-items-center">
                    <a class="nav-link perfil">
                        <div class="d-flex align-items-center">
                            <div class="me-1 d-flex align-items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25px">
                                    <title>60.User</title>
                                    <g id="_60.User" data-name="60.User">
                                        <path d="M12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,6Z" />
                                        <path d="M18.9,21.166l-1.972-.332a5,5,0,1,0-9.862,0L5.1,21.166a7,7,0,1,1,13.806,0Z" />
                                        <path d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Z" />
                                    </g>
                                </svg>
                            </div>
                            <div id="perfilText" class="font-nav-link d-none d-xs-none d-sm-flex">
                                Login
                            </div>
                        </div>
                    </a>
                </li>

            </ul>
        </div>
    </nav>
</header>`;

    if (headerContent) {
        const headerContainer = document.createElement('div');
        headerContainer.innerHTML = headerContent;

        const headerElement = headerContainer.querySelector('header');
        const linkperfil = headerElement.querySelector('.perfil')
        const perfilText = headerElement.querySelector('#perfilText')

        linkperfil.href = "login.html"
        
        token = localStorage.getItem('token')
        if (token) {
            const parts = token.split('.');
            if (parts.length === 3) {
                const parts = token.split('.');
                const payload = parts[1];
                const decodedPayload = atob(payload);
                const attributes = JSON.parse(decodedPayload);
                console.log(attributes)
                const OngIdFromToken = attributes.sub;
                const OngEmailFromToken = attributes.email;
                console.log(OngEmailFromToken)
                console.log(OngIdFromToken)
                role = localStorage.getItem('role')
                perfilText.textContent = "Meu Perfil"
                if(role === "USER"){
                    linkperfil.href = `profile.html?id=${OngIdFromToken}`;
                }
                else{
                    linkperfil.href = `ong.html?id=${OngIdFromToken}`;
                }
            }
        }
        document.body.insertBefore(headerElement, document.body.firstChild);
    } else {
        console.error('Header não encontrado no local storage.');
    }
});