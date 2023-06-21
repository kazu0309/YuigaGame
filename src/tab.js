export class Tab {
    constructor(button, section, tag) {
        this.button = button;
        this.section = section;
        this.tag = tag;
    }
}
export var TabCategory;
(function (TabCategory) {
    TabCategory[TabCategory["home"] = 0] = "home";
    TabCategory[TabCategory["slides"] = 1] = "slides";
    TabCategory[TabCategory["originality"] = 2] = "originality";
})(TabCategory || (TabCategory = {}));
