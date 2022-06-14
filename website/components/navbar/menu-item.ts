export interface MenuItem {
  label: string;
  href: string | null;
  children?: MenuItem[];
}
