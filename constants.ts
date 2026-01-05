
import { Gift } from './types';

export const EVENT_DATE = "2026-02-08T16:00:00";

export const INITIAL_GIFTS: Gift[] = [
    {
        id: 1,
        name: "Batedeira Planetária Inox",
        category: "Cozinha",
        image: "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?auto=format&fit=crop&q=80&w=800",
        purchased: false
    },
    {
        id: 2,
        name: "Liquidificador Digital Turbo",
        category: "Cozinha",
        image: "https://images.unsplash.com/photo-1585238341267-1cfec2046a55?auto=format&fit=crop&q=80&w=800",
        purchased: false
    },
    {
        id: 3,
        name: "Aparelho de Jantar Porcelana (20pçs)",
        category: "Jantar",
        image: "https://images.unsplash.com/photo-1580554530778-ca36943938b2?auto=format&fit=crop&q=80&w=800",
        purchased: false
    },
    {
        id: 4,
        name: "Jogo de Cama Algodão Egípcio King",
        category: "Quarto",
        image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800",
        purchased: false
    },
    {
        id: 5,
        name: "Faqueiro Inox Premium 42pçs",
        category: "Cozinha",
        image: "https://images.unsplash.com/photo-1591192453847-382650821c33?auto=format&fit=crop&q=80&w=800",
        purchased: false
    },
    {
        id: 6,
        name: "Jogo de Panelas Revestimento Cerâmico",
        category: "Cozinha",
        image: "https://images.unsplash.com/photo-1543083115-638c32cd3d58?auto=format&fit=crop&q=80&w=800",
        purchased: false
    }
];

export const PALETTE = [
    { name: "Sálvia", hex: "#7D8471", description: "Verde orgânico e sereno" },
    { name: "Areia", hex: "#D9D1C7", description: "Bege neutro atemporal" },
    { name: "Linho", hex: "#F2EFE9", description: "Off-white texturizado" },
    { name: "Carvão", hex: "#2D2A26", description: "Contraste elegante" }
];
