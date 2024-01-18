data = `
    <nav class="navbar navbar-expand-lg fixed-top" style="background-color: #e3f2fd; padding: 1%;">
    <div class="container-fluid">
        <a class="navbar-brand font-l" href="#">
            Asia-Pacific Conference on <br />Condensed Matter Physics 2024</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <div class="d-flex" role="search">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item mx-1 px-1">
                        <button type="button" class="btn btn-outline-light btn-nav font-l" onclick="window.location.href = 'index.html'">Home</button>
                    </li>
                    <li class="nav-item mx-1 px-1">
                        <button type="button" class="btn btn-outline-light btn-nav font-l" onclick="window.location.href = 'about.html'">About</button>
                    </li>
                    <li class="nav-item mx-1 px-1">
                        <button type="button" class="btn btn-outline-light btn-nav font-l" onclick="window.location.href = 'register.html'"
                        >Registration</button>
                    </li>
                    <li class="nav-item mx-1 px-1">
                        <button type="button" class="btn btn-outline-light btn-nav font-l" onclick="window.location.href = 'abstract.html'"
                        >Abstract
                            Submission</button>
                    </li>
                    <li class="nav-item mx-1 px-1">
                        <button type="button" class="btn btn-outline-light btn-nav font-l" onclick="window.location.href = 'program.html'">Program</button>
                    </li>
                    <li class="nav-item mx-1 px-1 dropdown">
                        <button type="button"
                            class="btn btn-outline-light btn-nav font-l nav-link dropdown-toggle mx-1 px-1"
                            data-bs-toggle="dropdown" aria-expanded="false"
                            style=" padding: 5%;">Information</button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item font-l" href="visa.html">Visa Information</a>
                            </li>
                            <li><a class="dropdown-item font-l" href="#">Accomodation</a></li>
                            <li><a class="dropdown-item font-l" href="#">Transportation</a>
                            </li>
                            <li><a class="dropdown-item font-l" href="#">Local Attractions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item mx-1 px-1">
                        <button type="button" class="btn btn-outline-light btn-nav font-l" onclick="window.location.href = 'index.html'">Organising
                            Commitee</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>`
    document.getElementById("navbarContainer").innerHTML = data;
    