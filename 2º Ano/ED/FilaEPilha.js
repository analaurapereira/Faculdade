// Implementação da Pilha usando lista encadeada
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Pilha {
  constructor() {
    this.topo = null;
    this.tamanho = 0;
  }

  push(elemento) {
    const novoNo = new Node(elemento);
    novoNo.next = this.topo;
    this.topo = novoNo;
    this.tamanho++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const elementoRemovido = this.topo.data;
    this.topo = this.topo.next;
    this.tamanho--;
    return elementoRemovido;
  }

  peek() {
    return this.isEmpty() ? null : this.topo.data;
  }

  isEmpty() {
    return this.tamanho === 0;
  }

  size() {
    return this.tamanho;
  }
}

// Implementação da Fila usando lista encadeada
class Fila {
  constructor() {
    this.inicio = null;
    this.fim = null;
    this.tamanho = 0;
  }

  enqueue(elemento) {
    const novoNo = new Node(elemento);
    if (this.isEmpty()) {
      this.inicio = novoNo;
    } else {
      this.fim.next = novoNo;
    }
    this.fim = novoNo;
    this.tamanho++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const elementoRemovido = this.inicio.data;
    this.inicio = this.inicio.next;
    this.tamanho--;
    if (this.isEmpty()) {
      this.fim = null;
    }
    return elementoRemovido;
  }

  front() {
    return this.isEmpty() ? null : this.inicio.data;
  }

  isEmpty() {
    return this.tamanho === 0;
  }

  size() {
    return this.tamanho;
  }
}
