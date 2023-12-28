// materials.js
import { MeshBasicMaterial, Color } from 'three';

const blackMaterial = new MeshBasicMaterial({ color: new Color('black') });
const whiteMaterial = new MeshBasicMaterial({ color: new Color('white') });
const pinkMaterial = new MeshBasicMaterial({ color: new Color('pink') });

export { blackMaterial,whiteMaterial,pinkMaterial };
