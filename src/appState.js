import { Tab, TabCategory } from './tab.js';
export class AppState {
    constructor() {
        this.allTabs = [
            new Tab("nav-home", "section-home", TabCategory.home),
            new Tab("nav-slides", "section-slides", TabCategory.slides),
            new Tab("nav-originality", "section-originality", TabCategory.originality),
        ];
        this.selectedTab = this.allTabs[0].tag;
        this.isVisibleNavigationMenu = false;
    }
    setTabButtonEvent() {
        this.allTabs.forEach((element) => {
            const tabButton = document.getElementsByClassName(element.button);
            const collection = tabButton;
            for (let index = 0; index < collection.length; index++) {
                collection[index].addEventListener("click", () => {
                    this.changeTab(element.tag);
                });
            }
        });
    }
    toggleLoadingState() {
        const launchScreen = document.getElementById("launch-screen");
        const container = document.getElementById("container");
        if (launchScreen && container) {
            launchScreen.classList.toggle("visible");
            container.classList.toggle("visible");
        }
        else {
            console.error("要素が見つかりませんでした。");
        }
    }
    changeTab(tab, alwaysCloseNavigationMenu = false) {
        this.selectedTab = tab;
        const hasHeader = this.selectedTab === this.allTabs[0].tag;
        document.body.classList.toggle("has-header", hasHeader);
        this.turnVisibility();
        this.scrollToTop();
        this.toggleNavigation(alwaysCloseNavigationMenu);
    }
    toggleNavigation(alwaysCloseNavigationMenu = false) {
        const menu = document.getElementById("menu");
        if (alwaysCloseNavigationMenu) {
            menu.classList.remove("visible");
            this.isVisibleNavigationMenu = false;
        }
        else {
            menu.classList.toggle("visible");
            this.isVisibleNavigationMenu = !this.isVisibleNavigationMenu;
        }
        const toggleButton = document.getElementById("nav-button-toggle");
        const object = toggleButton.querySelector("object");
        if (this.isVisibleNavigationMenu) {
            object.data = "resources/symbols/xmark.svg";
        }
        else {
            object.data = "resources/symbols/line.3.horizontal.svg";
        }
    }
    setToggleNavigationEvent() {
        const homeButton = document.getElementById("nav-button-home");
        if (homeButton) {
            homeButton.addEventListener("click", () => {
                this.changeTab(TabCategory.home, true);
            });
        }
        else {
            console.error("homeButtonが見つかりませんでした。");
        }
        const toggleButton = document.getElementById("nav-button-toggle");
        if (toggleButton) {
            toggleButton.addEventListener("click", () => {
                const menu = document.getElementById("menu");
                this.toggleNavigation();
            });
        }
        else {
            console.error("menuが見つかりませんでした。");
        }
    }
    turnVisibility() {
        this.allTabs.forEach((element) => {
            const tabButton = document.getElementsByClassName(element.button);
            const collection = tabButton;
            const section = document.getElementById(element.section);
            if (tabButton && section) {
                for (let index = 0; index < collection.length; index++) {
                    collection[index].classList.toggle("active", this.selectedTab === element.tag);
                }
                section.classList.toggle("visible", this.selectedTab === element.tag);
            }
            else {
                console.error("tabButton、sectionが見つかりませんでした。");
            }
        });
    }
    addSlides() {
        const galleryContainer = document.getElementById("slides-gallery");
        if (galleryContainer) {
            for (let index = 0; index < 13; index++) {
                const image = document.createElement("img");
                image.src = `https://raw.githubusercontent.com/kazu0309/YuigaGame/main/resources/Slide ${index + 1}.svg`;
                image.alt = "スライド";
                image.style.animationDelay = index * 50 + "ms";
                galleryContainer.appendChild(image);
            }
        }
        else {
            console.error("galleryContainerが見つかりませんでした。");
        }
    }
    addAnimationToOriginality() {
        const originality = document.getElementsByClassName("originality");
        const collection = originality;
        for (let index = 0; index < collection.length; index++) {
            const element = collection[index];
            element.style.animationDelay = index * 100 + "ms";
        }
    }
    scrollToTop() {
        window.scroll({ top: 0, behavior: "instant" });
    }
}
