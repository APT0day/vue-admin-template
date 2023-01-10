interface Menu {
  title?: string;
  icon?: string;
  path?: string;
  name?: string;
  route?: string;
  sort?: number;
  meta?: {};
  children?: Menu[];
}

export interface IMenu extends Menu {}
