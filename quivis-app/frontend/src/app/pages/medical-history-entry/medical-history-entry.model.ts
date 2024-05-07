export interface MedicalHistoryEntry {
    id: number;
    title: string;
    date: string;   
}

export interface Image {
    name: string;
    objectURL: string;
}

export interface Product {
    name: string;
    price: string;
    code: string;
    sku: string;
    status: string;
    tags: string[];
    category: string;
    colors: string[];
    stock: string;
    inStock: boolean;
    description: string;
    images: Image[];
}
