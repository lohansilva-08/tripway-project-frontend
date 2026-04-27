# TripWay - Product Requirements Document (PRD)

## 1. Visão Geral do Produto
O TripWay é uma plataforma web para reserva e exploração de experiências turísticas, com foco em imersão cultural, sustentabilidade e turismo consciente. A aplicação permite que os usuários busquem, filtrem e reservem expedições, passeios e pacotes de viagem.

## 2. Objetivos
- Facilitar a descoberta de experiências autênticas e sustentáveis.
- Oferecer uma jornada fluida de busca, filtragem e reserva.
- Promover o turismo consciente e o apoio a comunidades locais.

## 3. Usuários-Alvo
- Viajantes em busca de experiências únicas e autênticas.
- Turistas focados em sustentabilidade e ecoturismo.
- Exploradores interessados na cultura e natureza local (ex: região Amazônica).

## 4. Funcionalidades Principais (Escopo Atual)

### 4.1. Exploração de Experiências (Página Pública)
- **Listagem de Experiências**: Exibição em formato de cards detalhados contendo:
  - Imagem representativa.
  - Título da experiência.
  - Localização.
  - Duração.
  - Avaliação (estrelas e quantidade de reviews).
  - Preço inicial.
  - Badges descritivos (ex: "Cancelamento Flexível", "Eco-Friendly").
- **Busca e Filtros**:
  - Busca textual livre por nome ou destino.
  - Filtro por faixa de preço.
  - Filtro por duração (Meio Período, Dia Inteiro, Multi-dias).
  - Filtro por nível de atividade (Leve, Moderado, Intenso).
- **Ordenação**:
  - Capacidade de ordenar por Mais Relevantes, Menor Preço e Melhor Avaliados.
- **Estados da Interface**:
  - Estado de Carregamento (Loading).
  - Estado de Sucesso (Listagem renderizada).
  - Estado Vazio (Nenhum resultado encontrado).
- **Paginação**:
  - Navegação entre as páginas de resultados.

### 4.2. Header & Footer Compartilhados
- Navegação padronizada para as principais áreas ("Expedições", "Rios", "Lodges", "Cultura").
- Acesso à funcionalidade de carrinho de compras e autenticação.
- Footer com links úteis, informações sobre a empresa e newsletter.

## 5. Regras de Negócio Básicas
- **Disponibilidade**: As experiências listadas dependem de disponibilidade (mockado no contexto atual, mas no futuro conectado ao estoque/capacidade dos fornecedores).
- **Preços**: Os valores exibidos representam o preço "A partir de", o que significa que adicionais podem alterar o valor final no checkout.
- **Avaliações**: Apenas usuários que concluíram a experiência poderão, no futuro, enviar avaliações. As notas são médias numéricas exibidas de 0 a 5.0.

## 6. Arquitetura Técnica Base
- **Frontend**: Angular 15.
- **Estilização**: Tailwind CSS.
- **Mock de Dados**: Serviço RxJS simulando tempo de resposta de API real para demonstração de carregamento (Observable com `delay`).
- **Padrão de Organização**: Separação clara por `features`, dividindo em pastas para componentes, páginas, modelos e serviços.
