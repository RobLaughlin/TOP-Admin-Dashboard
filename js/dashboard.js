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
        // Add event handler to menu button
        let menuBtn = document.querySelector(".header > .sidebarMenu > img");
        menuBtn.addEventListener("click", Dashboard.menuBtnClicked);

        window.addEventListener("resize", Dashboard.windowResized);
    }
};

Dashboard.init();