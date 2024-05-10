interface ModelUsers {
    id: number;
    email :  string;
    password  : string;
    first_name : string;
    last_name :  string;
    birthday : number; 
    url : string;
    
}


interface ModelForm { 
    id: number
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    birthday?: string | null; 
    image_url?: string | null;
}






