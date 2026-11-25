# Relatório Executivo: Diagnóstico Operacional e Estratégia de Produto — YellowBus (Lottapp)

**Foco:** Operação de Motoristas do Transporte Complementar ("Amarelinhos") | Manaus – Zona Leste / Polo Industrial (Suframa)

---

## 1. Mapeamento da Realidade Operacional (A Dor Real)

### Pilar 1: O Problema do "Voo às Cegas" e do Comboio Cego
* **A dinâmica na rua:** Um motorista que entra na rota (ex.: eixo Zona Leste $\rightarrow$ Suframa) não sabe quantos colegas da mesma linha estão rodando imediatamente à frente ou logo atrás dele.
* **Canibalização de passageiros:** Quando há 3 ou 4 amarelinhos separados por poucos minutos à frente, os primeiros "limpam" os pontos de ônibus. O motorista que vem logo atrás queima óleo diesel rodando com o carro vazio ou pegando apenas sobras.
* **Decisão de desvio tardia:** Sem visibilidade da distância em minutos até o carro da frente e o carro de trás, o motorista não sabe se vale a pena segurar o ritmo, acelerar ou trocar de rota antes de entrar em um trecho sem passageiros.

### Pilar 2: O Sistema Informal dos "Apontadores" (Custo vs. Ineficiência)
* **Como funciona hoje:** Para tentar descobrir quem passou na frente e há quanto tempo, os motoristas dependem de informantes informais ("apontadores") posicionados em pontos estratégicos ao longo da rota, que anotam horários e placas no papel.
* **Custo recorrente:** O motorista paga cerca de R$ 2,00 por dia/ponto para ter acesso a essa informação.
* **Falhas críticas desse modelo:**
  * **Não há garantia nem compromisso:** O motorista não é obrigado a pagar, e o apontador não é obrigado a estar no ponto nem a passar a informação correta.
  * **Perda de tempo operacional:** O motorista precisa reduzir a velocidade ou parar o micro-ônibus nos pontos de controle para conversar com o apontador, atrasando a viagem.
  * **Informação estática e atrasada:** O apontador só sabe quem passou por aquele poste específico, não onde os veículos estão agora nem a velocidade em que avançam.

### Pilar 3: Modelo Financeiro e Margem do Motorista
* **Custos fixos pesados:** Com diárias de locação do veículo entre R$ 220,00 e R$ 350,00 e o óleo diesel consumindo 45% a 55% do faturamento bruto, cada quilômetro rodado atrás de um comboio reduz diretamente o lucro líquido que vai para o bolso do motorista no fim do dia.
* **Oportunidade de substituição de gasto:** Se um motorista paga R$ 2,00/dia em pontos estratégicos (cerca de R$ 50,00 a R$ 60,00/mês considerando 26 dias trabalhados) por uma informação falha, ele já possui orçamento alocado para pagar por inteligência de rota — basta entregar um dado 100% confiável na tela por um valor mensal competitivo.

### Pilar 4: Gargalos de Interface e Usabilidade no Volante
* **Risco de grupos de WhatsApp:** Trocar áudios ou mensagens enquanto dirige no trânsito intenso da Av. Autaz Mirim ou Bola da Suframa é perigoso e impreciso.
* **Necessidade de simplicidade extrema:** O motorista não precisa de planilhas complexas ou sistemas burocráticos de cooperativa no primeiro momento; ele precisa de uma tela limpa estilo Uber, onde bate o olho em 1 segundo e enxerga o trajeto, os pontos estratégicos e o tempo exato de distância dos carros à frente e atrás.

---

## 2. Top 5 Problemas Críticos da Operação do Motorista

| # | Problema Crítico | Impacto Direto na Operação |
|---|---|---|
| **1** | **Rodar "Às Cegas" Atrás de Comboios** | Motorista queima diesel disputando pontos recém-esvaziados por 3 ou 4 carros à frente. |
| **2** | **Dependência de Apontadores Informais** | Gasto diário (R$ 2/dia) sem garantia de presença, precisão ou compromisso do informante. |
| **3** | **Falta de Visibilidade para Troca de Rota** | Sem saber o espaçamento (*headway*) em minutos, o motorista perde o timing de desviar para uma rota mais lucrativa. |
| **4** | **Paradas Desnecessárias para Coletar Informação** | Perda de fluidez na viagem ao precisar parar ou encostar nos pontos estratégicos para perguntar quem passou. |
| **5** | **Distração com Comunicação Informal (WhatsApp)** | Uso de áudios e mensagens no volante para tentar rastrear colegas de linha. |

---

## 3. Custo Estimado dos Problemas (Por Motorista)

* **Desperdício de Diesel em Comboio Cego:**
  * **Perda estimada:** 8 a 12 litros de diesel queimados por dia rodando atrás de veículos colados sem passageiros nos pontos.
  * **Impacto financeiro:** Ao custo médio do diesel (~R$ 6,20/L), representa **R$ 50,00 a R$ 75,00/dia** perdidos em combustível improdutivo.
* **Gasto com Apontadores Informais:**
  * **Perda estimada:** R$ 2,00/dia por ponto (**R$ 52,00 a R$ 104,00/mês** caso pague em 1 ou 2 pontos estratégicos por dia), sem garantia de retorno.
* **Corridas/Passageiros Perdidos por Falta de Desvio Rápido:**
  * **Perda estimada:** Deixar de captar 10 a 15 passageiros/dia (**R$ 45,00 a R$ 75,00/dia** a R$ 4,50–R$ 5,00) por insistir em um trecho onde já passaram vários carros minutos antes.

---

## 4. Solução Tecnológica no YellowBus (Lottapp)

Foco total no **App do Motorista**, projetado para rodar leve em Android básico com custo zero de servidor (free-tier).

### Arquitetura Funcional (Estilo Uber Simplificado)

#### 1. Mapa da Rota com Pontos Estratégicos (Checkpoints)
* Exibição clara do traçado GeoJSON da rota ativa (ex.: rota da Suframa) no mapa (`ng-mapcn` / `Mapbox`).
* Marcação visual dos pontos estratégicos fixos (os mesmos locais onde os apontadores costumavam ficar) para dar referência geográfica imediata ao motorista.

#### 2. Radar de Frota na Mesma Rota (Frente e Trás)
* Exibição em tempo real dos outros motoristas ativos na mesma linha.
* **HUD Direto (Bate-Olho):** Painel limpo no topo/rodapé da tela mostrando exatamente:
  * **À frente:** `1º carro: 2 min | 2º carro: 6 min | 3º carro: 11 min`
  * **Atrás:** `1º carro: 4 min | 2º carro: 9 min`

#### 3. Indicador Visual de Decisão (Seguir vs. Trocar de Rota)
* **Alerta visual por cor (Semáforo de Espaçamento):**
  * 🔴 **Vermelho (< 4 min do carro da frente):** Risco alto de pegar ponto vazio — sinaliza que vale a pena segurar o passo ou trocar de rota.
  * 🟢 **Verde (> 10 min do carro da frente):** Caminho livre com alta probabilidade de pontos cheios.
* **Seletor Rápido de Rota:** Botão de 1 toque para o motorista alternar sua rota no mapa caso decida mudar o itinerário no meio do turno.

---

## 5. Modelo de Negócio e Monetização

* **Substituição Direta de Custo:** Assinatura mensal via Pix (ex.: R$ 39,90/mês), saindo mais barato que pagar R$ 2,00/dia ao apontador, funcionando 24h por dia, sem precisar parar o carro e sem depender da boa vontade de terceiros.
* **Estratégia de Tração (Efeito Rede Local):** Lançamento focado em grupos fechados de motoristas de uma mesma linha específica (ex.: 15 motoristas da rota Suframa testando juntos gratuitamente por 14 dias) para garantir densidade no mapa desde o primeiro dia.
