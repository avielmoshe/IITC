export default function generateRandomId(): string {
  return "_" + Math.random().toString(36).substr(2, 9);
}
