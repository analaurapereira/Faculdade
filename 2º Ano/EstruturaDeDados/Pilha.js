// Definição do nó da lista encadeada
class No {
    constructor(dado) {
        this.dado = dado;    // Dado armazenado no nó
        this.proximo = null; // Referência para o próximo nó na lista
    }
}

// Implementação da Pilha usando lista encadeada
class Pilha {
    constructor() {
        this.topo = null;   // Topo da pilha
        this.tamanho = 0;   // Tamanho da pilha
    }

    // Adiciona um elemento no topo da pilha
    empilhar(elemento) {
        const novoNo = new No(elemento);   // Cria um novo nó com o elemento fornecido
        novoNo.proximo = this.topo;        // O próximo do novo nó aponta para o antigo topo
        this.topo = novoNo;                // O topo da pilha agora aponta para o novo nó
        this.tamanho++;                    // Incrementa o tamanho da pilha
    }

    // Remove e retorna o elemento do topo da pilha
    desempilhar() {
        if (this.estaVazia()) {            // Verifica se a pilha está vazia
            return null;
        }
        const noRemovido = this.topo;      // Armazena o nó que será removido (o topo da pilha)
        this.topo = this.topo.proximo;     // Atualiza o topo da pilha para o próximo nó
        this.tamanho--;                    // Decrementa o tamanho da pilha
        return noRemovido.dado;            // Retorna o dado do nó removido
    }

    // Retorna o elemento no topo da pilha sem removê-lo
    topoDaPilha() {
        if (this.estaVazia()) {            // Verifica se a pilha está vazia
            return null;
        }
        return this.topo.dado;             // Retorna o dado do nó no topo da pilha
    }

    // Verifica se a pilha está vazia
    estaVazia() {
        return this.tamanho === 0;         // Retorna true se o tamanho da pilha for 0, caso contrário false
    }

    // Retorna o tamanho da pilha
    tamanhoDaPilha() {
        return this.tamanho;               // Retorna o tamanho atual da pilha
    }
}