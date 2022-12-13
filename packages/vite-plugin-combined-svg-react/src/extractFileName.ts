export function extractFileName(fileName: string) {
  return fileName.replace(/\.[^/.]+$/, "");
}
