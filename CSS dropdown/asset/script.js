const menu = document.getElementById( "menu" ),
chevron = document. getElementById( "chevron" );

    const toggleDropdown = ( ) => {
        menu.classList. toggle( "open");
        chevron. innerHTML = !menu.classList. contains("open") ? '<i class="fa-solid fa-chevron-down"></i>' : '<i class="fa-solid fa-xmark"></i>'
    };

    const handleMainButtonClicked = ( ) => alert("Dashboard button clicked!");
    const handleMenuButtonClicked = ( ) => { toggleDropdown();
        alert ("Menu button clicked");
    };