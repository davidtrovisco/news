export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { title, description, link, publishedAt } = req.body;
  
      // Aqui você pode salvar esses dados em um banco de dados
      // Exemplo simples: salvar em memória (simulação)
      const newPost = { title, description, link, publishedAt };
      // Simule salvar no banco de dados ou sistema de armazenamento
      console.log('Nova notícia recebida:', newPost);
  
      res.status(200).json({ message: 'Notícia criada com sucesso', post: newPost });
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  }
  