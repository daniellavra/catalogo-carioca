const produtos = [
    {
      nome: "Camiseta Estampada",
      descricao: "Camiseta 100% algodão, unissex, tamanhos P, M, G",
      preco: "R$ 15249,90",
      imagem: "https://via.placeholder.com/300x200.png?text=Camiseta+Estampada",
      whatsapp: "5521999999999"
    },
    {
      nome: "Short Jeans Feminino",
      descricao: "Short cintura alta, lavagens variadas",
      preco: "R$ 69,90",
      imagem: "https://via.placeholder.com/300x200.png?text=Short+Jeans",
      whatsapp: "5521999999999"
    },
    {
      nome: "Moletom Oversized",
      descricao: "Modelagem confortável, cores variadas",
      preco: "R$ 99,90",
      imagem: "https://via.placeholder.com/300x200.png?text=Moletom+Oversized",
      whatsapp: "5521999999999"
    }
  ];
  
  const catalogo = document.getElementById("catalogo");
  
  produtos.forEach(produto => {
    const card = document.createElement("div");
    card.className = "produto";
  
    card.innerHTML = `
      <img src="${produto.imagem}" alt="${produto.nome}">
      <h2>${produto.nome}</h2>
      <p>${produto.descricao}</p>
      <p class="preco">${produto.preco}</p>
      <a href="https://wa.me/${produto.whatsapp}?text=Olá! Tenho interesse no produto: ${encodeURIComponent(produto.nome)}" class="whatsapp-btn" target="_blank">
        Falar no WhatsApp
      </a>
    `;
  
    catalogo.appendChild(card);
  });
  