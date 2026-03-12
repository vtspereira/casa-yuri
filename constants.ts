
import { Gift } from './types';

export const EVENT_DATE = "2026-04-15T16:00:00";

export const INITIAL_GIFTS: Gift[] = [

    // Cozinha
    { id: 1, name: "Jogo de copo", category: "Cozinha", image: "https://imgs.pontofrio.com.br/1533608016/1xg.jpg", purchased: false },
    { id: 2, name: "Jarra de vidro", category: "Cozinha", image: "https://www.havan.com.br/media/catalog/product/cache/73a52df140c4d19dbec2b6c485ea6a50/j/a/jarra-de-vidro-com-tampa-de-bambu-classic-lyor-1-litro_930528.jpg", purchased: false },
    { id: 3, name: "Forma de fundo removível", category: "Cozinha", image: "https://www.havan.com.br/media/catalog/product/cache/820af7facfa7aca6eb3c138e3457dc8d/f/o/forma-redonda-fundo-removivel-28cm-solecasa_1109308.jpg", purchased: false },
    { id: 4, name: "Boleira de vidro", category: "Cozinha", image: "https://lebiscuit.vtexassets.com/arquivos/ids/49806055-600-600/17455843656055.jpg", purchased: false },
    { id: 5, name: "Escorredor de macarrão inox", category: "Cozinha", image: "https://http2.mlstatic.com/D_NQ_NP_738296-MLA99619529614_122025-O.webp", purchased: false },
    { id: 6, name: "Kit copo medidor de vidro", category: "Cozinha", image: "https://m.media-amazon.com/images/I/71gSuDkXpkL.jpg", purchased: false },
    { id: 7, name: "Tábua de corte de vidro", category: "Cozinha", image: "https://m.media-amazon.com/images/I/61f+LdUbdKL.jpg", purchased: false },
    { id: 8, name: "Kit de peneiras inox", category: "Cozinha", image: "https://m.media-amazon.com/images/I/61jC1PeiMPL._AC_UF894,1000_QL80_.jpg", purchased: false },
    { id: 9, name: "Porta tempero giratório", category: "Cozinha", image: "https://down-br.img.susercontent.com/file/sg-11134201-7rccw-lsjwu2pfmdp1a9", purchased: false },
    { id: 10, name: "Jogo de facas", category: "Cozinha", image: "https://http2.mlstatic.com/D_NQ_NP_2X_601475-MLA99952943299_112025-F.webp", purchased: false },
    { id: 11, name: "Abridor de lata", category: "Cozinha", image: "https://cdn.awsli.com.br/761/761999/produto/16759359334ed9dfd18.jpg", purchased: false },
    { id: 20, name: "Jogo de xícara com pires", category: "Cozinha", image: "https://www.havan.com.br/media/catalog/product/cache/820af7facfa7aca6eb3c138e3457dc8d/x/i/xicara-de-cha-com-pires-francis-biona-havan-casa-200ml_1169316.webp", purchased: false },
    { id: 21, name: "Saladeira de vidro", category: "Cozinha", image: "https://m.media-amazon.com/images/I/712pdmLuGYL.jpg", purchased: false },
    { id: 22, name: "Jogo americano 1", category: "Cozinha", image: "https://images.tcdn.com.br/img/img_prod/1104285/kit_jogo_americano_verde_e_off_white_dupla_face_organico_801_1_5c6328dedf31ac7be814df8027604b5a.jpg", purchased: false },
    { id: 23, name: "Jogo americano 2", category: "Cozinha", image: "https://designecasa.com.br/cdn/shop/files/kit-elegance-mesa-posta-4-lugares-jogo-americano-anel-guardanapo-tecido-design-casa-azul-354868.heic", purchased: false },
    { id: 24, name: "Descanso de panela de silicone", category: "Cozinha", image: "https://lojakaster.cdn.magazord.com.br/img/2023/05/produto/4230/sirva-seus-alimentos-com-seguranca-e-conforto-alem-de-deixar-sua-mesa-muito-mais-bonita-com-os-produtos-da-linha-de-silicone-da-weck-18.png", purchased: false },
    { id: 25, name: "Taça de vinho", category: "Cozinha", image: "https://images.tcdn.com.br/img/img_prod/584235/jogo_6_tacas_para_vinho_cristal_580ml_bohemia_438986667_1_47d25652edb43ea3aed324fdc7b145fc_20250317123458.jpg", purchased: false },
  
    // Banheiro
    { id: 30, name: "Kit lavabo", category: "Banheiro", image: "https://cdn.leroymerlin.com.br/products/porta_sabonete_liquido_branco_16,8cmx7cm_james_91924084_a36e_600x600.jpg", purchased: false },
    { id: 31, name: "Jogo de toalha de banho 1", category: "Banheiro", image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQx6RCtJGYp89xnyRi9Mx1j0nMiqJpJrzn5p2yMb85ihGC6wR8LildJPon9MWAz-nQDxFOhSNxBYHYmHC8xVpvk4HH7smWzILHNYOtGil0HoaDvj1jwin0jXWg", purchased: false },
    { id: 32, name: "Jogo de toalha de banho 2", category: "Banheiro", image: "https://www.casadatoalha.com.br/cdn/shop/files/toalha-de-banho-gigante-jogo-de-toalha-2-banho-2-rosto-1-piso-gramatura-500gm-essence-off-e-azul.png", purchased: false },
  
    // Outros / limpeza
    { id: 40, name: "Balde retrátil", category: "Outros", image: "https://vassourasguarany.com.br/storage/2024/05/balde-retratil-1.png", purchased: false },
    { id: 41, name: "Varal de chão", category: "Outros", image: "https://images.tcdn.com.br/img/img_prod/1306368/varal_de_chao_com_abas_retratil_grande_aluminio_reforcado_e_resistente_103_1_28c40024db45d3c4152ba23dc5072483.jpg", purchased: false },
    { id: 42, name: "Mop spray", category: "Outros", image: "https://m.media-amazon.com/images/I/41bGKJT7rWL.jpg", purchased: false },
  
    // Cozinha
    { id: 50, name: "Batedeira 127v", category: "Cozinha", image: "https://m.media-amazon.com/images/I/51qLj-7DnGL._AC_SY300_SX300_QL70_ML2_.jpg", purchased: false },
    { id: 51, name: "Liquidificador 127v", category: "Cozinha", image: "https://martinelloeletrodomesticos.fbitsstatic.net/img/p/liquidificador-oster-oliq610-1400w-3-2-l-15-velocidades-110v-76005/262595.jpg", purchased: false },
    { id: 52, name: "Aspirador de pó vertical 127v", category: "Outros", image: "https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/jrcmlzvj/file.png", purchased: false },
    { id: 53, name: "Cafeteira elétrica 127v", category: "Cozinha", image: "https://m.media-amazon.com/images/I/41QniS6pVmL._AC_SY300_SX300_QL70_ML2_.jpg", purchased: false },
    { id: 54, name: "Torradeira Oster Inox 127v", category: "Cozinha", image: "https://jcsbrasil.vteximg.com.br/arquivos/ids/194079-1000-1000/OTOR600----1.jpg", purchased: false },
    { id: 55, name: "Passadeira a vapor portátil 127v", category: "Outros", image: "https://jcsbrasil.vteximg.com.br/arquivos/ids/226794-1000-1000/09.jpg", purchased: false },
    { id: 56, name: "Processador de alimentos 127v", category: "Cozinha", image: "https://images.tcdn.com.br/img/img_prod/789576/processador_de_alimentos_mondial_mpn_01_b_2093_01_preto_dm2t155645n_1787795_1_46ca934d0984fee8099b9d869acf6f3a.png", purchased: false },
    { id: 57, name: "Mixer 127v", category: "Cozinha", image: "https://images.tcdn.com.br/img/img_prod/1151387/mixer_vertical_300w_127v_m300_br_black_decker_5885_1_d3c8a65b237fa829eea2be4d0cc1cbe1.jpeg", purchased: false },
  
    // Quarto
    { id: 60, name: "Cobre leito Queen", category: "Quarto", image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lycl8006mu1h02", purchased: false },
    { id: 61, name: "Garrafa térmica", category: "Cozinha", image: "https://images.tcdn.com.br/img/img_prod/1061582/garrafa_termica_elegance_azul_1_litro_termopro_houseware_3755_1_1221c77c4dfcca858e22819473dcf83b.jpg", purchased: false }
  
  ];

export const PALETTE = [
    { name: "Terracotta", hex: "#8B3E24", description: "Tonalidade principal" },
    { name: "Terracotta Claro", hex: "#B55233", description: "Variação suave" },
    { name: "Creme", hex: "#FAFAF9", description: "Base neutra" },
    { name: "Escuro", hex: "#1C1917", description: "Contraste" }
];
