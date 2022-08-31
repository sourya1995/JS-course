function ShowSubMenu() {
    const subMenu = document.getElementsByClassName("menu__sub")[0];
    subMenu.style.display = "block";
}

function hideSubMenu() {
    const subMenu = document.getElementsByClassName("menu__sub")[0];
    subMenu.style.display = "none";
}

function OnMenuItemMouseEnter(item) {
    item.classlist.add("menu__main__item:active");
    ShowSubMenu();

}

const menuItems = document.getElementsByClassName("menu__main__item");
for (const menuItem of menuItems) {
    menuItem.onmouseenter = () => OnMenuItemMouseEnter(menuItem);
}



const menu = document.getElementsByClassName("menu")[0];
menu.onmouseleave = hideSubMenu