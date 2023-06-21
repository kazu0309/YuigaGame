export class Tab {
  button: string;
  section: string;
  tag: TabCategory;
  
  constructor(button: string, section: string, tag: TabCategory) {
    this.button = button;
    this.section = section;
    this.tag = tag;
  }
}

export enum TabCategory {
  home, slides, originality
}