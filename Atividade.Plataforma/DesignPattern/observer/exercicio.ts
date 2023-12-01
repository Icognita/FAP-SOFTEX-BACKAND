
// /**
//  * 
//  * 
//  * 
//  */



//  interface Observer {
//     update(event: string): void;
//   }
  
//   // Classe Observable (Subject)
//   class Editor {
//     private observers: Observer[] = [];
  
//     addObserver(observer: Observer): void {
//       this.observers.push(observer);
//     }
  
//     removeObserver(observer: Observer): void {
//       this.observers = this.observers.filter((obs) => obs !== observer);
//     }
  
//     notify(event: string): void {
//       this.observers.forEach((observer) => observer.update(event));
//     }
//   }
  
//   // Subclasse TextEditor implementando Observer
//   class TextEditor implements Observer {
//     private lines: string[] = [];
  
//     insertLine(lineNumber: number, text: string): void {
//       this.lines.splice(lineNumber - 1, 0, text);
//       this.notify("lineInserted");
//     }
  
//     removeLine(lineNumber: number): void {
//       this.lines.splice(lineNumber - 1, 1);
//       this.notify("lineRemoved");
//     }
  
//     update(event: string): void {
//       if (event === "open") {
//         // Handle open event
//       } else if (event === "save") {
//         // Handle save event
//         this.printContent();
//       }
//     }
  
//     private printContent(): void {
//       console.log(this.lines.join("\n"));
//     }
//   }
  
//   // Exemplo de uso
//   const textEditor = new TextEditor();
//   const editor = new Editor();
  
//   editor.addObserver(textEditor);
  
//   // Simulação de entrada do usuário
//   // (Você pode substituir isso por interações do usuário no ambiente do Hipertexto 6)
//   let userInput: string;
  
//   do {
//     let userInput = prompt("Digite uma linha de texto (ou 'EOF' para encerrar):");
//     if (userInput !== "EOF") {
//       textEditor.insertLine(textEditor.getLines().length + 1, userInput);
//     }
//   } while (userInput !== "EOF");
  
//   textEditor.notify("save");