// export interface MedicalHistoryService {
//     getNumberOfEntriesFromJSON(): void {
//       // Assuming you have a file input element in your HTML
//       const fileInput = document.getElementById('fileInput') as HTMLInputElement;
  
//       fileInput.addEventListener('change', (event) => {
//         const file = (event.target as HTMLInputElement).files?.[0];
  
//         if (file) {
//           const reader = new FileReader();
  
//           reader.onload = () => {
//             if (typeof reader.result === 'string') {
//               const data = JSON.parse(reader.result);
//               const numberOfEntries = Object.keys(data).length;
//               console.log(`Number of entries: ${numberOfEntries}`);
//             }
//           };
  
//           reader.readAsText(file);
//         }
//       });
//     }
//   }