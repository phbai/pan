export function parseTime(timestamp) {
  return new Date(parseInt(timestamp / 10000)).toLocaleString();
}

export function formatFileSize(fileSize, idx = 0) {  
  const units = ["B", "KB", "MB", "GB"];  
  if (fileSize < 1024 || idx === units.length - 1) {  
      return fileSize.toFixed(1) + units[idx];  
  }  
  return formatFileSize(fileSize / 1024, ++idx);  
} 
