<script>
    let isMenuActive = false;

    const toggleMenu = () => {
        isMenuActive = !isMenuActive;
    };

    const menuItems = [
        { href: "./home", imgSrc: "/icons/home-icon.svg", alt: "Navigatie naar Home", label: "Home", bgColor: "#3F92B6" },
        { href: "./testing", imgSrc: "/icons/puzzle-icon.svg", alt: "Navigatie naar Testing", label: "Testing", bgColor: "#599AE7" },
        { href: "./lessons", imgSrc: "/icons/book-icon.svg", alt: "Navigatie naar Lessons", label: "Lessons", bgColor: "#954BE2" },
        { href: "./statistics", imgSrc: "/icons/chart-icon.svg", alt: "Navigatie naar Statistics", label: "Statistics", bgColor: "#06A192" },
        { href: "./profile", imgSrc: "/icons/person-icon.svg", alt: "Navigatie naar Profile", label: "Profile", bgColor: "#FD8C73" }
    ];
</script>

<article class="nav">
    <nav class="menu {isMenuActive ? 'active' : ''}" aria-hidden={!isMenuActive}>
        <ul>
            {#each menuItems as { href, imgSrc, alt, label, bgColor }, index}
                <li class:active={index === 0}>
                    <a href={href} tabindex={isMenuActive ? "0" : "-1"}>
                        <div style="background-color: {bgColor}">
                            <img src={imgSrc} alt={alt}>
                        </div>
                        <p>{label}</p>
                    </a>
                </li>
            {/each}
        </ul>
    </nav>
</article>

<button class="btn {isMenuActive ? 'close' : 'open'}" on:click={toggleMenu} aria-label={isMenuActive ? "Close Menu" : "Open Menu"} aria-expanded={isMenuActive}>
    <img src={isMenuActive ? "/icons/menu-close.svg" : "/icons/menu-open.svg"} alt={isMenuActive ? "Close menu" : "Open menu"}>
</button>

<style>
    button.btn {
        position: fixed;
        bottom: 2em;
        right: 2em;
        height: 56px;
        width: 56px;
        border-radius: 16px;
        background-color: #1C1C1C;
        opacity: 80%;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: background-color 0.5s ease, transform 0.5s ease;
    }

    button.btn.close {
        background-color: white;
    }

    .menu {
        position: fixed;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background-color: #292929;
        opacity: 98%;
        color: white;
        box-sizing: border-box;
        transition: left 0.3s ease;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .menu.active {
        left: 0;
    }

    .menu ul {
        display: flex;
        flex-wrap: wrap;
        max-height: 470px;
        height: 470px;
        max-width: 240px;
        margin: 0;
        padding: 0;
    }

    .menu li {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        box-sizing: border-box;
        list-style: none;
    }

    .menu li div {
        height: 100px;
        width: 100px;
        border-radius: 16px;
        opacity: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .menu li div img {
        height: 45px;
        width: 45px;
    }

    .menu li p {
        color: white;
        text-align: center;
    }

    .menu li.active div {
        border: 5px solid white;
    }
</style>