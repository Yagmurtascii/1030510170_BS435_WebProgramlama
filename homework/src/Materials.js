// materials.js
import { MeshBasicMaterial, Color } from 'three';

// Örnek bir materyal nesnesi oluşturun
const blackMaterial = new MeshBasicMaterial({ color: new Color('black') });
const whiteMaterial = new MeshBasicMaterial({ color: new Color('white') });
const pinkMaterial = new MeshBasicMaterial({ color: new Color('pink') });

export { blackMaterial,whiteMaterial,pinkMaterial };
