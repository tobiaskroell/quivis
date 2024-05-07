export interface MedicalHistoryEntry {
    id: number;
    title: string;
    date: string; 
    text: string;  
    images: Image[];
}

export interface Image {
    name: string;
    objectURL: string;
}
