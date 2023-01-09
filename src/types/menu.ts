interface Menu {
  path?: string;
  name: string;
  meta: {
    menu: {
      icon?: string;
      title: string;
    };
  };
  children?: Menu[];
}

export interface IMenu extends Menu {}
