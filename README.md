# PC Builder BR

Uma plataforma em desenvolvimento inspirada no [PCPartPicker](https://pcpartpicker.com), focada no mercado brasileiro de hardware — preços em BRL, peças com estoque real em lojas nacionais e uma lógica de compatibilidade construída do zero.

## Sobre o projeto

A maioria das ferramentas de montagem de PC é voltada pro mercado americano/europeu, o que torna a comparação de preço e disponibilidade pouco útil pra quem compra no Brasil. Esse projeto nasceu como resposta a isso: uma ferramenta que considera **preços reais de varejistas brasileiros** (Kabum, Pichau, Terabyte) e implementa as regras de compatibilidade entre componentes do zero, sem depender de bibliotecas prontas.

O foco do projeto é tanto o resultado final quanto o processo: modelagem de banco relacional, lógica de negócio de compatibilidade de hardware, e uma API REST consumida por um front-end em React.

> **Status: MVP.** O catálogo de peças e os preços atuais servem para validar a lógica de compatibilidade e o fluxo de montagem — não refletem estoque ou preços em tempo real. Expandir a base de dados e manter os preços atualizados são prioridades para as próximas fases.

---

## Stack

**Front-end**
- React (Vite)
- JavaScript (ES6+)
- CSS3

**Back-end & Banco de Dados**
- Node.js + Express
- Prisma ORM
- PostgreSQL

---

## Funcionalidades

### Pronto
- [x] API REST para listagem de todos os componentes (CPUs, GPUs, Placas-mãe, RAMs, SSDs, Fontes, Gabinetes)
- [x] Interface de montagem passo a passo (wizard): CPU → Placa-mãe → GPU → RAM → SSD → PSU
- [x] Validação de socket entre CPU e placa-mãe
- [x] Validação de tipo de RAM (DDR4/DDR5) compatível com a placa-mãe
- [x] Validação de capacidade máxima de RAM suportada pela placa-mãe
- [x] Validação de slots de memória disponíveis (considerando quantidade de pentes já selecionados)
- [x] Seed de banco de dados com dados reais de mercado (CPUs Intel/AMD, placas-mãe por socket/chipset, RAM DDR4/DDR5, GPUs, SSDs SATA/NVMe)

### Em andamento
- [ ] Validação de compatibilidade de SSD (tipo de conexão x slots disponíveis na placa-mãe)
- [ ] Cálculo de consumo total (TDP de CPU + GPU) x wattage da fonte selecionada
- [ ] Resumo final da build com preço total somado
- [ ] Estilização completa da interface (CSS)

### Planejado
- [ ] Expandir catálogo de peças (mais modelos, mais marcas)
- [ ] Atualizar e manter preços sincronizados com o mercado
- [ ] Comparação de preços entre lojas (Kabum, Pichau, Terabyte, Amazon)

---

## Como rodar localmente

> Em breve — o projeto ainda está em ajustes na estrutura de pastas e configuração.
> Stack: Node.js + Express + Prisma (back-end) e React/Vite (front-end).

---

## Estrutura do banco de dados

O schema modela as relações reais de compatibilidade de hardware:

- **Socket** → relaciona quais CPUs e placas-mãe são fisicamente compatíveis.
- **Cpu** → possui TDP (`wtts`), presença de gráfico integrado, e vínculo com socket
- **Motherboard** → possui tipo de RAM suportado, capacidade máxima, quantidade de slots
- **Ram** → tipo (DDR4/DDR5), tamanho por pente, quantidade de pentes
- **Gpu** → TDP e quantidade de memória de vídeo
- **Ssd** → tipo de conexão (NVMe M.2, SATA M.2, SATA 2.5")
- **Psu** → wattage e selo de eficiência
- **Case** → gabinete (em expansão)

---

## Autor

Desenvolvido por [Lucas](https://github.com/lucasm712) aplicando conceitos de modelagem relacional, lógica de compatibilidade de hardware e desenvolvimento full-stack com React + Node + Prisma.



