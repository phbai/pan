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

export function isImage(file) {
	const mimetpeArr = ["image/jpeg", "image/png"];
	return mimetpeArr.includes(file.mimeType);
}

export function downloadFile (sUrl) {
	const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
	const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;

	//iOS devices do not support downloading. We have to inform user about this.
	if (/(iP)/g.test(navigator.userAgent)) {
	    alert('Your device does not support files downloading. Please try again in desktop browser.');
	    return false;
	}

	//If in Chrome or Safari - download via virtual link click
	if (isChrome || isSafari) {
	    //Creating new link node.
	    var link = document.createElement('a');
	    link.href = sUrl;

	    if (link.download !== undefined) {
	        //Set HTML5 download attribute. This will prevent file from opening if supported.
	        var fileName = sUrl.substring(sUrl.lastIndexOf('/') + 1, sUrl.length);
	        link.download = fileName;
	    }

	    //Dispatching click event.
	    if (document.createEvent) {
	        var e = document.createEvent('MouseEvents');
	        e.initEvent('click', true, true);
	        link.dispatchEvent(e);
	        return true;
	    }
	}

	// Force file download (whether supported by server).
	if (sUrl.indexOf('?') === -1) {
	    sUrl += '?download';
	}

	window.open(sUrl, '_self');
	return true;
}
