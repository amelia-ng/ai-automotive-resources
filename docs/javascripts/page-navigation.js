document.addEventListener("DOMContentLoaded", function () {
    var content = document.querySelector(".search-noresults .markdown-section");
    var menuLinks = document.querySelectorAll(
        ".book-summary .summary a[href]:not([href='#'])"
    );

    if (!content || !menuLinks.length) {
        return;
    }

    var currentUrl = new URL(window.location.href);
    var pages = [];
    var seen = new Set();

    menuLinks.forEach(function (link) {
        if (link.closest(".summary > li:first-child")) {
            return;
        }

        var url = new URL(link.href, window.location.href);
        if (url.origin !== currentUrl.origin || seen.has(url.pathname)) {
            return;
        }

        seen.add(url.pathname);
        pages.push({
            href: link.getAttribute("href"),
            path: url.pathname,
            title: link.textContent.trim()
        });
    });

    var currentIndex = pages.findIndex(function (page) {
        return page.path === currentUrl.pathname;
    });

    if (currentIndex === -1) {
        return;
    }

    var previous = pages[currentIndex - 1];
    var next = pages[currentIndex + 1];
    var navigation = document.createElement("nav");
    navigation.className = "page-navigation";
    navigation.setAttribute("aria-label", "Page navigation");

    function addLink(page, direction, arrow) {
        if (!page) {
            return;
        }

        var link = document.createElement("a");
        link.className = "page-navigation__link page-navigation__link--" + direction;
        link.href = page.href;
        link.innerHTML =
            '<span class="page-navigation__direction">' + arrow + " " + direction + "</span>" +
            '<span class="page-navigation__title"></span>';
        link.querySelector(".page-navigation__title").textContent = page.title;
        navigation.appendChild(link);
    }

    addLink(previous, "Previous", "←");
    addLink(next, "Next", "→");
    content.insertAdjacentElement("afterend", navigation);
});
