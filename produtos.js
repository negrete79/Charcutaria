// produtos.js
const produtos = [
    // Salames
    {
        id: 1,
        nome: "Salame Italiano Artesanal",
        descricao: "Salame tradicional italiano, preparado com carnes selecionadas e especiarias importadas. Maturado por 90 dias.",
        preco: 1000,
        categoria: "salames",
        imagem: "https://images.unsplash.com/photo-1610367485454-2e68f3643b5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        nome: "Copacabana Especial",
        descricao: "Salame brasileiro com toques de pimenta e especiarias. Ideal para quem aprecia sabores mais intensos.",
        preco: 69.90,
        categoria: "salames",
        imagem: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        nome: "Salame Milano Tradicional",
        descricao: "Clássico salame italiano com grãos de pimenta. Textura macia e sabor equilibrado.",
        preco: 94.90,
        categoria: "salames",
        imagem: "https://images.unsplash.com/photo-1610367485454-2e68f3643b5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        nome: "Salame Napolitano",
        descricao: "Salame com especiarias típicas da região de Nápoles. Sabor marcante e aroma inconfundível.",
        preco: 79.90,
        categoria: "salames",
        imagem: "https://postimg.cc/grqQqKqm"
    },
    
    // Linguiças
    {
        id: 5,
        nome: "Linguiça Toscana Artesanal",
        descricao: "Linguiça italiana temperada com especiarias tradicionais. Perfeita para churrascos e molhos.",
        preco: 54.90,
        categoria: "linguicas",
        imagem: "https://images.unsplash.com/photo-1596797038534-2a67ed6df61c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        nome: "Linguiça Calabresa Picante",
        descricao: "Linguiça com pimenta calabresa, ideal para quem aprecia um sabor mais intenso e picante.",
        preco: 49.90,
        categoria: "linguicas",
        imagem: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 7,
        nome: "Linguiça Portuguesa Tradicional",
        descricao: "Linguiça portuguesa com vinho do Porto e especiarias. Sabor único e textura suculenta.",
        preco: 59.90,
        categoria: "linguicas",
        imagem: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 8,
        nome: "Linguiça Blumenau",
        descricao: "Linguiça alemã-brasileira, temperada com cominho e páprica. Ideal para chucrute e pratos germânicos.",
        preco: 44.90,
        categoria: "linguicas",
        imagem: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    
    // Presuntos
    {
        id: 9,
        nome: "Presunto Parma Premium",
        descricao: "Presunto italiano de alta qualidade, curado por 18 meses. Sabor intenso e textura única.",
        preco: 129.90,
        categoria: "presuntos",
        imagem: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 10,
        nome: "Presunto Serrano Espanhol",
        descricao: "Presunto espanhol curado nas montanhas, com sabor intenso e textura firme. Curado por 12 meses.",
        preco: 149.90,
        categoria: "presuntos",
        imagem: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 11,
        nome: "Presunto Ibérico de Bellota",
        descricao: "Presunto ibérico de porcos alimentados com bolotas. Curado por 36 meses. Sabor excecional.",
        preco: 299.90,
        categoria: "presuntos",
        imagem: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 12,
        nome: "Presunto Cozido Premium",
        descricao: "Presunto cozido lentamente com especiarias. Textura macia e sabor suave. Ideal para sanduíches.",
        preco: 59.90,
        categoria: "presuntos",
        imagem: "https://images.unsplash.com/photo-1607305387299-a3d9611cd469?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    
    // Queijos
    {
        id: 13,
        nome: "Queijo Provolone Defumado",
        descricao: "Queijo italiano defumado lentamente com madeiras nobres. Sabor marcante e textura firme.",
        preco: 79.90,
        categoria: "queijos",
        imagem: "https://images.unsplash.com/photo-1625739800888-a4d7e7b3b2f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 14,
        nome: "Queijo Parmesão 24 Meses",
        descricao: "Queijo parmesão italiano maturado por 24 meses. Sabor intenso e textura granulada.",
        preco: 119.90,
        categoria: "queijos",
        imagem: "https://images.unsplash.com/photo-1625739800888-a4d7e7b3b2f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 15,
        nome: "Queijo Gorgonzola Picante",
        descricao: "Queijo azul italiano com sabor picante e textura cremosa. Maturado por 90 dias.",
        preco: 99.90,
        categoria: "queijos",
        imagem: "https://images.unsplash.com/photo-1625739800888-a4d7e7b3b2f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 16,
        nome: "Queijo Mozzarella de Búfala",
        descricao: "Mozzarella fresca feita com leite de búfala. Textura macia e sabor delicado.",
        preco: 54.90,
        categoria: "queijos",
        imagem: "https://images.unsplash.com/photo-1625739800888-a4d7e7b3b2f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    
    // Acompanhamentos
    {
        id: 17,
        nome: "Mix de Azeitonas Premium",
        descricao: "Seleção de azeitonas verdes e pretas, temperadas com ervas finas e azeite extra virgem.",
        preco: 39.90,
        categoria: "acomp",
        imagem: "https://images.unsplash.com/photo-1486475594124-0d6b7aca5d6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 18,
        nome: "Cesta de Pães Artesanais",
        descricao: "Seleção de pães artesanais: ciabatta, baguette, pão de nozes e pão azeitona.",
        preco: 49.90,
        categoria: "acomp",
        imagem: "https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 19,
        nome: "Geleia de Pimenta Vermelha",
        descricao: "Geleia artesanal de pimenta vermelha, perfeita para acompanhar queijos e presuntos.",
        preco: 29.90,
        categoria: "acomp",
        imagem: "https://images.unsplash.com/photo-1478369402113-1fd53f17e8b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 20,
        nome: "Mel com Ervas Finas",
        descricao: "Mel artesanal infundido com alecrim, tomilho e lavanda. Perfeito para queijos e torradas.",
        preco: 34.90,
        categoria: "acomp",
        imagem: "https://images.unsplash.com/photo-1556910103-1c02745aae4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    
    // Kits
    {
        id: 21,
        nome: "Kit Degustação Premium",
        descricao: "Seleção especial com 3 tipos de salames, 2 queijos e azeitonas. Perfeito para presentear.",
        preco: 199.90,
        categoria: "kits",
        imagem: "https://images.unsplash.com/photo-1486475594124-0d6b7aca5d6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 22,
        nome: "Kit Italiano Tradicional",
        descricao: "Salame italiano, presunto Parma, queijo provolone e azeitonas. Tudo o que precisa para uma tábua italiana.",
        preco: 169.90,
        categoria: "kits",
        imagem: "https://images.unsplash.com/photo-1596797038534-2a67ed6df61c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 23,
        nome: "Kit Espanhol Autêntico",
        descricao: "Presunto serrano, salame espanhol, queijo manchego e azeitonas verdes. Sabores da Espanha.",
        preco: 189.90,
        categoria: "kits",
        imagem: "https://images.unsplash.com/photo-1556910103-1c02745aae4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 24,
        nome: "Kit Degustação de Queijos",
        descricao: "Seleção com 4 queijos diferentes: brie, gorgonzola, provolone, parmesão e coalho.",
        preco: 149.90,
        categoria: "kits",
        imagem: "https://images.unsplash.com/photo-1590502593747-42a996133562?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];
