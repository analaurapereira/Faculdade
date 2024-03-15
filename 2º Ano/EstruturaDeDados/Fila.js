// Definição do nó da lista encadeada
class No {
    constructor(dado) {
        this.dado = dado;    // O dado armazenado no nó
        this.proximo = null; // Referência para o próximo nó na lista encadeada
    }
}

// Implementação da Fila usando lista encadeada
class Fila {
    constructor() {
        this.inicio = null; // Início da fila
        this.fim = null;    // Fim da fila
        this.tamanho = 0;   // Tamanho da fila
    }

    // Adiciona um elemento ao final da fila
    enfileirar(elemento) {
        const novoNo = new No(elemento); // Cria um novo nó com o elemento fornecido

        if (this.estaVazia()) { // Verifica se a fila está vazia

            this.inicio = novoNo; // Se estiver vazia, o novo nó será tanto o início quanto o fim da fila
            this.fim = novoNo;
        } 
        
        else {

            this.fim.proximo = novoNo; // Se não estiver vazia, o próximo do nó final atual aponta para o novo nó
            this.fim = novoNo;         // O novo nó se torna o novo nó final
        }
        
        this.tamanho++; // Incrementa o tamanho da fila
    }

    // Remove e retorna o elemento do início da fila
    desenfileirar() {
        if (this.estaVazia()) {
            return null;
        }
        const noRemovido = this.inicio;        // Armazena o nó a ser removido (o nó no início da fila)
        this.inicio = this.inicio.proximo;     // Atualiza o início da fila para o próximo nó
        if (!this.inicio) {                    // Se o início é nulo, significa que a fila ficou vazia
            this.fim = null;                   // Nesse caso, também atualizamos o fim para null
        }
        this.tamanho--;                        // Decrementa o tamanho da fila
        return noRemovido.dado;                // Retorna o dado do nó removido
    }

    // Retorna o primeiro elemento da fila sem removê-lo
    primeiroDaFila() {
        if (this.estaVazia()) {
            return null;
        }
        return this.inicio.dado; // Retorna o dado do nó no início da fila
    }

    // Verifica se a fila está vazia
    estaVazia() {
        return this.tamanho === 0; // Retorna verdadeiro se o tamanho da fila for zero, indicando que está vazia
    }

    // Retorna o tamanho da fila
    tamanhoDaFila() {
        return this.tamanho; // Retorna o tamanho atual da fila
    }
}