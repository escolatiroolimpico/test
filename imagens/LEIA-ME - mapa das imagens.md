# Mapa das imagens do site EFTO

Cada pasta tem o nome da página onde as fotos aparecem.
**Para trocar uma foto:** substitui o ficheiro por outro com **exatamente o mesmo nome** (e a mesma extensão `.jpg`).
Depois, no browser, carrega em **Ctrl+F5** para ver a foto nova.

> Dica: usa fotos com no máximo 1600 px de largura e menos de 500 KB, para o site abrir rápido.

---

## inicio/ — Página inicial (`index.html`)
| Ficheiro | Onde aparece |
|---|---|
| `topo-fundo.jpg` | Fundo escuro do topo (por trás do "Precisão começa aqui") |
| `topo-foto.jpg` | Foto ao lado do título, no topo |
| `escola-mosaico-1-grande.jpg` | Secção "A Escola": foto alta da esquerda |
| `escola-mosaico-2.jpg` | Secção "A Escola": foto pequena de cima |
| `escola-mosaico-3.jpg` | Secção "A Escola": foto pequena de baixo |
| `inclusivo-foto-1.jpg` | Secção "Iniciação e alta competição": 1.ª foto |
| `inclusivo-foto-2.jpg` | Secção "Iniciação e alta competição": 2.ª foto |
| `passo-1-aula-experimental.jpg` | Passos: "Aula experimental" |
| `passo-2-formacao-continua.jpg` | Passos: "Formação contínua" |
| `passo-3-competicao.jpg` | Passos: "Competição" |

As fotos das **notícias** e dos **eventos** da página inicial vêm das pastas `noticias/` e `eventos/` (ver abaixo).
As fotos da **galeria** da página inicial são as 8 primeiras da pasta `galeria/`.

## escola/ — A Escola (`escola.html`)
| Ficheiro | Onde aparece |
|---|---|
| `topo-fundo.jpg` | Fundo do topo da página |
| `mosaico-1-grande.jpg` | "Nascida da paixão pelo tiro": foto alta |
| `mosaico-2.jpg` | "Nascida da paixão pelo tiro": foto pequena de cima |
| `mosaico-3.jpg` | "Nascida da paixão pelo tiro": foto pequena de baixo |
| `panorama-fundo.jpg` | Faixa "Concentração. Respiração. Disparo." |
| `instalacoes-1-alvos.jpg` | Instalações: "Alvos eletrónicos" |
| `instalacoes-2-postos.jpg` | Instalações: "Postos de tiro" |
| `instalacoes-3-espaco-prova.jpg` | Instalações: "Espaço de prova" |

## aulas/ — Horários & Preçário (`aulas.html`)
| Ficheiro | Onde aparece |
|---|---|
| `topo-fundo.jpg` | Fundo do topo da página |
| `passo-1-aula-experimental.jpg` | Passos: "Aula experimental" |
| `passo-2-formacao-continua.jpg` | Passos: "Formação contínua" |
| `passo-3-competicao.jpg` | Passos: "Competição" |

## equipa/ — Equipa (`equipa.html`)
| Ficheiro | Onde aparece |
|---|---|
| `topo-fundo.jpg` | Fundo do topo da página |
| *(fotos das pessoas)* | Põe aqui as fotos da equipa (ex.: `francisco-algarvio.jpg`) e escreve o nome em `js/site.js`, secção "2. EQUIPA" |

## eventos/ — Eventos (`eventos.html`) e cartões de eventos da página inicial
| Ficheiro | Onde aparece |
|---|---|
| `topo-fundo.jpg` | Fundo do topo da página Eventos |
| `visita-patricia-mamona.jpg` | Evento "Patrícia Mamona na EFTO" (também na página inicial) |
| `visita-sports-club-madeira.jpg` | Evento "Sports Club da Madeira" (também na página inicial) |
| `trofeu-campeoes.jpg` | Evento "Troféu dos Campeões" (também na página inicial) |
| `provas-bigman.jpg` | Evento "Provas BigMan" |
| `provas-inband.jpg` | Evento "Provas Inband" |

## noticias/ — Notícias (`noticias.html`), artigo (`artigo.html`) e notícias da página inicial
Cada artigo tem **uma** foto de capa, usada em todo o lado onde esse artigo aparece.
| Ficheiro | Onde aparece |
|---|---|
| `topo-fundo.jpg` | Fundo do topo da página Notícias |
| `artigo-respiracao.jpg` | Capa do artigo "Respiração e disparo" (Notícias, Início e topo do artigo) |
| `artigo-respiracao-foto-meio.jpg` | Foto no meio do texto do artigo "Respiração e disparo" |
| `artigo-resultados.jpg` | Capa do artigo "Resultados da jornada do Troféu BIG" |
| `artigo-sports-club-madeira.jpg` | Capa do artigo "Sports Club da Madeira em visita à EFTO" (Notícias, Início e topo do artigo) |
| `artigo-entrevista.jpg` | Capa do artigo "À conversa com…" |

## galeria/ — Galeria (`galeria.html`) e galeria da página inicial
| Ficheiro | Onde aparece |
|---|---|
| `topo-fundo.jpg` | Fundo do topo da página Galeria |
| `01.jpg` … `16.jpg` | As fotos da galeria, por esta ordem. A página inicial mostra só as 8 primeiras |

**Para acrescentar uma foto à galeria:** põe-na aqui com o número seguinte (ex.: `17.jpg`) e acrescenta `"17.jpg"` à lista `GALERIA` em `js/site.js`.

## contactos/ — Contactos (`contactos.html`)
| Ficheiro | Onde aparece |
|---|---|
| `topo-fundo.jpg` | Fundo do topo da página |
| `mapa-fundo.jpg` | Fundo da caixa do mapa, enquanto os cookies do Google não são aceites |

## privacidade/ — Privacidade (`privacidade.html`)
| Ficheiro | Onde aparece |
|---|---|
| `topo-fundo.jpg` | Fundo do topo da página |

## logos/
| Ficheiro | Onde aparece |
|---|---|
| `logo.png` | Ícone no separador do browser |
| `logo-branco.png` | Logótipo no menu (fundo escuro) e no rodapé |
| `logo-cor.png` | Logótipo no menu quando fica com fundo claro; ícone da página Privacidade |

## parceiros/ — Logótipos de parceiros (rodapé de todas as páginas)
Põe aqui os logótipos (de preferência `.png` com fundo transparente) e escreve o nome do ficheiro na lista `PARCEIROS` em `js/site.js`.
Enquanto não houver logótipo, aparece um espaço reservado com o texto "Parceiro 1", "Parceiro 2", etc.

## inicio/topo-video.mp4 (opcional)
Se quiseres um vídeo no topo da página inicial em vez da imagem, põe o vídeo aqui com este nome e segue a instrução escrita no `index.html` (logo no início da secção "ENTRADA").
Usa um vídeo curto (10–20 segundos), sem som e com menos de 5 MB, para não deixar o site lento.

## sem-uso/
Fotos que não estão em nenhum sítio do site (`carabina.jpg`, `inaug-medalhas.jpg`). Podes reaproveitá-las ou apagá-las.
