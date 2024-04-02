interface queueInterface<Type> {
    enqueue(dataItem: Type): void;
    dequeue(): Type | undefined;
    isEmpty(): boolean;
    count(): number;
    printQueue(): void;
    peek(): Type | undefined;
    contains(dataItem: Type): boolean;
    clear(): void;
 }
 
 export class Queue<Type> implements queueInterface<Type> {
 
    private QueueData: Array<Type> = [];
 
    constructor() { }
 
   // Verificador de Fila Vazia    
    isEmpty(): boolean {
       let result = this.QueueData.length <= 0;
       return result;
    }
   // Adiciona novo item a fila
    enqueue(dataItem: Type): void {
       this.QueueData.push(dataItem);
    }
  // Retorna o primeiro elemento e o remove.
    dequeue(): Type | undefined {
       if (this.isEmpty()) {
          console.log("A fila está vazia");
          return;
       } else {
          var element = this.QueueData.shift();
          return element;
       }
    }
  // Retorna o número de elementos da fila
    count(): number {
       let len = this.QueueData.length;
       return len;
    }
 // Imprime os elementos
    printQueue(): void {
       for (let i = 0; i < this.QueueData.length; i++) {
          console.log(this.QueueData[i]);
       }
    }
 // Retorna o primeiro elemento da fila S/Remover
    peek(): Type | undefined {
       if (this.isEmpty()) {
          console.log("A fila está vazia");
          return;
       } else {
          var element = this.QueueData[0];
          return element;
       }
    }
 // Verfica se o item está na fila
    contains(dataItem: Type): boolean {
       if (this.QueueData.includes(dataItem)) {
          return true;
       } else {
          return false;
       }
    }
 // remove todos os valores da fila
    clear(): void {
       this.QueueData.length = 0;
    }
 
 }