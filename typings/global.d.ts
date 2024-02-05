export interface ChildItem {
    node: {
        id: string;
        label: string;
        url: string;
        path: string;
    };
}

export interface MenuItem {
    id: string;
    label: string;
    path: string;
    childItems?: {
        edges: ChildItem[];
    };
}

export interface MenuData {
    footerMenus: {
        edges: MenuItem[];
    };
}
