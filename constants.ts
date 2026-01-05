
import { Gift } from './types';

export const EVENT_DATE = "2026-02-08T67:30:00";

export const INITIAL_GIFTS: Gift[] = [
    // Banheiro
    { id: 1, name: "Jogo de toalhas", category: "Banheiro", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 2, name: "Cesto de roupa", category: "Banheiro", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 3, name: "Tapete de banheiro", category: "Banheiro", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 4, name: "Saboneteira", category: "Banheiro", image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 5, name: "Escova para vaso sanitário", category: "Banheiro", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 6, name: "Porta-escova de dentes", category: "Banheiro", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800", purchased: false },

    // Quarto
    { id: 7, name: "Jogo de cama", category: "Quarto", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 8, name: "Edredom", category: "Quarto", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 9, name: "Cobertor", category: "Quarto", image: "https://images.unsplash.com/photo-1541123603104-512919d6a96c?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 10, name: "Protetor de colchão", category: "Quarto", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 11, name: "Protetor de travesseiro", category: "Quarto", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 12, name: "Lençol", category: "Quarto", image: "https://images.unsplash.com/photo-1616627988484-bbe31317a28e?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 13, name: "Pillow top", category: "Quarto", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 14, name: "Velas aromáticas", category: "Quarto", image: "https://images.unsplash.com/photo-1602874801006-3aab9f7f0f21?auto=format&fit=crop&q=80&w=800", purchased: false },

    // Cozinha
    { id: 15, name: "Abridor de lata", category: "Cozinha", image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 16, name: "Açucareiro", category: "Cozinha", image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 17, name: "Formas", category: "Cozinha", image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 18, name: "Assadeiras", category: "Cozinha", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 19, name: "Afiador de facas", category: "Cozinha", image: "https://images.unsplash.com/photo-1593618998160-e34014e67546?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 20, name: "Panela de pressão", category: "Cozinha", image: "https://images.unsplash.com/photo-1584990347449-5df7c4a0e4f3?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 21, name: "Descanso de panela", category: "Cozinha", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 22, name: "Conjunto de xícaras", category: "Cozinha", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 23, name: "Porta tempero", category: "Cozinha", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 24, name: "Copo de medida", category: "Cozinha", image: "https://images.unsplash.com/photo-1562158147-f8da1d2e0fad?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 25, name: "Ralador", category: "Cozinha", image: "https://images.unsplash.com/photo-1590750089562-8f856828d4b7?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 26, name: "Pegador de macarrão inox", category: "Cozinha", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 27, name: "Porta papel toalha", category: "Cozinha", image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 28, name: "Porta guardanapo", category: "Cozinha", image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 29, name: "Panos de prato", category: "Cozinha", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 30, name: "Chaleira", category: "Cozinha", image: "https://images.unsplash.com/photo-1563822249366-3efbb6c40b54?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 31, name: "Colher de sorvete", category: "Cozinha", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 32, name: "Jogo de panelas", category: "Cozinha", image: "https://images.unsplash.com/photo-1543083115-638c32cd3d58?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 33, name: "Escumadeira inox", category: "Cozinha", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 34, name: "Concha inox", category: "Cozinha", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 35, name: "Frigideira antiaderente", category: "Cozinha", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 36, name: "Tábua para cortes", category: "Cozinha", image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 37, name: "Potes de vidro", category: "Cozinha", image: "https://images.unsplash.com/photo-1601000938259-9e92002320b2?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 38, name: "Jarra", category: "Cozinha", image: "https://images.unsplash.com/photo-1587824612693-aa0f203f5c1b?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 39, name: "Garrafa térmica (café)", category: "Cozinha", image: "https://images.unsplash.com/photo-1601024445121-e5b82f020549?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 40, name: "Conjunto para sobremesa", category: "Jantar", image: "https://images.unsplash.com/photo-1580554530778-ca36943938b2?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 41, name: "Rodinho de pia", category: "Cozinha", image: "https://images.unsplash.com/photo-1585933646149-8e2c89d06ef8?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 42, name: "Saleiro", category: "Cozinha", image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 43, name: "Jogo americano", category: "Jantar", image: "https://images.unsplash.com/photo-1600857544200-242c8e37d3c6?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 44, name: "Clever dripper (coador)", category: "Cozinha", image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 45, name: "Cortador de pizza", category: "Cozinha", image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 46, name: "Jogo de pizza", category: "Jantar", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 47, name: "Colheres de silicone", category: "Cozinha", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 48, name: "Escorredor de macarrão", category: "Cozinha", image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 49, name: "Jogo de copos", category: "Jantar", image: "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 50, name: "Jogo de pratos", category: "Jantar", image: "https://images.unsplash.com/photo-1580554530778-ca36943938b2?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 51, name: "Formas para assar", category: "Cozinha", image: "https://images.unsplash.com/photo-1621447504864-d8686e12698c?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 52, name: "Conjunto de tigelas", category: "Cozinha", image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 53, name: "Peneira", category: "Cozinha", image: "https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 54, name: "Multiprocessador", category: "Cozinha", image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 55, name: "AirFryer", category: "Cozinha", image: "https://images.unsplash.com/photo-1624806992928-daad7285e8c8?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 56, name: "Sanduicheira", category: "Cozinha", image: "https://images.unsplash.com/photo-1607623488235-d4a82e87f7c0?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 57, name: "Liquidificador", category: "Cozinha", image: "https://images.unsplash.com/photo-1585238341267-1cfec2046a55?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 58, name: "Batedeira", category: "Cozinha", image: "https://images.unsplash.com/photo-1578643463396-0997cb5328c1?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 59, name: "Torradeira", category: "Cozinha", image: "https://images.unsplash.com/photo-1605221197999-73e3cb4743c5?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 60, name: "Potes herméticos", category: "Cozinha", image: "https://images.unsplash.com/photo-1601000938259-9e92002320b2?auto=format&fit=crop&q=80&w=800", purchased: false },

    // Outros / Decoração
    { id: 61, name: "Mop", category: "Decoração", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 62, name: "Aspirador de pó", category: "Decoração", image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 63, name: "Porta chaves", category: "Decoração", image: "https://images.unsplash.com/photo-1598300188089-f32a51a87c68?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 64, name: "Ferro de passar", category: "Decoração", image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 65, name: "Pano de chão", category: "Decoração", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 66, name: "Pregadores de roupa", category: "Decoração", image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 67, name: "Tábua de passar roupa", category: "Decoração", image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&q=80&w=800", purchased: false },
    { id: 68, name: "Vassoura", category: "Decoração", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800", purchased: false }
];

export const PALETTE = [
    { name: "Sálvia", hex: "#7D8471", description: "Verde orgânico e sereno" },
    { name: "Areia", hex: "#D9D1C7", description: "Bege neutro atemporal" },
    { name: "Linho", hex: "#F2EFE9", description: "Off-white texturizado" },
    { name: "Carvão", hex: "#2D2A26", description: "Contraste elegante" }
];
