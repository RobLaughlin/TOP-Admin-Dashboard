const Dashboard = {
    HEADER_HEIGHT: 112,
    SIDEBAR_WIDTH: "300px",

    sidebarVisible: false,

    menuBtnClicked: () => {
        let sidebar = document.querySelector(".dashboard > .sidebar");
        const newHeight = document.body.scrollHeight - Dashboard.HEADER_HEIGHT;
        sidebar.style.height = newHeight.toString() + "px";
        
        sidebar.classList.remove(Dashboard.sidebarVisible ? "slide-in" : "slide-out");
        sidebar.classList.add(Dashboard.sidebarVisible ? "slide-out" : "slide-in");
        Dashboard.sidebarVisible = !Dashboard.sidebarVisible;
    },

    searchBarTyped: (e) => {
        const curInput = e.srcElement.value.toLowerCase();
        let projects = document.querySelectorAll(".projects > .card");
        projects.forEach(card => {
            const title = card.getElementsByClassName("title")[0].textContent.toLowerCase();
            const desc = card.getElementsByClassName("description")[0].textContent.toLowerCase();

            if (title.includes(curInput) || desc.includes(curInput)) {
                card.style.display = 'flex';
            }
            else {
                card.style.display = 'none';
            }
        });
    },

    windowResized: () => {
        if (window.innerWidth > 1200) {
            let sidebar = document.querySelector(".dashboard > .sidebar");
            sidebar.style.height = "auto";
        }
        else {
            let sidebar = document.querySelector(".dashboard > .sidebar");
            const newHeight = document.body.scrollHeight - Dashboard.HEADER_HEIGHT;
            sidebar.style.height = newHeight.toString() + "px";  
        }
    },

    init: () => {
        window.addEventListener("resize", Dashboard.windowResized);

        let menuBtn = document.querySelector(".header > .sidebarMenu > img");
        menuBtn.addEventListener("click", Dashboard.menuBtnClicked);

        let searchBar = document.querySelector(".header .search");
        searchBar.addEventListener("input", Dashboard.searchBarTyped);
        
    }
};

Dashboard.init();