import create, { SetState } from 'zustand';

interface StoreState {
    
    token: string | null;
    setToken: (token: string | null) => void;
    removeToken: () => void;

    idUser: string | null;
    setIdUser: (idUser: string | null) => void;
    removeIdUser:() => void;

    role: string | null;
    setRole: (role: string | null) => void;
    removeRole:() => void;
    
    email: string | null;
    setEmail: (role: string | null) => void;
    removeEmail:() => void;
}

const store = create<StoreState>((set: SetState<StoreState>) => ({
    // ini fungsi untuk menyimpan , menampilkan & menghapus token ( token di simpan di local storage)
    token: localStorage.getItem('token'),
    setToken: (token) => {
        if (token) {
            localStorage.setItem('token', token);
        } else {
            localStorage.removeItem('token');
        }
        set({ token });
    },
    removeToken: () => {
        localStorage.removeItem('token');
        set({ token: null });
    },

    idUser: localStorage.getItem('idUser'),
    setIdUser: (idUser) => {
        if (idUser) {
            localStorage.setItem('idUser', idUser);
        } else {
            localStorage.removeItem('idUser');
        }
        set({ idUser });
    },
    removeIdUser: () => {
        localStorage.removeItem('idUser');
        set({ idUser: null });
    },

    role: localStorage.getItem('role'),
    setRole: (role) => {
        if (role) {
            localStorage.setItem('role', role);
        } else {
            localStorage.removeItem('role');
        }
        set({ role });
    },
    removeRole: () => {
        localStorage.removeItem('role');
        set({ role: null });
    },
    
    email: localStorage.getItem('email'),
    setEmail: (email) => {
        if (email) {
            localStorage.setItem('email', email);
        } else {
            localStorage.removeItem('email');
        }
        set({ email });
    },
    removeEmail: () => {
        localStorage.removeItem('email');
        set({ email: null });
    },

}));

export const useStore = store;
